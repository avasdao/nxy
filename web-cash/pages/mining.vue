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
                <h1 class="text-3xl font-semibold leading-7 text-gray-500 tracking-widest uppercase">
                    Mining Center
                </h1>
            </div>

            <MiningGlobalStats />

            <section class="my-5 flex flex-row gap-6 items-center">

                <img
                    src="~/assets/bitcoin-vault.jpg"
                    class="w-2/3 h-40 flex-1 bg-green-700 border-2 border-green-900 rounded-xl shadow object-cover"
                />

                <p class="w-1/3 py-5 text-center text-lg leading-8 text-gray-600">
                    CPU Mining is BACK!
                    Join the <span class="pr-1 text-2xl text-rose-500 font-extrabold italic">Season 1</span> Mining Rewards TODAY!
                    Easily mine $NXY from your Desktop or Mobile devices.
                </p>

            </section>

            <div class="mt-20 grid lg:grid-cols-5 gap-5">

                <section class="lg:col-span-3 flex flex-col gap-4">
                    <MiningLocalStats />
                </section>

                <section class="lg:col-span-2 flex flex-col gap-3">

                    <button @click="startMiner" class="group px-5 py-5 bg-green-500 border border-green-700 rounded-xl shadow hover:bg-green-400">
                        <span class="text-5xl text-amber-100 font-medium group-hover:text-green-900">
                            Start Mining
                        </span>
                    </button>

                    <div class="px-3 py-2 bg-gradient-to-r from-rose-50 to-rose-100 border-2 border-rose-300 rounded-xl shadow">
                        <small class="text-xs text-rose-800 uppercase font-medium">
                            Current Mining Algorithm <em>(hash)</em>
                        </small>

                        <span class="text-rose-600 font-bold text-center tracking-wider truncate">
                            AD6CE46F7F1EA8519DC02CE8CE0C278C6FF329B2
                        </span>
                    </div>

                </section>

            </div>

        </div>
    </main>
</template>
