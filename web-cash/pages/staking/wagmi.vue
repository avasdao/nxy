<script setup lang="ts">
useHead({
    title: `Wagmi Cattle Ranch & Brewery — Nxy Cash`,
    meta: [
        { name: 'description', content: `Nxy Cash makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { useWalletStore } from '@/stores/wallet'
import { useSystemStore } from '@/stores/system'
const Wallet = useWalletStore()
const System = useSystemStore()

const abbr = computed(() => {
    if (!Wallet.stakehouse) {
        return 'n/a'
    }

    return Wallet.stakehouse.slice(0, 16) + ' ... ' + Wallet.stakehouse.slice(-16)
})

const init = () => {
    console.log('WALLET', Wallet)
    console.log('WALLET (privateKey)', Wallet.wallet.privateKey)
    console.log('WALLET (address)', Wallet.address)

    console.log('STAKEHOUSE ADDRESS', Wallet.stakehouse)
}

onMounted(() => {
    // setTimeout(init, 2000)
    // init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <div class="max-w-5xl mx-auto px-3 py-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="col-span-2">
            <div class="flex flex-col gap-2">
                <h1 class="text-8xl font-thin text-amber-800 tracking-widest">
                    Wagmi
                </h1>

                <h1 class="text-3xl font-bold text-amber-600 tracking-tight italic opacity-70">
                    Cattle Ranch & Brewery
                </h1>
            </div>

            <section class="mt-5 px-3 py-3 border border-amber-300 bg-amber-50 rounded-2xl">
                <h3 class="text-xs text-amber-500 font-medium uppercase">
                    My Stakehouse Address
                </h3>

                <p class="text-center truncate">
                    <NuxtLink :to="'https://explorer.nexa.org/address/' + Wallet.stakehouse" target="_blank" class="-mt-2 text-3xl font-medium text-amber-700 hover:text-amber-600">
                        {{abbr}}
                    </NuxtLink>
                </p>

                <p class="text-xs font-normal text-center">
                    <em>This address will automatically <span class="font-medium">lock ALL assets</span> for <span class="text-base font-medium">30</span> days.</em>
                    <span class="block font-medium text-red-600">!! <u>DO NOT</u> SEND $NEXA TO THIS ADDRESS !!</span>
                </p>
            </section>
        </div>

        <div>
            <h3 class="text-gray-700 text-base font-medium text-center tracking-widest uppercase opacity-50">
                Venue Features &amp; Highlights
            </h3>

            <div class="mt-3 grid grid-cols-5 gap-x-4 gap-y-2 text-sm">
                <h3 class="col-span-3 text-right">
                    Avg Daily Payouts
                </h3>

                <h3 class="col-span-2 font-medium">
                    n/a
                </h3>

                <h3 class="col-span-3 text-right">
                    Avg Stake Amount
                </h3>

                <h3 class="col-span-2 font-medium">
                    n/a
                </h3>
            </div>

            <!-- SKELETON -->
            <div role="status" class="max-w-sm p-4 animate-pulse md:p-6 dark:border-gray-700">
                <div class="h-2.5 bg-gray-400 rounded-full w-48 mb-4"></div>
                <div class="h-2 bg-gray-400 rounded-full mb-2.5"></div>
                <div class="h-2 bg-gray-400 rounded-full mb-2.5"></div>
                <div class="h-2 bg-gray-400 rounded-full"></div>
                <div class="flex items-center mt-4 space-x-3">
                <svg class="w-10 h-10 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div>
                        <div class="h-2.5 bg-gray-400 rounded-full w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>


    <section class="max-w-5xl mx-auto my-10 py-5 border-t border-gray-300">
        <ReservationSchedule />
    </section>

    <ReservationPrixFixe />

</template>
