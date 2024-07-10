<script setup lang="ts">
/* Import modules. */
import moment from 'moment'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

const GENESIS_TIMESTAMP = 1682532180

const richList = ref(null)

const timeSinceGenesis = computed(() => {
    let duration = GENESIS_TIMESTAMP - moment().unix()
    console.log('duration', duration)
    return duration
})

const timeSinceGenesisDisplay = computed(() => {
    if (!timeSinceGenesis.value) {
        return 'loading...'
    }

    return moment
        .duration(timeSinceGenesis.value, 'seconds')
        .humanize(true)
})

const walletsCreated = computed(() => {
    if (!richList.value) {
        return 'n/a'
    }

    const numDays = Math.abs(((timeSinceGenesis.value / 60.0) / 60.0) / 24.0)

    const numWallets = richList.value.length

    return (numWallets / numDays).toFixed(2)
})

const init = async () => {
    // TODO
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="isolate">
        <!-- Hero section -->
        <div class="relative isolate -z-10">
            <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                    <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
                <div
                    class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style="
                        clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%);
                    "
                ></div>
            </div>
            <div class="overflow-hidden">
                <div class="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-16 lg:px-8 lg:pt-0">
                    <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                            <h1 class="text-6xl font-bold tracking-tight text-rose-400 sm:text-8xl">
                                Nxy Cash
                            </h1>

                            <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                powering a decentralized <em class="text-3xl sm:text-5xl text-lime-500">#SoFi</em> network exclusively for <em class="text-3xl sm:text-5xl text-lime-500">Creators</em> to Dream, Build & <em class="text-3xl sm:text-5xl text-lime-500">Profit!</em>
                            </p>

                            <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Nxy Cash is the "official" currency of the Nxy social network.
                                Spend your Nxy <span class="font-extrabold">throughout the Oasis</span> or create and earn from your own Economies.

                                <ul class="list-disc pl-10 pt-2 leading-8 text-lg text-gray-600">
                                    <li>Forge new Spaces</li>
                                    <li>Create new Economies</li>
                                    <li>Build new Societies</li>
                                </ul>
                            </p>
                        </div>
                        <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-20 lg:pl-0">
                            <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1533835673073-b2575dde4265?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1602492665157-639323eadd31?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1636971828014-0f3493cba88a?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1581368121163-0d9c85127cdd?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white -mt-20 pb-24">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We approach Social Finance as something that adds to our lives and adds value to our world.
                    </h2>

                    <p>{{ $t('welcome') }}</p>

                    <p class="mt-6 text-base leading-7 text-gray-600">
                        Take a look at the many ways in which Nxy offers "real-world" value to countless people all across the world.
                    </p>
                </div>

                <div class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">

                    <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p class="flex-none text-3xl font-bold tracking-tight text-gray-900">
                            1,250
                        </p>

                        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p class="text-lg font-semibold tracking-tight text-gray-900">
                                Wallets on the network
                            </p>

                            <p class="mt-2 text-base leading-7 text-gray-600">
                                It's 100% FREE to create a new wallet and start earning...
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p class="flex-none text-3xl font-bold tracking-tight text-white">
                            $1 million
                        </p>

                        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p class="text-lg font-semibold tracking-tight text-white">
                                We're proud that our Economies have processed over $1 million in revenues
                            </p>

                            <p class="mt-2 text-base leading-7 text-gray-400">
                                Nxy Economies provide the foundation on which Spaces and their Creators thrive
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p class="flex-none text-3xl font-bold tracking-tight text-white">
                            401,093
                        </p>

                        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p class="text-lg font-semibold tracking-tight text-white">
                                Transactions since launch
                            </p>

                            <p class="mt-2 text-base leading-7 text-indigo-200">
                                Join the FASTEST growing L1+ network in the world and experience what everyone has been talking about!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <section class="mx-auto mt-24 max-w-7xl sm:mt-32 sm:px-6 lg:px-8">
            <div class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                <img
                    class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
                    src="~/assets/avas-testimonial.jpg"
                    alt=""
                />

                <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>

                <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
                    <div
                        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                        style="
                            clip-path: polygon(
                                74.1% 44.1%,
                                100% 61.6%,
                                97.5% 26.9%,
                                85.5% 0.1%,
                                80.7% 2%,
                                72.5% 32.5%,
                                60.2% 62.4%,
                                52.4% 68.1%,
                                47.5% 58.3%,
                                45.2% 34.5%,
                                27.5% 76.7%,
                                0.1% 64.9%,
                                17.9% 100%,
                                27.6% 76.8%,
                                76.1% 97.7%,
                                74.1% 44.1%
                            );
                        "
                    ></div>
                </div>

                <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
                    <div
                        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                        style="
                            clip-path: polygon(
                                74.1% 44.1%,
                                100% 61.6%,
                                97.5% 26.9%,
                                85.5% 0.1%,
                                80.7% 2%,
                                72.5% 32.5%,
                                60.2% 62.4%,
                                52.4% 68.1%,
                                47.5% 58.3%,
                                45.2% 34.5%,
                                27.5% 76.7%,
                                0.1% 64.9%,
                                17.9% 100%,
                                27.6% 76.8%,
                                76.1% 97.7%,
                                74.1% 44.1%
                            );
                        "
                    ></div>
                </div>

                <div class="relative mx-auto max-w-2xl lg:mx-0">
                    <svg class="w-12 h-auto text-purple-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                    </svg>

                    <figure>
                        <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                            <p>
                                “We possess the technology, the experience and the commitment to guarantee financial freedom for every man, woman and child.
                                If you don't believe me or don't get it, I don't have the time to try to convince you, sorry.”
                            </p>
                        </blockquote>

                        <figcaption class="mt-6 text-base text-white">
                            <div class="font-semibold">
                                Ava Nakamoto
                            </div>

                            <div class="mt-1">
                                Ava's DAO
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <!-- Values section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Seasonal PoW Mining
                </h2>

                <p class="mt-6 text-lg leading-8 text-gray-600">
                    During our first few months, it's critical to lay a <em class="pr-1 text-2xl text-indigo-500 font-medium">SOLID</em> foundation for which we can then build upon for decades to come.
                    Nxy is committed to building, deploying and supporting <em class="pr-1 text-2xl text-indigo-500 font-medium">critical infrastructure &amp; services</em> to ensure that <em class="pr-1 text-2xl text-indigo-500 font-medium">ALL</em> Nexicans will be entitled to <em class="pr-1 text-2xl text-indigo-500 font-medium">ALWAYS</em> have nice things too.
                </p>
            </div>

            <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div>
                    <dt class="text-3xl font-semibold text-gray-900">
                        Season One
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        We begin our journey by introducing <span class="text-indigo-500 font-bold">CPU &amp; Mobile PoW mining</span> for Nexa's premier Layer 1+ asset.
                    </dd>

                    <section class="">
                        <h3 class="mt-2 text-xs text-rose-400 font-medium tracking-wider uppercase">
                            Treasury (Tributes) Allocation
                        </h3>

                        <ul class="pl-10 list-disc text-sm text-gray-600">
                            <li>Nxy web, mobile &amp; desktop clients</li>
                            <li>Social media airdrops</li>
                            <li>DEX liquidity</li>
                        </ul>
                    </section>

                    <h3 class="text-2xl font-medium text-rose-600 italic tracking-widest">
                        Season starts Feb '24
                    </h3>
                </div>

                <div>
                    <dt class="text-3xl font-semibold text-gray-900">
                        Season Two
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        <span class="text-indigo-500 font-bold">Bring on the Builders!</span>
                        100% of Nxy tributes will be allocated towards building out the Nexa ecosystem.
                    </dd>

                    <section class="">
                        <h3 class="mt-2 text-xs text-rose-400 font-medium tracking-wider uppercase">
                            Treasury (Tributes) Allocation
                        </h3>

                        <ul class="pl-10 list-disc text-sm text-gray-600">
                            <li>Nxy web, mobile &amp; desktop clients</li>
                            <li>Social media airdrops</li>
                            <li>Builder bounties</li>
                        </ul>
                    </section>

                    <h3 class="text-2xl font-medium text-rose-600 italic tracking-widest">
                        Season starts May '24
                    </h3>
                </div>

                <div>
                    <dt class="text-3xl font-semibold text-gray-900">
                        Season Three
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        We will be looking to support as many <span class="text-indigo-500 font-bold">"sustainable" projects &amp; teams</span> as the Treasury can afford.
                    </dd>

                    <section class="">
                        <h3 class="mt-2 text-xs text-rose-400 font-medium tracking-wider uppercase">
                            Treasury (Tributes) Allocation
                        </h3>

                        <ul class="pl-10 list-disc text-sm text-gray-600">
                            <li>Nxy web, mobile &amp; desktop clients</li>
                            <li>Social media airdrops</li>
                            <li>Builder bounties</li>
                            <li>Builder grants</li>
                        </ul>
                    </section>

                    <h3 class="text-2xl font-medium text-rose-600 italic tracking-widest">
                        Season starts Aug '24
                    </h3>
                </div>

                <div>
                    <dt class="text-3xl font-semibold text-gray-900">
                        Season Four
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        We aim our sights at the <span class="text-indigo-500 font-bold">mainstream influencers</span> by providing a complete suite of tools and services to meet 100% of their needs.
                    </dd>

                    <section class="">
                        <h3 class="mt-2 text-xs text-rose-400 font-medium tracking-wider uppercase">
                            Treasury (Tributes) Allocation
                        </h3>

                        <ul class="pl-10 list-disc text-sm text-gray-600">
                            <li>Nxy web, mobile &amp; desktop clients</li>
                            <li>Social media airdrops</li>
                            <li>Builder grants</li>
                            <li>Builder sponsorships</li>
                            <li>Creator grants</li>
                        </ul>
                    </section>

                    <h3 class="text-2xl font-medium text-rose-600 italic tracking-widest">
                        Season starts Nov '24
                    </h3>
                </div>

                <div>
                    <dt class="text-3xl font-semibold text-gray-900">
                        Season Five
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        Showcase and financially support ALL the projects and teams actively <span class="text-indigo-500 font-bold">BuildingOnNexa.</span>
                    </dd>

                    <section class="">
                        <h3 class="mt-2 text-xs text-rose-400 font-medium tracking-wider uppercase">
                            Treasury (Tributes) Allocation
                        </h3>

                        <ul class="pl-10 list-disc text-sm text-gray-600">
                            <li>Nxy web, mobile &amp; desktop clients</li>
                            <li>Social media airdrops</li>
                            <li>Builder grants</li>
                            <li>Builder sponsorships</li>
                            <li>Creator grants</li>
                            <li>Creator sponsorships</li>
                        </ul>
                    </section>

                    <h3 class="text-2xl font-medium text-rose-600 italic tracking-widest">
                        Season starts Feb '25
                    </h3>
                </div>

            </dl>
        </div>

    </main>
</template>
