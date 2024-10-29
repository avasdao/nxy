/* Import modules. */
import { create } from 'mobx-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

/* Import (local) modules. */
import Crypto from './Crypto.js'
import Economy from './Economy.js'
import Experimental from './Experimental.js'
import Lounge from './Lounge.js'
import Profile from './Profile.js'
import Society from './Society.js'
import Space from './Space.js'
import System from './System.js'
import Utils from './Utils.js'
import Wallet from './Wallet.js'
import Wealth from './Wealth.js'

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
    Experimental = Experimental.Context
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
            hydrate('Crypto', Crypto.Store),
            hydrate('Economy', Economy.Store),
            hydrate('Experimental', Experimental.Store),
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
