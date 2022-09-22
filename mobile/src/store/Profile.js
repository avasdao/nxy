/* Import modules. */
import React from 'react'

import { action, computed, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

import 'react-native-get-random-values'
import '@ethersproject/shims'
import { ethers, utils, Wallet } from 'ethers'

import moment from 'moment'

/**
 * Profile Store
 *
 * Manages the user's profile information..
 */
class Profile {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        /* Create the wallet upon initialization. */
        // TODO: Add error-handling in the event of failure.
        //       All on-chain functions depend on access to this wallet.
        console.info('Initializing crypto wallet..')
        this.createWallet()
    }

    /* Initialize (observable) variables. */
    @observable balance = 0
    @observable txCount = 0
    @observable wallet = null
    @observable userid = null

    /* Initialize (persistent) variables. */
    @persist @observable phone = ''
    @persist @observable firstName = ''
    @persist @observable lastName = ''
    @persist @observable streetAddress = ''

    /* Create wallet. */
    @action.bound
    async createWallet(_seed) {
        /* Set node URL. */
        const NODE_URL = 'wss://speedy-nodes-nyc.moralis.io/39f5474b84a2f39277aea60a/avalanche/mainnet/ws'

        /* Set provider. */
        const provider = new ethers.providers.WebSocketProvider(NODE_URL)

        /* Set mnemonic. */
        // const mnemonic = require('../../.secrets').mnemonic

        /* Initialize wallet. */
        // const mnemonicWallet = Wallet.fromMnemonic(mnemonic)
        // console.log('\nWALLET (mnemonic):')

        let privateKey = null

        /* Set private key. */
        // FIXME: We need to provide an optimal UX for retrieving this private key.
        if (_seed) {
            privateKey = utils.id(_seed)
        } else {
            privateKey = require('../../.secrets').privateKey
        }
        console.log('SEED', _seed)
        console.log('PRIVATE KEY', privateKey)

        /* Initialize wallet. */
        const _wallet = new Wallet(privateKey, provider)
        // console.log('WALLET', _wallet)

        /* Save wallet. */
        this.saveWallet(_wallet)

        // Querying the network
        const _balance = await this.wallet.getBalance()
            .catch(err => console.error(err))
        // console.log('\nBALANCE (bn)', typeof balanceBN, balanceBN)

        /* Save balance. */
        this.saveBalance(_balance)

        /* Set balance. */
        // this.balance = ethers.BigNumber.from(balanceBN)
        // console.log('\nBALANCE', typeof this.balance, this.balance)

        /* Set transaction count. */
        const _txCount = await this.wallet.getTransactionCount()
            .catch(err => console.error(err))
        // console.log('\nTX COUNT', typeof this.txCount, this.txCount)

        /* Save transaction count. */
        this.saveTxCount(_txCount)

        return {
            wallet: _wallet,
            balance: _balance,
            txCount: _txCount,
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

    /* Save userid. */
    @action.bound
    saveUserid(_userid) {
        this.userid = _userid
    }

    /* Save (mobile) phone number. */
    @action.bound
    savePhone(_phone) {
        this.phone = _phone
    }

    /* Save first name. */
    @action.bound
    saveFirstName(_firstName) {
        this.firstName = _firstName
    }

    /* Save last name. */
    @action.bound
    saveLastName(_lastName) {
        this.lastName = _lastName
    }

    /* Save street address. */
    @action.bound
    saveStreetAddress(_streetAddress) {
        this.streetAddress = _streetAddress
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

    /* Display name. */
    @computed
    get displayName() {
        if (this.firstName && this.lastName) {
            return `${this.firstName} ${this.lastName}`
        } else if (this.firstName) {
            return `${this.firstName}`
        } else {
            return 'Guest User'
        }
    }

    /* User greeting. */
    @computed
    get greeting() {
        if (this.firstName && this.lastName) {
            return `Good morning ${this.firstName} ${this.lastName}!`
        } else if (this.firstName) {
            return `Good morning ${this.firstName}!`
        } else {
            return 'Good morning Guest!'
        }
    }

}

/* Initialize store. */
const Store = new Profile()

/* Initialize (store) context. */
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
