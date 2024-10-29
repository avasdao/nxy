/* Import modules. */
import React from 'react'

import { action, runInAction, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

/**
 * Experimental Store
 *
 * Manages the individual platform's settings.
 */
class Experimental {
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
    runTest() {
        console.log('Running Experimental test...')
    }
}

const Store = new Experimental()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
