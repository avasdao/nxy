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
    const links = [
        {
            name: 'For iPhones and iPads',
            href: 'https://github.com/avasdao/nxy/releases',
            description: 'Compatible with iOS v8.1+',
            icon: RssIcon,
        },
        {
            name: 'For Android devices',
            href: 'https://github.com/avasdao/nxy/releases',
            description: 'Compatible with Android v9+',
            icon: RssIcon,
        },
        {
          name: 'For Windows Users',
          href: 'https://github.com/avasdao/nxy/releases',
          description: 'Compatible with Windows 9+',
          icon: BookmarkSquareIcon,
        },
        {
            name: 'For Mac OSX Users',
            href: 'https://github.com/avasdao/nxy/releases',
            description: 'Compatible with OSX 14+',
            icon: QueueListIcon,
        },
        {
            name: 'For Linux Users',
            href: 'https://github.com/avasdao/nxy/releases',
            description: 'Compatible with Ubuntu 20.04+',
            icon: BookOpenIcon,
        },
    ]

    return (
        <>
            <Head>
                <title>Download - Nxy</title>
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

                    <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Download the <span className="text-rose-500 text-7xl italic font-normal">Nxy</span> app
                        </h1>

                        <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-6 sm:leading-8">
                            Choose an edition for your device
                        </p>
                    </div>

                    <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
                        <h2 className="sr-only">Popular pages</h2>
                        <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
                            {links.map((link, linkIdx) => (
                                <li key={linkIdx} className="relative flex gap-x-6 py-6">
                                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                                        <link.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div className="flex-auto">
                                        <h3 className="text-sm font-semibold leading-6 text-gray-900">
                                            <Link href={link.href}>
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                {link.name}
                                            </Link>
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600">{link.description}</p>
                                    </div>
                                    <div className="flex-none self-center">
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 flex justify-center">
                            <Link href="/" className="text-2xl font-semibold leading-6 text-blue-500 flex gap-2">
                                <span aria-hidden="true">&larr;</span>
                                Back to home
                            </Link>
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}
