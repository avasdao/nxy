<script setup lang="ts">
/* Import modules. */
import moment from 'moment'
import { getTransaction } from '@nexajs/provider'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    mintingAuth: Object,
})

const lastTx = ref(null)

const lastPayoutTime = computed(() => {
    if (!lastTx.value) {
        return 'n/a'
    }

    return moment.unix(lastTx.value.time).fromNow()
})


const init = async () => {
    console.log('mintingAuth', props.mintingAuth)

    /* Initialize last transaction (display). */
    lastTx.value = 'loading...'

    if (props.mintingAuth) {
        /* Request transaction details. */
        lastTx.value = await getTransaction(props.mintingAuth.txid)
            .catch(err => console.error(err))
        console.log('TX RESULT', lastTx.value)
    }
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
    <main>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div class="relative overflow-hidden rounded-lg bg-fuchsia-700 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-full bg-purple-200 p-2">
                        <svg class="w-10 h-auto text-purple-800" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"></path>
                        </svg>
                        <!-- <svg class="w-10 h-auto text-purple-800" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"></path>
                        </svg> -->
                    </div>

                    <p class="ml-16 truncate text-xl font-medium text-purple-100">
                        Total Hashrate
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-purple-200">
                        112.0 <small class="text-base">MH/s</small>
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-lime-500">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-lime-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>

                        <span class="sr-only"> Increased by </span>
                        12.3
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-purple-200 px-4 py-4 sm:px-6">
                        <div class="text-base">
                            <a href="javascript://" class="font-medium text-purple-800 hover:text-indigo-500">
                                open hashrate history<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

            <div class="relative overflow-hidden rounded-lg bg-fuchsia-700 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-full bg-purple-200 p-2">
                        <svg class="w-10 h-auto text-purple-800" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                        <!-- <svg class="w-10 h-auto text-purple-800" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"></path>
                        </svg> -->
                    </div>

                    <p class="ml-16 truncate text-xl font-medium text-purple-100">
                        Mined in Last 24hrs
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-purple-200">
                        35,350 <em class="text-sm font-normal tracking-wider">(in millions)</em>
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-lime-500">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-lime-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>

                        <span class="sr-only"> Increased by </span>
                        1,050
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-purple-200 px-4 py-4 sm:px-6">
                        <div class="text-base">
                            <a href="javascript://" class="font-medium text-purple-800 hover:text-indigo-500">
                                open mining history<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

            <div class="relative overflow-hidden rounded-lg bg-fuchsia-700 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-full bg-purple-200 p-2">
                        <svg class="w-10 h-auto text-purple-800" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path>
                        </svg>
                    </div>

                    <p class="ml-16 truncate text-xl font-medium text-purple-100">
                        Last Reward Payout
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-purple-200">
                        {{lastPayoutTime}}
                    </p>

                    <p class="ml-2 flex items-baseline text-sm tracking-wider font-medium text-red-400">
                        <svg class="pr-1 h-5 w-5 flex-shrink-0 self-center text-red-300" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"></path>
                        </svg>

                        <span class="sr-only"> Public availability </span>
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-purple-200 px-4 py-4 sm:px-6">
                        <div class="text-base">
                            <a href="javascript://" class="font-medium text-purple-800 hover:text-indigo-500">
                                open rewards history<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

        </dl>

        <section class="flex flex-col lg:flex-row justify-between gap-5">

            <NuxtLink v-if="props.mintingAuth?.txid" :to="'https://explorer.nexa.org/tx/' + props.mintingAuth.txid" target="_blank" class="mt-5 w-full lg:w-1/2 px-3 py-3 flex flex-col items-center gap-1 bg-fuchsia-100 border-2 border-fuchsia-300 rounded-xl shadow hover:bg-fuchsia-200">
                <small class="text-xs text-fuchsia-800 uppercase font-medium tracking-wider">
                    Last Mining Transaction
                </small>

                <span class="w-full text-fuchsia-600 font-bold text-center tracking-wider truncate">
                    {{props.mintingAuth.txid}}
                </span>
            </NuxtLink>

            <div class="mt-5 w-full lg:w-1/2 px-3 py-3 flex flex-col items-center gap-1 bg-gradient-to-r from-rose-50 to-rose-100 border-2 border-rose-300 rounded-xl shadow cursor-help">
                <small class="text-xs text-rose-800 uppercase font-medium tracking-wider">
                    Current Mining Algorithm (hash)
                </small>

                <span class="w-full text-rose-600 font-bold text-center tracking-wider truncate">
                    AD6CE46F7F1EA8519DC02CE8CE0C278C6FF329B2
                </span>
            </div>

        </section>

    </main>
</template>
