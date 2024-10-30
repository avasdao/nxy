/* Import modules. */
import React from 'react'

import { action, computed, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

import Bugsnag from '@bugsnag/react-native'

/**
 * Area 51 Store
 *
 * Manages the individual platform's settings.
 */
class Area51 {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        // TODO
    }

    /* Initialize (observable) variables. */
    @observable var1 = 0

    /* Initialize (persistent) variables. */
    @persist @observable var2 = null

    /* Run BUGSNAG test. */
    @action.bound
    runBugsnagTest() {
        console.log('[Area 51] Testing BUGSNAG error report.')
        Bugsnag.notify(new Error('[Area 51] Testing BUGSNAG error report.'))
    }
}

const Store = new Area51()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
