/* Import modules. */
import { defineStore } from 'pinia'

const runtimeConfig = useRuntimeConfig()
// console.log('RUNTIME CONFIG', runtimeConfig)
const API_ENDPOINT = 'https://telr.exchange/v1/'

/* Initialize constants. */
const POLLING_FREQUENCY = 3000 // 3 seconds

/**
 * Profile Store
 */
export const useProfileStore = defineStore('profile', {
    state: () => ({
        /* Initialize session. */
        _session: null,

        /* Initialize entropy (used for HD wallet). */
        // NOTE: This is a cryptographically-secure "random" 32-byte (256-bit) value. */
        // _entropy: null,

        /**
         * Email
         *
         * This is a valid email address.
         */
        _email: null,

        /**
         * Metadata
         *
         * Used to store (user-defined) data for:
         *     1. Individual accounts
         *     2. Individual unspent transaction outputs (UXTOs)
         *
         * NOTE: Metadata MUST be used sparingly, to avoid data storage bloat;
         *       and should be deleted when no longer needed.
         *
         * TODO: Allow this data to be stored on-chain using:
         *       1. Bitcoin Files Protocol (BFP) (https://bitcoinfiles.com/)
         *       2. Telr Locker (https://locker.telr.io)
         */
        _meta: null,

        /**
         * Nickname
         *
         * This is a public alias.
         *
         * NOTE: Only alpha-numeric characters are accepted.
         *       Both upper and lower-case characters are accepted.
         */
        _nickname: null,

        /**
         * Preferred User Experience
         */
        _ux: null,
    }),

    getters: {
        challenge(_state) {
            return _state._session?.challenge || null
        },

        session(_state) {
            return _state._session || null
        },

        sessionid(_state) {
            return _state._session?.id || null
        },

        ux(_state) {
            return _state._ux || 'NXY'
        },
    },

    actions: {
        async init() {
            console.log('PROFILE (session):', this.session)

            /* Initialize locals. */
            let target
            let session

            /* Validate authorization elements. */
            // NOTE: Reset legacy session details.
            if (this.sessionid && !this.challenge) {
                /* Delete (browser) session. */
                this.deleteSession()

                /* Re-call initialization. */
                return setTimeout(this.init, POLLING_FREQUENCY)
            }

            /* Set (request) target. */
            // target = runtimeConfig.public.API_ENDPOINT + 'session'
            target = API_ENDPOINT + 'session'
            console.log('TARGET', target)

            /* Manage session. */
            session = await $fetch(target, {
                method: 'POST',
                body: {
                    sessionid: this.sessionid,
                },
            })
            console.log('GLOBAL SESSION', session)

            /* Save session. */
            this.saveSession(session)
        },

        deleteSession() {
            /* Set session. */
            this._setSession(null)
        },

        saveSession(_session) {
            /* Set session. */
            this._setSession(_session)
        },

        /**
         * Save (Preferred) User Experience
         *
         * @param {Object} _ux User experience.
         */
        saveUserExperience (_ux) {
            /* Set user experience. */
            this._ux = _ux
            console.log('SET UX', this._ux)
        },

        /**
         * Set Session
         *
         * @param {Object} _session Save session details.
         */
        _setSession (_session) {
            /* Set session. */
            this._session = _session
            console.log('SET SESSION', this._session)
        },
    },
})
