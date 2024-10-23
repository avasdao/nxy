import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'

import logo from '@/images/logo.png'

export default function HowToNxy() {
    // TODO

    return (
        <>
            <Head>
                <title>How-To Nxy?</title>
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
                                Welcome to <span className="text-rose-500 text-7xl italic font-normal">How-To Nxy?</span> Template
                            </h1>
                        </div>

                        <p className="text-lg">
                            Getting started couldn&apos;t possibly be ANY easier.

                        </p>

                        <h3 className="text-2xl font-bold tracking-widest">
                            Dream It. Build It. Profit!
                        </h3>

                        <ol className="pl-10 list-disc text-xl leading-9">
                            <li>Start Mining $NXY</li>
                            <li>Build a Space in the Oasis</li>
                            <li>Start Your OWN Economy</li>
                        </ol>
                    </section>

                </main>

            </div>
        </>
    )
}
