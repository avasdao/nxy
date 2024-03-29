import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Bundles } from '@/components/Bundles'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
    return (
        <>
            <Head>
                <title>Nxy — Dream It. Build It. Profit!</title>
                <meta
                    name="description"
                    content="Providing safe & secure Spaces for Creators to Dream, Build & Profit from their own *exclusive* token economies."
                />
            </Head>

            <Header />

            <main>
                <Hero />
                <PrimaryFeatures />
                <SecondaryFeatures />
                <CallToAction />
                <Reviews />
                <Bundles />
                <Faqs />
            </main>

            <Footer />
        </>
    )
}
