import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'

import logo from '@/images/logo.png'

export default function Login() {
    // TODO

    return (
        <>
            <Head>
                <title>Nxy L1 MetaNet</title>
            </Head>

            <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
                <Image
                    className="mx-auto h-10 w-auto sm:h-12"
                    src={logo}
                    alt="Nxy Social logo"
                    width="64px"
                    height="64px"
                />

                <section className="mx-auto w-auto flex flex-col gap-6">
                    <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            <span className="text-rose-500 text-7xl italic font-normal">Nxy L1 MetaNet</span>

                        </h1>

                        <h3 className="text-3xl font-bold">
                            on Avalanche 9000
                        </h3>
                    </div>

                    <p className="max-w-2xl">
                        Building best-in-class Crypto Experience (CX) for your iOS & Android devices 📱
                        Come join in supporting our Avalanche/Retro9000 L1 ❤️
                        ✨ NXY.social/L1 ✨
                    </p>

                    <h3 className="text-3xl font-bold italic tracking-widest">
                        Coming soon...
                    </h3>

                </section>
            </div>
        </>
    )
}
