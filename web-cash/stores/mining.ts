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
        /**
         * Initialize Application
         *
         * Performs startup activities.
         */
        init() {
            this._appStarts++

            /* Validate tickers. */
            if (!this._tickers) {
                /* Initialize tickers. */
                this._tickers = {}
            }

            /* Initialize ticker interval. */
            setInterval(this.updateTicker, UPDATE_TICKER_INTERVAL)

            /* Update ticker. */
            this.updateTicker()

            if (this._locale === null) {
                /* Set (library) locale from (store) locale. */
                this._locale = navigator.language || navigator.userLanguage
                console.log(`User's preferred language is:`, this.locale)
            }

            /* Initialize (library) locale. */
            const { locale } = useI18n()

            /* Set (library) locale. */
            locale.value = this.locale
        },

        submit(_wallet, _miner, _candidate) {
            /* Validate entropy. */
            // NOTE: Expect HEX value to be 32 or 64 characters.
            // if (_entropy.length !== 32 && _entropy.length !== 64) {
            //     console.error(_entropy, 'is NOT valid entropy.')

            //     _entropy = null
            // }

            _submitCandidate.bind(this)(_wallet, _miner, _candidate)

            /* Initialize wallet. */
            // this.init()
        },

        async getSender(_tx) {
            const inputs = _tx?.vin
            // console.log('INPUTS', inputs)

            /* Set sender. */
            const sender = {
                address,
                inputs,
            }

            /* Return sender. */
            return sender
        },

    },
})
