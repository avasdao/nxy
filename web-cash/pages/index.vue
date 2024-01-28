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
    richList.value = await $fetch('/api/getRichList')
        .catch(err => console.error(err))
    console.log('RICH LIST', richList.value)
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

                            <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                a hybrid utility token delivering <em class="text-3xl sm:text-5xl text-lime-500">Daily</em> $NEXA <em class="text-3xl sm:text-5xl text-lime-500">Payouts</em> to HODLers
                            </h2>

                            <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Enjoy an opportunity to share in the growth and success of <span class="font-extrabold">Nexa's Premier Decentralized Autonomous Organization (DAO),</span> working tirelessly to deliver critical infrastrucutrue to a nascent Nexican community.

                                <ul class="list-disc pl-10 pt-2 leading-8 text-lg text-gray-600">
                                    <li>Vote on governance proposals</li>
                                    <li>HODL your $NXY for payouts</li>
                                    <li>Receive future $TOKEN airdrops</li>
                                </ul>
                            </p>
                        </div>
                        <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-20 lg:pl-0">
                            <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1605713288610-00c1c630ca1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1597155135675-d4cef690184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=589&q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1624789389787-91e252ff8dac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1261&q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
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

        <!-- Content section -->
        <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Mission Statement
                </h2>

                <p>{{ $t('welcome') }}</p>

                <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                    <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
                        <p class="text-xl leading-8 text-gray-600">
                            Ava's DAO is a non-profit organization on a mission to build and manage a comprehensive suite of products & services with the prime directive of assuring financial freedom for every man, woman and child.
                        </p>

                        <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
                            <p>
                                Every $NXY holder is permitted to Vote (on-chain) for public proposals. 'Qualified' $NXY holders receive Daily Payouts (to their respective Nexa or Meta address) from revenues deposited into Ava's Treasury.
                            </p>

                            <!-- <p class="mt-10">
                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                            </p> -->
                        </div>
                    </div>

                    <div class="lg:flex lg:flex-auto lg:justify-center">
                        <dl class="w-64 space-y-8 xl:w-80">
                            <div class="flex flex-col-reverse gap-y-4">
                                <dt class="text-base leading-7 text-gray-600">
                                    Total Value Locked (TVL)
                                    <span class="block">
                                        in
                                        <NuxtLink to="https://nexa.sh/contracts" target="_blank" class="text-blue-500 font-extrabold hover:underline">
                                            non-custodial HODL Vaults
                                        </NuxtLink>
                                    </span>
                                </dt>

                                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                                    13.37 million
                                </dd>
                            </div>

                            <div class="flex flex-col-reverse gap-y-4">
                                <dt class="text-base leading-7 text-gray-600">
                                    Total Payouts to HODLers
                                    <NuxtLink to="/payouts" class="block text-blue-500 font-extrabold hover:underline">
                                        delivered on-chain
                                    </NuxtLink>
                                </dt>

                                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                                    1.23 million
                                </dd>
                            </div>

                            <div class="flex flex-col-reverse gap-y-4">
                                <dt class="text-base leading-7 text-gray-600">
                                    New wallets per day since
                                    <NuxtLink to="https://nexa.sh/tx/a61b7879fa31487f767eec5c895be3c68a6402f42ba96ad2d982d88453df7b39" target="_blank" class="block text-blue-500 font-extrabold hover:underline">
                                        Token Genesis <small>{{ timeSinceGenesisDisplay }}</small>
                                    </NuxtLink>
                                </dt>

                                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                                    {{walletsCreated}}
                                </dd>
                            </div>
                        </dl>
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
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Nexican Bootstrap
                </h2>

                <p class="mt-6 text-lg leading-8 text-gray-600">
                    During our early years, it's critical to lay a <em class="text-2xl text-indigo-500 font-medium">SOLID</em> foundation for which we can then build upon for decades to come.
                    Ava's DAO is committed to building, deploying and supporting <em class="text-2xl text-indigo-500 font-medium">critical infrastructure &amp; services</em> to ensure that <em class="text-2xl text-indigo-500 font-medium">ALL</em> Nexicans will be entitled to <em class="text-2xl text-indigo-500 font-medium">ALWAYS</em> have nice things too.
                </p>
            </div>

            <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div>
                    <dt class="text-2xl font-semibold text-gray-900">
                        Causes Cash
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        Causes Cash introduces a <span class="text-indigo-500 font-bold">full-service P2P crowdfunding platform</span> to the Nexa community; built & managed by a team with years of experience servicing the Bitcoin Cash (BCH) community.
                    </dd>

                    <NuxtLink to="https://causes.cash/c/475b4cfc-ae95-419d-9681-cf378c083963" target="_blank" class="w-fit flex mt-3 px-5 py-2 text-sky-900 font-bold bg-sky-100 border-2 border-sky-400 rounded-xl shadow hover:bg-sky-200">
                        Visit Campaign
                    </NuxtLink>
                </div>

                <div>
                    <dt class="text-2xl font-semibold text-gray-900">
                        Ledger Developer SDK
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        Introducing a plug-n-play, software toolkit for JS Developers to quickly &amp; easily secure their dApps with the #1 market leader in <span class="text-indigo-500 font-bold">Crypto hardware wallet security</span>.
                    </dd>

                    <NuxtLink to="https://causes.cash/c/b8fac25d-e619-4ddf-b474-af084e8250ce" target="_blank" class="w-fit flex mt-3 px-5 py-2 text-sky-900 font-bold bg-sky-100 border-2 border-sky-400 rounded-xl shadow hover:bg-sky-200">
                        Visit Campaign
                    </NuxtLink>
                </div>

                <div>
                    <dt class="text-2xl font-semibold text-gray-900">
                        Decentralized Coin Mixer
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        Introducing <span class="text-indigo-500 font-bold">Fungibility for your Nexa transactions</span> by merging the MOST advanced Crypto privacy protocols & specifications <em>(i.e. CoinJoin, CashShuffle and CashFusion)</em> into a total solution.
                    </dd>

                    <NuxtLink to="https://causes.cash/c/707e2a8c-4eea-4c26-9ea2-c548e9e91726" target="_blank" class="w-fit flex mt-3 px-5 py-2 text-sky-900 font-bold bg-sky-100 border-2 border-sky-400 rounded-xl shadow hover:bg-sky-200">
                        Visit Campaign
                    </NuxtLink>
                </div>

                <div>
                    <dt class="text-2xl font-semibold text-gray-900">
                        MetaNet: EVM-compatible Sidechain
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        A comprehensive plan to build, test and deploy a <span class="text-indigo-500 font-bold">SmartBCH-style sidechain for Nexa</span>, powered by an Avalanche Subnet.
                    </dd>

                    <NuxtLink to="https://causes.cash/c/f900d1b8-1ae0-4e18-8a2f-212631b62562" target="_blank" class="w-fit flex mt-3 px-5 py-2 text-sky-900 font-bold bg-sky-100 border-2 border-sky-400 rounded-xl shadow hover:bg-sky-200">
                        Visit Campaign
                    </NuxtLink>
                </div>

                <div>
                    <dt class="text-2xl font-semibold text-gray-900">
                        Seasonal Hackathon Festivals
                    </dt>

                    <dd class="mt-1 text-gray-600">
                        Spring, Summer, Fall and Winter <span class="text-indigo-500 font-bold">global community events</span> to showcase &amp; financially support the projects and teams actively <span class="text-indigo-500 font-bold">#BUIDLingOnNexa.</span>
                    </dd>

                    <NuxtLink to="/" class="w-fit flex mt-3 px-5 py-2 text-sky-900 font-bold bg-sky-100 border-2 border-sky-400 rounded-xl shadow opacity-50 cursor-not-allowed">
                        Launching soon...
                    </NuxtLink>
                </div>
            </dl>
        </div>

        <!-- Logo cloud -->
        <div class="hidden relative isolate -z-10 mt-32 sm:mt-48">
            <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
                    <defs>
                        <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
                        <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
                </svg>
            </div>

            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
                    Supporting some of Nexa's most innovative projects &amp; teams.
                </h2>

                <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                    <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                    <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                    <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
                </div>
            </div>
        </div>

    </main>
</template>
