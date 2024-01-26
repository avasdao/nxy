<script setup lang="ts">
/* Import modules. */
import numeral from 'numeral'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    receiver: String,
    // amount: String,
    satoshis: Number,
})

import { useWalletStore } from '@/stores/wallet'
const Wallet = useWalletStore()

/* Set ($AVAS) token id. */
const AVAS_TOKENID = 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x'

const amount = ref(null)
const error = ref(null)
const txidem = ref(null)


const totalTokens = computed(() => {
    if (!Wallet.tokens) {
        return 0
    }

    return Wallet.tokens.reduce(
        (total, token) => (token.tokens + total), BigInt(0)
    )
})

const send = async (_amount) => {
    /* Set ($AVAS) token id. */
    const AVAS_TOKENID = 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x'

    /* Set token id. */
    Wallet.selectAsset(AVAS_TOKENID)

    let receiver = Wallet.stakehouse
    console.log('RECEIVER', receiver)

    const displayAmount = parseFloat(_amount) / 1e8

    if (confirm(`Are you sure you want to STAKE ${numeral(displayAmount).format('0,0.00[000000]')} $AVAS to your Stakehouse?`)) {
        const response = await Wallet.makeReservation(_amount)
        console.log('RESPONSE', response)

        /* Clear amount. */
        amount.value = null

        /* Validate response. */
        if (response?.result) {
            alert(`Your transaction completed successfully!\n\n${response.result}`)
        }

        if (response?.error) {
            alert(response.error?.message)
        }
    }
}

const stake25 = () => {
    /* Calculate stake amount. */
    const stakeAmount = totalTokens.value / BigInt(4)

    /* Send stake amount. */
    send(stakeAmount)
}

const stake50 = () => {
    /* Calculate stake amount. */
    const stakeAmount = totalTokens.value / BigInt(2)

    /* Send stake amount. */
    send(stakeAmount)
}

const stakeCustom = () => {
    /* Calculate stake amount. */
    const stakeAmount = BigInt(amount.value * 1e8)

    /* Send stake amount. */
    send(stakeAmount)
}

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
    <div class="isolate overflow-hidden bg-gray-900">
        <div class="mx-auto max-w-7xl px-6 pb-96 pt-12 text-center sm:pt-16 lg:px-8">
            <div class="mx-auto max-w-4xl">
                <h2 class="text-3xl font-semibold leading-7 text-indigo-400">
                    Stake Menu
                </h2>

                <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    We guarantee 100% satisfaction, <br class="hidden sm:inline lg:hidden" />
                    whoever you are
                </p>
            </div>

            <div class="relative mt-6">
                <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                    Relax and enjoy a selection from one of our Prix Fixe menus.
                </p>

                <svg viewBox="0 0 1208 1024" class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
                    <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512" />
                    <defs>
                        <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>

        <div class="flow-root bg-white pb-6 sm:pb-8">
            <div class="-mt-80">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                        <div class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                            <div>
                                <h3 id="tier-hobby" class="text-base font-semibold leading-7 text-indigo-600">
                                    Prix Fixe Petite
                                </h3>

                                <div class="mt-4 flex items-baseline gap-x-2">
                                    <span class="text-5xl font-bold tracking-tight text-gray-900">{{numeral(parseFloat(totalTokens) / 1e8 / 4.0).format('0,0.00')}}</span>
                                    <span class="text-base font-semibold leading-7 text-gray-600">/ of {{numeral(parseFloat(totalTokens) / 1e8).format('0,0.00[00]')}}</span>
                                </div>

                                <p class="mt-6 text-base leading-7 text-gray-600">
                                    Enjoy a sumptuous serving of <span class="text-lg font-medium text-indigo-500">Daily Payouts</span> with this delectable selection from our menu.
                                </p>

                                <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>

                                        <span>
                                            Treasury Payouts will be delivered @ approx <span class="text-base font-medium text-indigo-500">4:20 UTC</span> each and every day
                                        </span>
                                    </li>

                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>

                                        Over 700+ hours of financial gratification
                                    </li>
                                </ul>
                            </div>

                            <button
                                @click="stake25"
                                aria-describedby="tier-hobby"
                                class="mt-8 py-5 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-3xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Stake 25%
                            </button>
                        </div>

                        <div class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                            <div>
                                <h3 id="tier-team" class="text-base font-semibold leading-7 text-indigo-600">
                                    Prix Fixe Grande
                                </h3>

                                <div class="mt-4 flex items-baseline gap-x-2">
                                    <span class="text-5xl font-bold tracking-tight text-gray-900">{{numeral(parseFloat(totalTokens) / 1e8 / 2.0).format('0,0.00')}}</span>
                                    <span class="text-base font-semibold leading-7 text-gray-600">/ of {{numeral(parseFloat(totalTokens) / 1e8).format('0,0.00[00]')}}</span>
                                </div>

                                <p class="mt-6 text-base leading-7 text-gray-600">
                                    Enjoy a sumptuous serving of <span class="text-lg font-medium text-indigo-500">Daily Payouts</span> with this delectable selection from our menu.
                                </p>

                                <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>

                                        <span>
                                            Treasury Payouts will be delivered @ approx <span class="text-base font-medium text-indigo-500">4:20 UTC</span> each and every day
                                        </span>
                                    </li>

                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>

                                        Over 700+ hours of financial gratification
                                    </li>

                                    <li class="flex gap-x-3">
                                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>

                                        Enjoy an extra-large serving size of our healthy and delicious $NEXA bites
                                    </li>
                                </ul>
                            </div>

                            <button
                                @click="stake50"
                                aria-describedby="tier-team"
                                class="mt-8 py-5 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-3xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Stake 50%
                            </button>
                        </div>

                        <div class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                            <div class="lg:min-w-0 lg:flex-1">
                                <h3 class="text-2xl font-semibold leading-8 tracking-tight text-indigo-600">
                                    À la carte
                                </h3>

                                <p class="mt-1 text-base leading-7 text-gray-600">
                                    We always aim to please and are more than happy to customize your stake to your particular liking.
                                </p>

                                <!-- <p class="mt-1 text-base leading-7 text-gray-600">
                                    Do you have a particular request?
                                    No problem, we aim to please.
                                    What is your preferred stake amount?
                                </p> -->

                                <input
                                    type="number"
                                    class="mt-3 w-full px-5 py-5 text-2xl text-yellow-900 bg-yellow-100 border-b-8 border-yellow-400 rounded-xl shadow-md placeholder:text-yellow-600 focus:outline-none"
                                    placeholder="enter amount of $AVAS"
                                    v-model="amount"
                                />

                            </div>

                            <button
                                @click="stakeCustom"
                                class="rounded-md px-5 py-3 text-2xl font-semibold leading-6 bg-indigo-100 border border-indigo-300 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit your request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
