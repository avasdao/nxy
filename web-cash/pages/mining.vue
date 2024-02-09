<script setup lang="ts">
/* Import modules. */
import numeral from 'numeral'

import {
    getAddressHistory,
    getTransaction,
} from '@nexajs/rostrum'

useHead({
    title: 'Mining',
    meta: [
        { name: 'description', content: 'Web mining.' }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const System = useSystemStore()
const Wallet = useWalletStore()

const copyToClipboard = (_text) => {
    /* Copy address to clipboard. */
    Clipboard.copy(_text)

    alert(`${_text} has been copied to the clipboard.`)
}


const init = async () => {
    let response

    const enclave = await $fetch('https://enclave.nxy.cash/v1/mining')
        .catch(err => console.error(err))
    console.log('ENCLAVE', enclave)

    console.log('WALLET ADDRESS', Wallet.address)

    const history = await getAddressHistory(Wallet.address)
        .catch(err => console.error(err))
    console.log('HISTORY', history)
}

const receivedDisplay = (_campaign) => {
    const received = _campaign.received

    return numeral(received / 1e2).format('0,0.00') + ' NEXA'
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
    <main class="mx-auto max-w-7xl px-3 sm:px-6 pt-18 sm:pt-16 lg:px-8">
        <div class="mx-auto mt-8 max-w-7xl px-0 sm:mt-0 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-2xl font-semibold leading-7 text-indigo-600">
                    Mining Center
                </h1>
            </div>

            <MiningStats />

            <p class="mx-auto mt-6 w-full lg:max-w-2xl text-center text-lg leading-8 text-gray-600">
                We're asking for your support to get <span class="text-2xl text-indigo-500 font-extrabold">5 Core Platforms</span> off-the-ground.
                We appreciate you making time to check out and/or share one or more campaigns listed below.
                For every contribution, supporters will receive <span class="text-2xl text-rose-500 font-extrabold">$NXY</span> sent to their Nexa wallet <span class="text-2xl text-indigo-500 font-extrabold">INSTANTLY!</span>
            </p>



            <div class="grid lg:grid-cols-5 gap-5">

                <section class="w-full lg:col-span-3 lg:w-1/2 flex flex-col gap-4">
                    <h2>
                        Mining Station
                    </h2>

                    <button @click="startMiner" class="px-5 py-2 bg-lime-500 rounded-xl shadow hover:bg-lime-400">
                        <span class="text-3xl text-lime-900 font-medium">
                            Start Web Miner
                        </span>
                    </button>

                    <div>
                        Private/Public
                    </div>

                </section>

                <section class="lg:col-span-2">

                    TBD

                </section>

            </div>

            <div class="isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:mx-0 lg:max-w-none xl:grid-cols-3">

                TBD

            </div>
        </div>
    </main>
</template>
