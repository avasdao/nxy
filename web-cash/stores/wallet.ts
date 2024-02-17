/* Import modules. */
import { defineStore } from 'pinia'

import {
    encodeAddress,
    listUnspent,
} from '@nexajs/address'

import { sha256 } from '@nexajs/crypto'

import {
    encodePrivateKeyWif,
    entropyToMnemonic,
    mnemonicToEntropy,
} from '@nexajs/hdnode'

import { getCoins } from '@nexajs/purse'

import {
    getOutpoint,
    getTip,
    getTokenInfo,
    getTransaction,
    subscribeAddress,
} from '@nexajs/rostrum'

import { OP } from '@nexajs/script'

import {
    getTokens,
    sendToken,
} from '@nexajs/token'

import {
    binToHex,
    hexToBin,
} from '@nexajs/utils'

import { Wallet } from '@nexajs/wallet'

/* Libauth helpers. */
import {
    encodeDataPush,
    instantiateRipemd160,
    instantiateSecp256k1,
} from '@bitauth/libauth'

import _createWallet from './wallet/create.ts'

let ripemd160
let secp256k1

;(async () => {
    /* Instantiate Libauth crypto interfaces. */
    ripemd160 = await instantiateRipemd160()
    secp256k1 = await instantiateSecp256k1()
})()

/* Set ($NXY) token id. */
const AVAS_TOKENID = '57f46c1766dc0087b207acde1b3372e9f90b18c7e67242657344dcd2af660000'

const TX_GAS_AMOUNT = 1000 // 10.00 NEXA

/* Build (contract) script. */
// NOTE: This is the "optimized" version of the NexScript v0.1.0
//       Stakehouse contract (w/out the use of `OP_SWAP`), which saves 1 byte.
// NOTE: Reversing the visible variables ALSO saves 1 byte.
//       Version 2 will take advantage of this.
const STAKEHOUSE_V1_SCRIPT = new Uint8Array([
    OP.FROMALTSTACK,
        OP.CHECKSEQUENCEVERIFY,
        OP.DROP,
    OP.FROMALTSTACK,
        OP.CHECKSIGVERIFY,
])

/**
 * Wallet Store
 */
export const useWalletStore = defineStore('wallet', {
    state: () => ({
        /* Initialize entropy (used for HD wallet). */
        // NOTE: This is a cryptographically-secure "random" 32-byte (256-bit) value. */
        _entropy: null,

        /* Wallet object. */
        _wallet: null,

    }),

    getters: {
        /* Return (abbreviated) wallet status. */
        abbr(_state) {
            return _state.wallet?.abbr
        },

        /* Return wallet status. */
        address(_state) {
            return _state.wallet?.address
        },

        /* Return NexaJS wallet instance. */
        asset(_state) {
            if (!this.assets) {
                return null
            }

            return this.wallet.assets[this.wallet.assetid]
        },

        /* Return wallet status. */
        assets(_state) {
            if (!this.wallet) {
                return null
            }

            return this.wallet.assets
        },

        /* Return wallet status. */
        isLoading(_state) {
            if (!this.wallet) {
                return true
            }

            return this.wallet.isLoading
        },

        /* Return wallet status. */
        isReady(_state) {
            if (this.wallet?._entropy) {
                return true
            }

            return this.wallet.isReady
        },

        /* Return NexaJS wallet instance. */
        wallet(_state) {
            return _state._wallet
        },

        WalletStatus() {
            return WalletStatus
        },


        // wallet(_state) {
        //     return _state._wallet
        // },

        // wif(_state) {
        //     return _state._wif
        // },


    },

    actions: {
        /**
         * Initialize
         *
         * Setup the wallet store.
         *   1. Retrieve the saved entropy.
         *   2. Initialize a Wallet instance.
         *   3. Load assets.
         */
        async init() {
            console.info('Initializing wallet...')

            if (this._entropy === null) {
                this._wallet = 'NEW' // FIXME TEMP NEW WALLET FLAG
                // throw new Error('Missing wallet entropy.')
                return console.error('Missing wallet entropy.')
            }

            /* Request a wallet instance (by mnemonic). */
            this._wallet = await Wallet.init(this._entropy, true)
            console.log('(Initialized) wallet', this._wallet)

            /* Set (default) asset. */
            this._wallet.setAsset('0')
        },

        createWallet(_entropy) {
            /* Validate entropy. */
            // NOTE: Expect HEX value to be 32 or 64 characters.
            if (_entropy.length !== 32 && _entropy.length !== 64) {
                console.error(_entropy, 'is NOT valid entropy.')

                _entropy = null
            }

            _createWallet.bind(this)(_entropy)

            /* Initialize wallet. */
            this.init()
        },

        async transfer(_receiver, _satoshis) {
            /* Validate transaction type. */
            if (this.asset.group === '0') {
                /* Send coins. */
                return await this.wallet.send(_receiver, _satoshis)
            } else {
                /* Send tokens. */
                return await this.wallet.send(this.asset.token_id_hex, _receiver, _satoshis)
            }
        },

        /**
         * Select Asset
         *
         * Sets the active asset displayed on the UI.
         */
        selectAsset(_assetid) {
            this._assetid = _assetid
        },

        setEntropy(_entropy) {
            this._entropy = _entropy
        },

        setMnemonic(_mnemonic) {
            let entropy
            let error

            try {
                /* Derive entropy. */
                entropy = mnemonicToEntropy(_mnemonic)
            } catch (err) {
                /* Set error message. */
                error = err.message
            }

            /* Validate error. */
            if (error) {
                return error
            }

            /* Set entropy. */
            this._entropy = entropy

            /* Create wallet. */
            this.createWallet(entropy)

            /* Return entropy. */
            return this.wallet
        },

        getAddress(_accountIdx) {
            return this.wallet.getAddress(_accountIdx)
        },

        async groupTokens() {
            const tokens = {}

            for (let i = 0; i < this.tokens.length; i++) {
                const token = this.tokens[i]
                // console.log('TOKEN (grouped):', token)

                // console.log('DETAILS', this.assets[token.tokenid])
                if (!tokens[token.tokenid]) {
                    let tokenidHex
                    let ticker

                    tokenidHex = this.assets[token.tokenid]?.token_id_hex

                    if (tokenidHex) {
                        ticker = await $fetch(`https://nexa.exchange/v1/ticker/quote/${tokenidHex}`)
                            .catch(err => console.error(err))
                    }

                    tokens[token.tokenid] = {
                        name: this.assets[token.tokenid]?.name || 'Unknown Asset',
                        decimals: this.assets[token.tokenid]?.decimal_places || 0,
                        iconUrl: this.assets[token.tokenid]?.iconUrl || '',
                        tokens: token.tokens,
                        tokenidHex,
                        ticker,
                    }
                } else {
                    tokens[token.tokenid].tokens += token.tokens
                }
            }

            return tokens
        },

        destroy() {
            /* Reset wallet. */
            this._entropy = null
            this._wallet = null
            this._wif = null
            this._coins = null
            this._tokens = null

            console.info('Wallet destroyed successfully!')
        },
    },
})
