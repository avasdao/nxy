<script setup lang="ts">
/* Import modules. */
import JSConfetti from 'js-confetti'
import numeral from 'numeral'

import { listUnspent } from '@nexajs/address'

import { randomBytes } from '@nexajs/crypto'

import {
    binToHex,
    hexToBin,
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
import { useMiningStore } from '@/stores/mining'
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const Mining = useMiningStore()
const System = useSystemStore()
const Wallet = useWalletStore()

const errors = ref(null)
const mintingAuth = ref(null)
const txidem = ref(null)

const isMining = ref(false)

const NXY_ID_HEX = '5f2456fa44a88c4a831a4b7d1b1f34176a29a3f28845af639eb9b1c88dd40000'

const enclave = ref(null)

/* Initialize confetti. */
let jsConfetti

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
    /* Initialize locals. */
    let miningAddress
    let miningUnspent

    /* Initialize confetti. */
    jsConfetti = new JSConfetti()

    console.log('WALLET ADDRESS', Wallet.address)

    /* Initialize errors. */
    errors.value = []

    /* Request wallet history. */
    // FIXME: This should already be saved somewhere??
    const history = await getAddressHistory(Wallet.address)
        .catch(err => console.error(err))
    console.log('MY HISTORY', history)

    /* Request enclave (mining) details. */
    enclave.value = await $fetch('https://enclave.nxy.cash/v1/mining')
        .catch(err => console.error(err))
    console.log('ENCLAVE', enclave.value)

    /* Set mining address. */
    miningAddress = enclave.value.address
    console.log('MINING ADDRESS', miningAddress)

    /* Request unspent of mining address. */
    miningUnspent = await listUnspent(miningAddress)
        .catch(err => console.error(err))
    console.log('MINING UNSPENT', miningUnspent)

    /* Find latest minting authority. */
    mintingAuth.value = miningUnspent.find(_unspent => {
        return _unspent.tokenidHex === NXY_ID_HEX && _unspent.tokens < BigInt(0)
    })
    console.log('MINTING AUTH', mintingAuth.value)
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

    /* Convert to (final) submission. */
    let submission = hash.toString(CryptoJS.enc.Hex)
    // console.log('MY RIPEMD-160', submission)

    /* Return (final) submission. */
    return submission
}

const startMiner = async () => {
    console.log('STARTING MINER...')

    /* Initialize locals. */
    let candidate
    let errMsg
    let miner
    let mySubmission
    let outpointHash
    let response

    /* Reset errors. */
    errors.value = []

    /* Reset result. */
    txidem.value = null

    // TODO Decode script hash from wallet address.
    miner = hexToBin('0000000000000000000000000000000000000000')
    console.log('MINER', binToHex(miner))

    /* Generate new candidate. */
    // candidate = '0000000000000000000000000000000000000000000000000000000000000000'
    candidate = randomBytes(32)
    console.log('CANDIDATE', binToHex(candidate))

    // TODO Record candidates to (local) logs (for auditing).

    if (!mintingAuth.value?.outpoint) {
        return alert('Loading mining parameters loading...')
    }

    /* Set flag. */
    isMining.value = true

    outpointHash = mintingAuth.value.outpoint
    outpointHash = reverseHex(outpointHash)
    console.log('OUTPOINT HASH', outpointHash)

    mySubmission = calcSubmission(miner, outpointHash, candidate)
    console.log('SUBMISSION', mySubmission)

    /* Submit candidate. */
    response = await Mining.submit(Wallet.wallet, miner, candidate)
    console.log('SUBMISSION RESPONSE', response)

    /* Set flag. */
    isMining.value = false

    /* Validate response. */
    if (response.result) {
        txidem.value = response.result

        // BURST CONFETTI
        jsConfetti.addConfetti({
            // emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            // confettiColors: [
            //     '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
            // ],
            // confettiRadius: 6,
            confettiNumber: 300,
        })
    }

    /* Validate error. */
    if (response.error) {
        /* Validate error message. */
        if (response.error.message.includes('Script failed an OP_VERIFY operation')) {
            errMsg = 'Candidate failed! Please try again...'

            errors.value.push(errMsg)
            return console.error(errMsg)
        }

        if (response.error.message.includes('non-BIP68-final')) {
            errMsg = 'Please wait until the next Nexa block to submit your next Reward candidate.'

            errors.value.push(errMsg)
            return console.error(errMsg)
        }

        /* Display (unknown) error. */
        alert(response.error.message)
    }
}

onMounted(() => {
    // init()

    setTimeout(init, 3000) // FIXME: TEMP FOR DEV ONLY
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

            <section class="my-5 flex flex-col lg:flex-row gap-6 items-center">

                <img
                    src="~/assets/bitcoin-vault.jpg"
                    class="order-2 lg:order-1 w-full lg:w-2/3 h-40 flex-1 bg-green-700 border-2 border-green-900 rounded-xl shadow object-cover"
                />

                <p class="order-1 lg:order-2 w-full lg:w-1/3 py-5 text-center text-lg leading-8 text-gray-600">
                    CPU Mining is BACK!
                    Join the <span class="pr-1 text-2xl text-rose-500 font-extrabold italic">Season 1</span> Mining Rewards TODAY!
                    Easily mine $NXY from your Desktop or Mobile devices.
                </p>

            </section>

            <div class="mt-20 grid lg:grid-cols-5 gap-5">

                <section class="lg:col-span-3 flex flex-col gap-12 order-2 lg:order-1">
                    <MiningLocalStats />
                    <MiningPoolStats />
                </section>

                <section class="w-full lg:col-span-2 flex flex-col gap-3 order-1 lg:order-2 truncate">

                    <button
                        @click="startMiner"
                        class="group px-5 py-5 bg-green-500 border border-green-700 rounded-xl shadow hover:bg-green-400"
                        :class="[ isMining ? 'opacity-30' : '' ]"
                        :disabled="isMining"
                    >
                        <span class="text-5xl text-amber-100 font-medium group-hover:text-green-900">
                            Start Mining
                        </span>
                    </button>

                    <div v-if="txidem" class="col-span-2 mb-3 px-3 py-2 flex flex-col gap-3 bg-gray-800 border-t-2 border-amber-300 rounded-lg shadow">
                        <h3 class="text-gray-100 text-base font-medium">
                            Congratulations!
                            <br />You received a mining reward!
                        </h3>

                        <div class="">
                            <h4 class="text-xs uppercase text-amber-200 font-medium tracking-wider">
                                Transaction Idem
                            </h4>

                            <div class="w-full flex flex-row gap-1 items-center truncate">
                                <NuxtLink :to="'https://explorer.nexa.org/tx/' + txidem" target="_blank" class="w-full text-lg text-blue-200 font-medium truncate">
                                    {{txidem}}
                                </NuxtLink>

                                <svg class="w-10 h-auto text-blue-200" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div v-if="errors && errors.length">
                        <div class="rounded-md bg-red-50 p-4">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>

                                <div class="ml-3">
                                    <h3 class="text-sm font-medium text-red-800 tracking-wide">
                                        There were {{errors.length}} error(s) with your submission
                                    </h3>

                                    <div class="mt-2 text-sm text-red-700">
                                        <ul role="list" class="list-disc space-y-1 pl-5">
                                            <li v-for="error of errors" :key="error">
                                                {{error}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
