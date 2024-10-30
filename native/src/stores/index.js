/* Import modules. */
import { create } from 'mobx-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

/* Import (local) modules. */
import Area51 from './Area51.js'
import Crypto from './Crypto.js'
import Economy from './Economy.js'
import Keychain from './Keychain.js'
import Lounge from './Lounge.js'
import Profile from './Profile.js'
import Society from './Society.js'
import Space from './Space.js'
import System from './System.js'
import Utils from './Utils.js'
import Wealth from './Wealth.js'

/* Import (core) modules. */
import Wallet from './core/Wallet.js'

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
    Area51 = Area51.Context
    Crypto = Crypto.Context
    Economy = Economy.Context
    Keychain = Keychain.Context
    Lounge = Lounge.Context
    Profile = Profile.Context
    Society = Society.Context
    Space = Space.Context
    System = System.Context
    Utils = Utils.Context
    Wallet = Wallet.Context
    Wealth = Wealth.Context

    constructor() {
        Promise.all([
            hydrate('Area51', Area51.Store),
            hydrate('Crypto', Crypto.Store),
            hydrate('Economy', Economy.Store),
            hydrate('Keychain', Keychain.Store),
            hydrate('Lounge', Lounge.Store),
            hydrate('Profile', Profile.Store),
            hydrate('Society', Society.Store),
            hydrate('Space', Space.Store),
            hydrate('System', System.Store),
            hydrate('Utils', Utils.Store),
            hydrate('Wallet', Wallet.Store),
            hydrate('Wealth', Wealth.Store),
        ])
        .then(() => {
            console.info('All data stores have loaded successfully!')
        })
    }
}

/* Export class. */
export default new Store()
