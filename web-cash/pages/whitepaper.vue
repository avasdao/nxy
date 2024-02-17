<script setup lang="ts">
useHead({
    title: `Whitepaper — Nxy Cash`,
    meta: [
        { name: 'description', content: `Nxy Cash makes building your next BIG idea effortless.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

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
    <main class="bg-white px-3 py-32 sm:px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-light leading-7 text-gray-400 italic tracking-wider">
                Last updated: 2024.2.17
            </p>

            <h1 class="mt-2 text-6xl sm:text-5xl font-bold tracking-tight text-gray-900">
                $NXY Cash <span class="pl-8 sm:pl-0 block sm:inline text-4xl sm:text-5xl text-gray-400 sm:text-gray-900 tracking-widest sm:tracking-normal uppercase sm:normal-case">Whitepaper</span>
            </h1>

            <p class="my-6 text-xl leading-8">
                We began in search of an elegant solution to the <span class="text-2xl font-medium">"commons"</span> problem:
                offering <span class="text-2xl font-medium">sustainable</span> infrastructure to an ever-growing global community, using purely <span class="text-2xl font-medium">economic</span> incentives, built directly into a <span class="text-2xl font-medium">provably fair</span> protocol.
            </p>

            <p class="my-8 sm:my-12 text-4xl sm:text-5xl leading-[50px] sm:leading-[60px] font-light italic">
                What we discovered was How-to <span class="font-normal">financially support <span class="text-rose-500 text-6xl">Creators</span></span> with <span class="underline">NO</span> strings attached, indefinitely!
            </p>

            <p class="my-6 text-xl leading-8">
                $NXY introduces the <span class="text-2xl font-medium"><NuxtLink class="text-blue-500 hover:underline" to="https://github.com/avasdao/wisebox/blob/master/mining/PoW/v1/Polymorph.nex" target="_blank">Polymorph</NuxtLink> NexScript contract</span> as a fairly launched community token over the Nxy L1+ network.
                Polymorph v1 is packed with over <span class="text-2xl font-medium text-amber-500">10M+ mutable proof-of-work (PoW) mining algorithms,</span> offering <em>indefinite<sup>*</sup></em> rewards for both CPU and GPU mining participants.
            </p>

            <p class="my-6 text-xl leading-8">
                Our primary goal is to promote a <span class="text-2xl font-medium">MASSIVE wallet distribution</span> of $NXY, and effectively demonstrate the ability for <span class="text-2xl font-medium">ANYONE <em>(including mobile phone users)</em></span> to fairly mine for ANY Nexa-tokenized asset just by using the proof-of-work (PoW) power generated from <span class="text-2xl font-medium">A SINGLE CPU!</span>
            </p>

            <p class="mt-5 text-sm italic text-gray-400">
                * In the event that remote services are disrupted, the contract can continue indefintiely in PUBLIC mode.
            </p>

            <WhitepaperIntroduction />

            <div class="mt-16 max-w-2xl">
                <h2 class="text-4xl font-bold tracking-tight text-gray-700">
                    NXL Mining Rewards
                </h2>

                <p class="mt-6">
                    NXY has a simple rewards emission schedule that decreases the mining reward amount every 64,800 blocks (about 90 days).
                </p>
            </div>

            <img
                src="~/assets/whitepaper/rewards_schedule.png"
                class="my-10 w-full rounded-2xl shadow-md"
            />

            <div class="mt-16 max-w-2xl">
                <h4 class="mt-6 text-lg font-medium">
                    The mining reward amount is governed by the following calculation:
                </h4>

                <pre class="sm:hidden mt-3 text-sm">
currentSeason =
    (currentEpoch / seasonLength) + 1

miningReward =
    genesisMiningReward / currentSeason
                </pre>
                <pre class="hidden sm:flex mt-3">
currentSeason = (currentEpoch / seasonLength) + 1
miningReward = genesisMiningReward / currentSeason
                </pre>
            </div>

            <WhitepaperRewardsSchedule class="my-10" />

            <WhitepaperBenefits />

            <WhitepaperDelegate />

            <WhitepaperDisclaimer />

        </div>
    </main>
</template>
