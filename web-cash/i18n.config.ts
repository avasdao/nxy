/* Import language files. */
// TODO Lazy import using budler
//      https://vue-i18n.intlify.dev/guide/advanced/lazy.html#lazy-loading
import en from './locales/en.json'
import tr from './locales/tr.json'
import zh from './locales/zh.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    defaultLocale: 'en',
    messages: {
        en,
        tr,
        zh,
    },
}))
