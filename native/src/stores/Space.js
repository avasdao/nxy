/* Import modules. */
import React from 'react'

import { action, runInAction, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

// import Profile from './Profile'

/**
 * Space Store
 *
 * Manages the individual platform's settings.
 */
class Space {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        /* Request quotes. */
        // this.requestQuote('AVAX') // Avalanche

    }

    /* Initialize (observable) variables. */
    @observable basePairBalances = 0
    @observable tradePairBalances = 0

    /* Initialize (persistent) variables. */
    @persist @observable currentPool = null

}

const Store = new Space()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
