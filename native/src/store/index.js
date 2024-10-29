import { create } from 'mobx-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Crypto from './Crypto.js'
import Economy from './Economy.js'
import Lounge from './Lounge.js'
import Profile from './Profile.js'
import Space from './Space.js'
import System from './System.js'
import Utils from './Utils.js'
import Wallet from './Wallet.js'

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
    Crypto = Crypto.Context
    Economy = Economy.Context
    Lounge = Lounge.Context
    Profile = Profile.Context
    Space = Space.Context
    System = System.Context
    Utils = Utils.Context
    Wallet = Wallet.Context

    constructor() {
        Promise.all([
            hydrate('Crypto', Crypto.Store),
            hydrate('Economy', Economy.Store),
            hydrate('Lounge', Lounge.Store),
            hydrate('Profile', Profile.Store),
            hydrate('Space', Space.Store),
            hydrate('System', System.Store),
            hydrate('Utils', Utils.Store),
            hydrate('Wallet', Wallet.Store),
        ])
        .then(() => {
            console.info('Data store has loaded successfully!')
        })
    }
}

/* Export class. */
export default new Store()
