import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'

import logo from '@/images/logo.png'

export default function WhyNxy() {
    // TODO

    return (
        <>
            <Head>
                <title>Why Nxy?</title>
            </Head>

            <div className="bg-white">
                <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
                    <Image
                        className="mx-auto h-10 w-auto sm:h-12"
                        src={logo}
                        alt="Nxy Social logo"
                        width="64px"
                        height="64px"
                    />

                    <section className="flex flex-col gap-6">
                        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
                            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Welcome to <span className="text-rose-500 text-7xl italic font-normal">Why Nxy?</span> Template
                            </h1>
                        </div>

                        <p>
                            Nxy helps brings dreams to life by enabling Creators with the best-in-class tools to drive their passions.
                        </p>
                    </section>

                </main>

            </div>
        </>
    )
}
