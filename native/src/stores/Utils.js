/* Import modules. */
import React from 'react'

import { action, computed, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

/**
 * Utilities Store
 *
 * Manages the individual platform's settings.
 */
class Utils {
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
        console.log('Running Utilities test...')
    }
}

const Store = new Utils()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
