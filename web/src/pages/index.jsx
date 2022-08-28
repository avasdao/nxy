import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
    return (
        <>
            <Head>
                <title>Nexaverse: Uncensorable Metaverse for Radical Builders</title>
                <meta
                    name="description"
                    content="Providing an identity-safe, transparent and uncensorable Metaverse built to empower our world's most Radical Builders to realize their wildest dreams."
                />
            </Head>

            <Header />

            <main>
                <Hero />
                <PrimaryFeatures />
                <SecondaryFeatures />
                <CallToAction />
                <Reviews />
                <Pricing />
                <Faqs />
            </main>

            <Footer />
        </>
    )
}
