/* Import modules. */
import React from 'react'

import { action, computed, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

import { ethers, utils, Wallet as EvmWallet } from '../../libs/ethers-setup.js'

import { listUnspent } from '@nexajs/address'
import { Wallet as UtxoWallet } from '@nexajs/wallet'

// import moment from 'moment'

/**
 * Wallet Store
 *
 * Manages the user's profile information..
 */
class Wallet {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        /* Create the wallet upon initialization. */
        // TODO: Add error-handling in the event of failure.
        //       All on-chain functions depend on access to this wallet.
        console.info('Initializing Wallet store..')
        this.initWallet()
    }

    /* Initialize (observable) variables. */
    @observable balance = 0
    @observable txCount = 0
    @observable wallet = null
    @observable userid = null

    /* Initialize (persistent) variables. */
    @persist @observable mnemonic = 'armed insect flower embrace hair sense affair robot involve razor clock defy'

    /* Create wallet. */
    @action.bound
    async initWallet(_seed) {
        /* Set node URL. */
        // const NODE_URL = 'wss://speedy-nodes-nyc.moralis.io/39f5474b84a2f39277aea60a/avalanche/mainnet/ws'

        /* Set provider. */
        // const provider = new ethers.providers.WebSocketProvider(NODE_URL)

        /* Set mnemonic. */
        // const mnemonic = require('../../.secrets').mnemonic


        let privateKey = null

        /* Set private key. */
        // FIXME: We need to provide an optimal UX for retrieving this private key.
        if (_seed) {
            /* Initialize wallet. */
            const mnemonicWallet = EvmWallet.fromMnemonic(mnemonic)
            console.log('\nWALLET (mnemonic):', mnemonicWallet)

            privateKey = utils.id(_seed)
        } else {
            // nexa:nqtsq5g5rv6u2k2uftdzx59fm70umm7j7fqll0fmmay32x33
        }
        console.log('SEED', _seed)
        console.log('PRIVATE KEY', privateKey)

        /* Initialize wallet. */
        // const _wallet = new EvmWallet(privateKey, provider)
        // console.log('WALLET', _wallet)

        /* Save wallet. */
        // this.saveWallet(_wallet)

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
    saveWallet(_wallet) {
        this.wallet = _wallet
    }

    /* Run test. */
    @action.bound
    async runUtxoTest() {
        /* Initialize locals. */
        let unspent

        console.log('Running Wallet test...')

        const now = performance.now()
        /* Initialize wallet. */
        this.wallet = await UtxoWallet
            .init(this.mnemonic)
            .catch(err => console.error(err))
        // console.log('WALLET', this.wallet)
        const end = performance.now()
        console.log(
        `💰 New wallet created! Took ${end - now}ms, Address: ${this.wallet.address}`,
        )
        // console.log('WALLET ADDRESS', this.wallet.address)

        /* Request unspent coins. */
        // unspent = await listUnspent(this.wallet.address)
        //     .catch(err => console.error(err))
        // console.log('UNSPENT', unspent)

        // const response = await wallet.send('nexa:nqtsq5g5mysklvg5qtejx9lpp50a2z7wjg9y70g7cjcj39cy', BigInt(2000))
        //     .catch(err => console.error(err))
        // console.log('TX RESPONSE', response)
    }

    /* Run test. */
    @action.bound
    async runEvmTest() {
        console.log('Running SOLUTION test...')

        const now = performance.now()
        console.log('💰 Creating new Wallet...')
        const wallet = ethers.Wallet.createRandom()
        const end = performance.now()
        console.log(
        `💰 New wallet created! Took ${end - now}ms, Phrase: ${wallet.mnemonic.phrase}`,
        )
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
const Store = new Wallet()

/* Initialize (store) context. */
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
