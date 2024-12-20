/* Import modules. */
import React from 'react'
import { action, computed, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'
import moment from 'moment'
import { listUnspent } from '@nexajs/address'
// import { Wallet as UtxoWallet } from '@nexajs/wallet'

/* Import (local) modules. */
import { ethers, utils, Wallet as EvmWallet } from '../libs/ethers-setup.js'

/**
 * Lounge Store
 *
 * Manages the user's profile information..
 */
class Lounge {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        /* Initialize store. */
        // this.init()
    }

    /* Initialize (observable) variables. */
    @observable balance = 0
    @observable txCount = 0
    @observable wallet = null
    @observable userid = null

    /* Initialize (persistent) variables. */
    @persist @observable mnemonic = null

    /* Initialization. */
    @action.bound
    async init() {
        console.info('Initializing LOUNGE store...')
        console.log('MNEMONIC', this.mnemonic)

        // TODO
    }

    /* Create wallet. */
    @action.bound
    async createPersona(_seed) {
console.log('LOUNGE (createPersona)', _seed)
        /* Set node URL. */
        // const NODE_URL = 'wss://speedy-nodes-nyc.moralis.io/39f5474b84a2f39277aea60a/avalanche/mainnet/ws'

        /* Set provider. */
        // const provider = new ethers.providers.WebSocketProvider(NODE_URL)

        /* Set mnemonic. */
        // const mnemonic = require('../../.secrets').mnemonic

        /* Initialize wallet. */
        // const mnemonicLounge = EvmLounge.fromMnemonic(mnemonic)
        // console.log('\nWALLET (mnemonic):')

        let privateKey = null

        /* Set private key. */
        // FIXME: We need to provide an optimal UX for retrieving this private key.
        if (_seed) {
            privateKey = utils.id(_seed)
        } else {
            // nexa:nqtsq5g5rv6u2k2uftdzx59fm70umm7j7fqll0fmmay32x33
        }
        console.log('SEED', _seed)
        console.log('PRIVATE KEY', privateKey)

        /* Initialize wallet. */
        // const _wallet = new EvmLounge(privateKey, provider)
        // console.log('WALLET', _wallet)

        /* Save wallet. */
        // this.saveLounge(_wallet)

        // Querying the network
        // const _balance = await this.wallet.getBalance()
        //     .catch(err => console.error(err))
        // console.log('\nBALANCE (bn)', typeof balanceBN, balanceBN)

        /* Save balance. */
        // this.saveBalance(_balance)

        /* Set balance. */
        // this.balance = ethers.BigNumber.from(balanceBN)
        // console.log('\nBALANCE', typeof this.balance, this.balance)

        /* Set transaction count. */
        // const _txCount = await this.wallet.getTransactionCount()
        //     .catch(err => console.error(err))
        // console.log('\nTX COUNT', typeof this.txCount, this.txCount)

        /* Save transaction count. */
        // this.saveTxCount(_txCount)

        return {
            WIP: 'still upgrading + migrating...',
            wallet: null,
            balance: 1337,
            txCount: 888,
        }
    }

    /* Save balance. */
    @action.bound
    saveBalance(_balance) {
        this.balance = _balance
    }

    /* Save transaction count. */
    @action.bound
    saveTxCount(_txCount) {
        this.txCount = _txCount
    }

    /* Save wallet. */
    @action.bound
    saveLounge(_wallet) {
        this.wallet = _wallet
    }

    /* Run test. */
    @action.bound
    async changeMnemonic() {
        /* Initialize locals. */
        let newMnemonic

        newMnemonic = moment().unix()

        this.mnemonic = newMnemonic

        console.log('Changing mnemonic to ->', this.mnemonic)
    }

    /* Run test. */
    @action.bound
    async runTest() {
        /* Initialize locals. */
        let unspent

        console.log('Running Lounge test...')
    }

    /* Balance display. */
    @computed
    get balanceDisplay() {
        if (this.balance === 0) {
            return 0
        } else {
            const wei = ethers.BigNumber.from(this.balance)
            console.log('\nWEI', wei)

            const sats = wei.div(10000000000).toNumber()
            console.log('\nSATS', sats)

            const balance = sats / 100000000
            console.log('\nBALANCE', balance)

            return balance
        }
    }

}

/* Initialize store. */
const Store = new Lounge()

/* Initialize (store) context. */
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
