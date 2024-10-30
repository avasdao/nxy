/* Import modules. */
import React from 'react'
import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import { persist } from 'mobx-persist'
import * as DeviceKeychain from 'react-native-keychain'

/* Import (local) modules. */
import { Wallet } from '../libs/ethers-setup.js'

/**
 * Save Keychain
 *
 * Saves the (JSON) keychain data to the device's secure storage container.
 */
const _saveKeychain = async (_keychain) => {
    /* Initialize locals. */
    let username
    let password
    let response

    try {
        /* Set username. */
        username = 'keychain'

        /* Set password. */
        password = JSON.stringify(_keychain)

        /* Store credentials. */
        response = await DeviceKeychain
            .setGenericPassword(username, password)
    } catch (err) {
        console.log(err)

        /* Return error. */
        return err
    }

    /* Return response. */
    return response
}

/**
 * Keychain Store
 *
 * Manages the individual platform's settings.
 */
class Keychain {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        /* Initialize store. */
        this.init()
    }

    /* Initialize (observable) variables. */
    @observable _keychain = null

    /* Initialize (persistent) stub. */
    // NOTE: Will throw an error if `@persist` is NOT present.
    //       (Error: [serializr] Failed to find default schema for undefined)
    @persist stub = null

    /* Initialization. */
    @action.bound
    async init () {
        /* Initialize locals. */
        let keychain

        keychain = await this.getKeychain()
        console.log('INIT (keychain)', keychain)

        /* Validate keychain. */
        if (
            keychain &&
            typeof keychain !== 'undefined' &&
            keychain !== 'No credentials stored'
        ) {
            runInAction(() => {
                /* Save as observable. */
                this._keychain = keychain
            })
        }
    }

    /* Generate a (random) keychain. */
    @action.bound
    async generateKeychain() {
        /* Initialize locals. */
        let keychain
        let response
        let wallet

        /* Generate (random) wallet. */
        wallet = Wallet.createRandom()
        console.log('WALLET', wallet)

        /* Build keychain. */
        keychain = {
            personas: [{
                title: 'My Persona #1',
                address: wallet.address,
                entropy: wallet.mnemonic.entropy.slice(2),
                fingerprint: wallet.fingerprint,
                mnemonic: wallet.mnemonic.phrase,
                path: wallet.path,
                publicKey: wallet.publicKey,
            }],
        }
        // console.log('KEYCHAIN', keychain)

        /* Save keychain. */
        response = await _saveKeychain(keychain)
        // console.log('SAVE RESPONSE', response)

        /* Validate response. */
        if (response) {
            runInAction(() => {
                /* Save as observable. */
                this._keychain = keychain
            })
        }

        /* Return response. */
        return response
    }

    /* Retrieve keychain. */
    @action.bound
    async getKeychain() {
        /* Initialize locals. */
        let credentials
        let keychain

        try {
            /* Retrieve credentials. */
            credentials = await DeviceKeychain.getGenericPassword()

            /* Validate credentials. */
            if (credentials && typeof credentials !== 'undefined') {
                /* Set keychain. */
                keychain = credentials.password
            }

            /* Validate keychain. */
            if (
                keychain &&
                typeof keychain !== 'undefined' &&
                keychain !== 'No credentials stored'
            ) {
                /* Decode keychain. */
                keychain = JSON.parse(keychain)

                /* Return keychain. */
                return keychain
            } else {
                console.log('No credentials stored')
                return 'No credentials stored'
            }
        } catch (err) {
            console.error('Failed to access Keychain', err)
            return err
        }
    }

    /* Retrieve keychain. */
    @action.bound
    async saveKeychain(_keychain) {
        runInAction(() => {
            /* Save as observable. */
            this._keychain = _keychain
        })

        return _saveKeychain(_keychain)
    }

    /* Destroy keychain. */
    @action.bound
    async destroyKeychain() {
        /* Initialize locals. */
        let response

        /* Reset stored credentials. */
        response = await DeviceKeychain.resetGenericPassword()

        runInAction(() => {
            /* Save as observable. */
            this._keychain = null
        })

        /* Return response. */
        return response
    }

    /* Run test. */
    @action.bound
    async runTest() {
        console.log('Running KEYCHAIN test...')
    }

    /* Keychain. */
    @computed
    get keychain() {
        return this._keychain
    }
}

const Store = new Keychain()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
