/* Import modules. */
import React from 'react'

import { action, runInAction, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

/**
 * Blank Store
 *
 * Manages the individual platform's settings.
 */
class Blank {
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
        console.log('Running Blank test...')
    }

    /* Balance display. */
    @computed
    get balanceDisplay() {
        if (this.balance === 0) {
            return 0
        } else {
            const balance = sats / 100000000
            console.log('\nBALANCE', balance)

            return balance
        }
    }

}

const Store = new Blank()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
