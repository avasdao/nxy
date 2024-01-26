// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: `Ava's Cash`,
            meta: [
                { name: 'description', content: `The "official" governance token for Ava's DAO. Offering the Best Crypto Experience (CX) For Your Money®, plus daily $NEXA payouts to "qualified" HODLers.` },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                { src: '/js/matomo.js' },
            ],
        },
    },

    /* Application Modules */
    modules: [
        /* Tailwind CSS */
        '@nuxtjs/tailwindcss',

        /* Pinia */
        '@pinia/nuxt',

        /* Internationalization for Nuxt */
        '@nuxtjs/i18n',
    ],

    /* Route Rules */
    routeRules: {
        /* Add CORS headers to root. */
        // NOTE: We need this to make avas.json available to web apps.
        '/**': { cors: true },
    },
})
