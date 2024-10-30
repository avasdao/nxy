/* Import modules. */
import React from 'react'

import { action, computed, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

import { randomBytes } from '@nexajs/crypto'

/**
 * Crypto Store
 *
 * Manages the individual platform's settings.
 */
class Crypto {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        // TODO
    }

    /* Initialize (observable) variables. */
    @observable var1 = 0

    /* Initialize (persistent) variables. */
    @persist @observable var2 = null

    /* Run test. */
    @action.bound
    async runTest() {
        console.log('Running Crypto test...')

        const myBytes = randomBytes(32)
        console.log('MY BYTES', myBytes)
    }
}

const Store = new Crypto()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
