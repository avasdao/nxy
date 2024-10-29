/* Import modules. */
import React from 'react'

import { action, runInAction, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

/**
 * Society Store
 *
 * Manages the individual platform's settings.
 */
class Society {
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
        console.log('Running Society test...')
    }
}

const Store = new Society()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
