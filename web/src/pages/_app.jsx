import { useEffect } from 'react'
import '@/styles/tailwind.css'
import 'focus-visible'
import { init as matomo } from '@socialgouv/matomo-next'

/* Initialize Matomo parameters. */
const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || '//matomo.avasdao.org'
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || 2

export default function App({ Component, pageProps }) {
    /* Handle (Matomo) analytics. */
    useEffect(() => {
        matomo({ url: MATOMO_URL, siteId: MATOMO_SITE_ID })
    }, [])

    return <Component {...pageProps} />
}
