/* Import modules. */
import { defineStore } from 'pinia'

/**
 * Profile Store
 */
export const useProfileStore = defineStore('profile', {
    state: () => ({
            _apiKeys: {},
    }),

    getters: {
        apiKey(_state) {
            return (_exchangeid) => _state._apiKeys[_exchangeid]
        },
    },

    actions: {
        /**
         * Set API Key
         *
         * @param {Object} _key Information for the Exchange's API key.
         */
        setApiKey (_key: Object) {
            /* Set session. */
            this._apiKeys[_key.exchangeid] = _key
            console.log('SET API KEY', this._apiKeys)
        },
    },
})
