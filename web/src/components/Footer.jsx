import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

// import Image from 'next/future/image'
import Image from 'next/image'
import logo from '@/images/logo.png'

function QrCodeBorder(props) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path
                d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    )
}

export function Footer() {
    return (
        <footer className="border-t border-gray-200">
            <Container>
                <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
                    <div>
                        <div className="flex items-start text-gray-900">
                            <Image
                                src={logo}
                                className="h-10 w-10 flex-none fill-cyan-500"
                                alt="Nxy logo"
                                width="64px"
                                height="64px"
                            />

                            <div className="ml-4">
                                <p className="text-2xl font-semibold">
                                    NXY
                                </p>

                                <p className="mt-1 text-sm w-full lg:w-2/3 italic">
                                    Providing safe & secure Spaces for Creators to Dream, Build & Profit from their own *exclusive* token economies.
                                </p>
                            </div>
                        </div>

                        <nav className="mt-11 flex gap-8">
                            <NavLinks />
                        </nav>
                    </div>

                    <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                        <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                            <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
                            <Image src={qrCode} alt="" unoptimized />
                        </div>

                        <div className="ml-8 lg:w-64">
                            <p className="text-base font-semibold text-gray-900">
                                <Link href="/download">
                                    <span className="absolute inset-0 sm:rounded-2xl" />
                                    Download the app
                                </Link>
                            </p>

                            <p className="mt-1 text-sm text-gray-700">
                                Scan the QR code to download the app from the App Store.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
                    <form className="flex w-full justify-center md:w-auto">
                        <TextField
                            type="email"
                            aria-label="Email address"
                            placeholder="Email address"
                            autoComplete="email"
                            required
                            className="w-60 min-w-0 shrink"
                        />

                        <Button type="submit" color="cyan" className="ml-4 flex-none">
                            <span className="hidden lg:inline">Join our newsletter</span>
                            <span className="lg:hidden">Join newsletter</span>
                        </Button>
                    </form>

                    <div className="flex flex-row gap-4 items-end">
                        <p className="mt-6 text-sm text-gray-500 md:mt-0">
                            &copy; Copyright {new Date().getFullYear()}. Ava&apos;s DAO. All rights reserved.
                        </p>

                        <Link href="https://twitter.com/AvasDAO" target="_blank">
                            <svg className="h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                            </svg>
                        </Link>

                        <Link href="https://github.com/avasdao/nxy" target="_blank">
                            <svg className="h-6 text-blue-500"  fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </Container>
        </footer>
  )
}
