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
const System = useSystemStore()

const campaigns = ref([])

const campaign_1_id = '475b4cfc-ae95-419d-9681-cf378c083963'
const campaign_2_id = 'b8fac25d-e619-4ddf-b474-af084e8250ce'
const campaign_3_id = '707e2a8c-4eea-4c26-9ea2-c548e9e91726'
const campaign_4_id = 'f900d1b8-1ae0-4e18-8a2f-212631b62562'

const campaign5 = {
    id: null,
    address: 'TBD',
    title: `Hackathon Festivals`,
    summary: ``,
    asking: 0,
    rewards: 0,
    cost: 0,
    costUsd: 0.00,
}

const copyToClipboard = (_text) => {
    /* Copy address to clipboard. */
    Clipboard.copy(_text)

    alert(`${_text} has been copied to the clipboard.`)
}


const init = async () => {
    let response

    response = await $fetch(`https://causes.cash/v1/campaign/${campaign_1_id}`)
        .catch(err => console.error(err))
    campaigns.value.push(response)

    response = await $fetch(`https://causes.cash/v1/campaign/${campaign_2_id}`)
        .catch(err => console.error(err))
    campaigns.value.push(response)

    response = await $fetch(`https://causes.cash/v1/campaign/${campaign_3_id}`)
        .catch(err => console.error(err))
    campaigns.value.push(response)

    response = await $fetch(`https://causes.cash/v1/campaign/${campaign_4_id}`)
        .catch(err => console.error(err))
    campaigns.value.push(response)
    console.log('CAMPAIGN 4', response)

    campaigns.value.push(campaign5)
}

const receivedDisplay = (_campaign) => {
    const received = _campaign.received

    return numeral(received / 1e2).format('0,0.00') + ' NEXA'
}

const asking = (_campaign) => {
    if (!_campaign.goals) {
        return 0
    }

    return _campaign.goals.reduce(
        (total, _goal) => (total + _goal.amount), 0
    ) / 100.0
}

const completedDisplay = (_campaign) => {
    if (!_campaign.goals) {
        return '0.00%'
    }

    // console.log('ASKING', asking(_campaign))
    // console.log('RECEIVED',  (_campaign.received / 100.0))
    const received = _campaign.received / 100.0

    const pct = received / asking(_campaign)

    return numeral(pct).format('0.00%')
}

const rewards = (_campaign) => {
    if (!_campaign.goals) {
        return 0
    }

    const totalGoal = _campaign.goals.reduce(
        (total, goal) => (goal.amount + total), 0
    )

    const totalRewards = totalGoal * _campaign?.rewards[0].rate || 0

    return totalRewards / 1e8
}

const discount = (_campaign) => {
    if (!_campaign.goals) {
        return 0
    }

    const discount = asking(_campaign) / rewards(_campaign)

    return discount
}

const discountUsdDisplay = (_campaign) => {
    if (!discount(_campaign)) {
        return 0
    }

    return numeral(discount(_campaign) * System.nex).format('$0,0.00')
}

onMounted(() => {
    // loadCampaign1()
    // init()
    // campaign_1_id
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

                <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    NXY introduces a NEW Crypto Mining for ANYONE with a CPU
                </p>
            </div>

            <p class="mx-auto mt-6 w-full lg:max-w-2xl text-center text-lg leading-8 text-gray-600">
                We're asking for your support to get <span class="text-2xl text-indigo-500 font-extrabold">5 Core Platforms</span> off-the-ground.
                We appreciate you making time to check out and/or share one or more campaigns listed below.
                For every contribution, supporters will receive <span class="text-2xl text-rose-500 font-extrabold">$NXY</span> sent to their Nexa wallet <span class="text-2xl text-indigo-500 font-extrabold">INSTANTLY!</span>
            </p>

            <section class="w-1/2 flex flex-col gap-4">
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

            <div class="isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:mx-0 lg:max-w-none xl:grid-cols-3">

                TBD

            </div>
        </div>
    </main>
</template>
