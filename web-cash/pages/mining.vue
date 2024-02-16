<script setup lang="ts">
/* Import modules. */
import numeral from 'numeral'

import {
    reverseHex,
} from '@nexajs/utils'

import CryptoJS from 'crypto-js'
// import sha1 from 'crypto-js/sha1'

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


const toggleSolo = () => {
    alert(`Oops! You MUST have at least 20 $NXY in your wallet to pay the transaction fee and receive the mining reward.\n\nPlease check your balance and try again...`)
}

const toggleFiat = () => {
    alert(`Coming soon...`)
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

const calcSubmission = (_miner, _outpointHash, _candidate) => {
    const myRaw = `${_miner}${_outpointHash}${_candidate}`
    // console.log('RAW', myRaw)

    let myHex = CryptoJS.enc.Hex.parse(myRaw)
    // let myHex = CryptoJS.enc.Hex.parse(`${_outpointHash}${_candidate}`)
    // console.log('MY HEX-1', myHex)

    let hash = CryptoJS.SHA1(myHex)
    // console.log('HASH-1', hash)

    // let mySha1 = hash.toString(CryptoJS.enc.Hex)
    // console.log('MY SHA-1', mySha1)

    hash = CryptoJS.SHA256(hash)
    // console.log('HASH-2', hash)

    // let mySha256 = hash.toString(CryptoJS.enc.Hex)
    // console.log('MY SHA-256', mySha256)

    hash = CryptoJS.RIPEMD160(hash)
    // console.log('HASH-3', hash)

    let myRipemd = hash.toString(CryptoJS.enc.Hex)
    // console.log('MY RIPEMD-160', myRipemd)

    return myRipemd
}

const startMiner = () => {
    console.log('STARTING MINER')

    const miner = '0000000000000000000000000000000000000000'

    const candidate = '0000000000000000000000000000000000000000000000000000000000000002'

    let outpointHash
    let mySubmission

    outpointHash = 'fa0f991ef4fec7039f98264c9f8006f775ad6f186930a4c6596faa566465d171'
    outpointHash = reverseHex(outpointHash)
    console.log('OUTPOINT HASH-1', outpointHash)

    mySubmission = calcSubmission(miner, outpointHash, candidate)
    console.log('SUBMISSION-2', mySubmission)
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

                <section class="lg:col-span-3 flex flex-col gap-12">
                    <MiningLocalStats />
                    <MiningPoolStats />
                </section>

                <section class="lg:col-span-2 flex flex-col gap-3">

                    <button @click="startMiner" class="group px-5 py-5 bg-green-500 border border-green-700 rounded-xl shadow hover:bg-green-400">
                        <span class="text-5xl text-amber-100 font-medium group-hover:text-green-900">
                            Start Mining
                        </span>
                    </button>

                    <div class="my-3 px-3 flex items-center justify-between gap-3">

                        <span class="flex flex-grow flex-col">
                            <span class="text-base font-medium leading-6 text-gray-800 tracking-wider">
                                Enable SOLO mining?
                            </span>

                            <span class="text-sm text-gray-500" id="availability-description">
                                Receive the FULL reward for every accepted solution.
                                <em class="block text-xs text-rose-500 tracking-wider">(requires small amount of $NXY to pay transaction fee)</em>
                            </span>
                        </span>

                        <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                        <button
                            @click="toggleSolo"
                            type="button"
                            class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                            role="switch"
                            aria-checked="false"
                            aria-labelledby="availability-label"
                            aria-describedby="availability-description"
                        >
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                    </div>

                    <div class="my-3 px-3 flex items-center justify-between gap-3">

                        <span class="flex flex-grow flex-col">
                            <span class="text-base font-medium leading-6 text-gray-800 tracking-wider">
                                Display in FIAT?
                            </span>

                            <span class="text-sm text-gray-500" id="availability-description">
                                Display ALL monetary values in your local currency.
                            </span>
                        </span>

                        <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                        <button
                            @click="toggleFiat"
                            type="button"
                            class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                            role="switch"
                            aria-checked="false"
                            aria-labelledby="availability-label"
                            aria-describedby="availability-description"
                        >
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                        </button>
                    </div>

                    <div class="bg-gray-800 sm:rounded-lg">
                        <div class="px-4 py-5 sm:p-6">
                            <h3 class="text-base font-semibold leading-6 text-amber-200 tracking-wider">
                                Are you looking for more miners?
                            </h3>

                            <div class="mt-2 max-w-xl text-sm text-amber-300 tracking-wider">
                                <p>
                                    Cloud mining offers an opportunity to INSTANTLY scale up your hashrate with just a few clicks.
                                    Fully-managed CPU miners start at just $5/mo each.
                                </p>
                            </div>

                            <div class="mt-5">
                                <NuxtLink to="https://nexa.rocks/cloud" target="_blank" type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-sm hover:bg-lime-200">
                                    Learn more at Nexa Rocks!
                                </NuxtLink>
                            </div>
                        </div>
                    </div>


                </section>

            </div>

        </div>
    </main>
</template>
