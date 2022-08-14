import { observable, action, computed } from 'mobx'
import { create } from 'mobx-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Profile from './Profile'
import System from './System.js'
import Token from './Token.js'

const hydrate = create({
    storage: AsyncStorage,
    jsonify: true,
})

/**
 * Store
 *
 * Base store to manage the overall application's data and activities.
 */
class Store {
    Profile = Profile.Context
    System = System.Context
    Token = Token.Context

    constructor() {
        Promise.all([
            hydrate('Profile', Profile.Store),
            hydrate('System', System.Store),
            hydrate('Token', Token.Store),
        ])
        // .then(() => this.System.initData()),
        .then(() => {
            console.info('Data store has loaded successfully!')
        })
    }
}

/* Export class. */
export default new Store()
