<script setup lang="ts">
useHead({
    title: `Staking — Nxy Cash`,
    meta: [
        { name: 'description', content: `Nxy Cash makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

const address = ref(null)

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

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
                <div class="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-20 lg:px-8 lg:pt-16">
                    <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Stake your <em class="text-5xl sm:text-7xl text-rose-500">$NXY</em> to receive Daily <em class="text-5xl sm:text-7xl text-yellow-400">$NEXA</em> Rewards
                            </h1>

                            <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Ava's DAO is introducing UTXO staking with premium, on-chain rewards paid out each and every day.
                            </p>

                            <!-- <h2>
                                TOP STAKED ADDRESSES
                            </h2>

                            <ol>
                                <li>100,000 $NXY</li>
                            </ol> -->
                        </div>

                        <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                            <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div class="relative">
                                    <img
                                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/573bf791-9500-4c33-a75e-4538c432326b/photo_2023-07-19_15-05-02_(2)/w=1920,quality=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3c7bebbc-d5ec-43d1-8e77-7a3badaa6783/photo_2023-07-19_15-05-03/w=1920,quality=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
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

        <section class="px-3 sm:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <h2 class="pl-10 col-span-1 lg:col-span-3 text-4xl font-medium">
                Our Stakehouses
            </h2>

            <NuxtLink to="/staking/wagmi" class="h-48 px-5 flex flex-col justify-center items-center bg-rose-500 border-2 border-rose-700 rounded-2xl shadow">
                <h2 class="text-5xl font-medium text-rose-100 text-center">
                    Wagmi
                    <span class="block text-3xl">Cattle Ranch & Brewery</span>
                </h2>

                <h3 class="text-xl font-medium text-rose-100">
                    30-day Reservations
                </h3>

                <h4 class="text-3xl font-medium text-rose-300">
                    1X Payouts
                </h4>
            </NuxtLink>

            <NuxtLink to="/staking/toshis" class="h-48 px-5 flex flex-col justify-center items-center bg-sky-500 border-2 border-sky-700 rounded-2xl shadow">
                <h2 class="text-5xl font-medium text-sky-100 text-center">
                    Toshi's
                    <span class="block text-3xl">Wagyu BBQ & Smoke</span>
                </h2>

                <h3 class="text-xl font-medium text-sky-100">
                    90-day Reservations
                </h3>

                <h4 class="text-3xl font-medium text-sky-300">
                    2X Payouts
                </h4>
            </NuxtLink>

            <NuxtLink to="/staking/palms" class="h-48 px-5 flex flex-col justify-center items-center bg-purple-500 border-2 border-purple-700 rounded-2xl shadow">
                <h3 class="text-5xl font-medium text-purple-100 text-center">
                    Palms
                    <span class="block text-3xl">d'Iamante</span>
                </h3>

                <h3 class="text-xl font-medium text-purple-100">
                    1-Year Reservations
                </h3>

                <h4 class="text-3xl font-medium text-purple-300">
                    3X Payouts
                </h4>
            </NuxtLink>
        </section>
    </main>
</template>
