// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: `Nxy Cash`,
            meta: [
                { name: 'description', content: `Providing safe & secure Spaces for Creators to Build, Grow & Profit from their own *exclusive* token economies.` },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                { src: '/js/matomo.js' },
            ],
        },
    },

    /* Progressive Web Application Settings */
    pwa: {
        manifest: {
            name: 'Nxy Cash',
            short_name: 'Nxy',
            description: `Providing safe & secure Spaces for Creators to Build, Grow & Profit from their own *exclusive* token economies.`,
            lang: 'en',
            theme_color: '#6a5acd',
            background_color: '#6a5acd',
            // useWebmanifestExtension: false,
        },
        meta: {
            name: 'Nxy Cash',
            description: `Providing safe & secure Spaces for Creators to Build, Grow & Profit from their own *exclusive* token economies.`,
            author: `Ava's DAO`,
        },
        // icon: false, // disables the icon module
        workbox: {
            // workboxURL: 'TBD',
            // enabled: true, // FOR DEV PURPOSES ONLY
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

        /* Progressive Web Application */
        '@kevinmarrec/nuxt-pwa',
    ],

    /* Route Rules */
    routeRules: {
        /* Add CORS headers to root. */
        // NOTE: We need this to make nxy.json available to web apps.
        '/**': { cors: true },
    },
})
