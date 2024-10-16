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
        console.info('Initializing Profile store..')
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
