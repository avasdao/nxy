<script setup lang="ts">
/* Import modules. */
import { listUnspent } from '@nexajs/address'
import numeral from 'numeral'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const System = useSystemStore()
const Wallet = useWalletStore()

/* Set ($NXY) token id. */
const AVAS_TOKENID = 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x'

const unspent = ref(null)

const jsonStringify = (_data) => {
    let data

    data = JSON.stringify(_data, (key, value) =>
        typeof value === 'bigint' ? value.toString() + 'n' : value
    )

    return data
}

const tokens = computed(() => {
    if (!unspent.value?.length) {
        return []
    }

    return unspent.value
        .filter(_unspent => _unspent.hasToken)
        .filter(_unspent => _unspent.tokenid === AVAS_TOKENID)

})

const init = async () => {
    if (!Wallet.stakehouse) {
        return setTimeout(() => {
            init()
        }, 100)
    }
    console.log('WALLET STAKEHOUSE', Wallet.stakehouse)

    unspent.value = await listUnspent(Wallet.stakehouse)
        .catch(err => console.error(err))
    console.log('UNSPENT', unspent.value)
}

const amountDisplay = (_token) => {
    // FIXME: Format for BigInt
    const amount = parseFloat(_token.tokens) / 1e8

    return numeral(amount).format('0,0.00[000000]')
}

const redeem = async (_token) => {
    if (confirm(`Are you sure you want to redeem ${amountDisplay(_token)} AVAS to ${Wallet.address}?`)) {
        const response = await Wallet.redeem(_token)
        console.log('RESPONSE', response)

        /* Validate response. */
        if (response?.result) {
            alert(`Your transaction completed successfully!\n\n${response.result}`)
        }

        if (response?.error) {
            alert(response.error?.message)
        }
    }
}

const renew = async (_token) => {
    // TODO
}

onMounted(() => {
    setTimeout(init, 2000)
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

</script>

<template>
    <main class="px-3">
        <h2 class="pl-3 text-4xl font-light text-gray-900 tracking-tighter">
            My Reservation Schedule
        </h2>

        <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
            <div class="hidden lg:block mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                <ReservationCalendar />
            </div>

            <ol class="mt-4 lg:col-span-7 xl:col-span-8">

                <li
                    v-for="token of tokens"
                    :key="token.tokenid"
                    class="my-5 px-5 py-5 border-2 border-amber-400 bg-amber-100 rounded-2xl shadow"
                >
                    <div class="flex-col">
                        <h2 class="text-4xl font-medium text-gray-700">
                            {{amountDisplay(token)}}

                            <span class="text-2xl text-rose-500">
                                $NXY
                            </span>
                        </h2>

                        <dl class="mt-2 flex flex-col text-gray-500">
                            <div class="flex items-start space-x-3">
                                <dt class="mt-0.5">
                                    <span class="sr-only">Date</span>
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </dt>

                                <h3 class="text-xl">
                                    block #{{token.height}}
                                </h3>
                            </div>

                            <div class="mt-2 flex items-start">
                                <dt class="mt-0.5">
                                    <span class="sr-only">Location</span>
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </dt>

                                <NuxtLink :to="'https://explorer.nexa.org/tx/' + token.txid" target="_blank" class="text-amber-700 font-medium truncate hover:text-amber-600">
                                    {{token.txid}}
                                </NuxtLink>
                            </div>
                        </dl>
                    </div>

                    <section class="flex flex-col sm:flex-row gap-2 sm:gap-6">
                        <div class="w-full">
                            <button
                                @click="redeem(token)"
                                aria-describedby="tier-team"
                                class="w-full h-14 mt-3 py-3 block rounded-xl bg-red-600 border border-red-800 px-3.5 py-2 text-center text-xl font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                                Redeem My Stake
                            </button>

                            <div class="mt-1 text-xs text-red-600 font-medium text-center italic">
                                sent to your AVAS wallet
                            </div>
                        </div>

                        <button
                            @click="renew(token)"
                            aria-describedby="tier-team"
                            class="cursor-not-allowed opacity-50 w-full h-14 mt-3 py-3 block rounded-xl bg-lime-600 border border-lime-800 px-3.5 py-2 text-center text-xl font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                        >
                            Renew My Stake
                        </button>
                    </section>
                </li>

            </ol>
        </div>
    </main>
</template>
