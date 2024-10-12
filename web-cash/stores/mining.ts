/* Import modules. */
import { defineStore } from 'pinia'

/* Submit candidate. */
import _submitCandidate from './mining/submit.ts'

/**
 * Mining Store
 */
export const useMiningStore = defineStore('mining', {
    state: () => ({
        // TBD
    }),

    getters: {
        // TBD
    },

    actions: {
        submit(_wallet, _miner, _candidate, _provider) {
            return _submitCandidate.bind(this)(_wallet, _miner, _candidate, _provider)
        },

    },
})
