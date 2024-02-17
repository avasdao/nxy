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

            <div class="mt-20 max-w-2xl">
                <h2 class="my-6 text-xl font-bold leading-8">
                    Polymorph MOST attractive Benefits for Creators:
                </h2>

                <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
                    <li class="flex gap-x-3">
                        <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                        </svg>

                        <span>
                            <strong class="font-semibold text-gray-900">Greater accessibility.</strong>
                            Grow our community beyond traditional markets and boundaries.
                            Our aim is to tear down the walls constructed by permission-seeking gatekeepers.
                        </span>
                    </li>

                    <li class="flex gap-x-3">
                        <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                        </svg>

                        <span>
                            <strong class="font-semibold text-gray-900">Greater transparency.</strong>
                            Allows our team to share and earn the trust of our community.
                        </span>
                    </li>

                    <li class="flex gap-x-3">
                        <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                        </svg>

                        <span>
                            <strong class="font-semibold text-gray-900">Greater sustainability.</strong>
                            Maintenance is built directly into the protocol, allowing for perfect alignment of incentives to succeed with the community.
                        </span>
                    </li>
                </ul>

                <p class="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.
                    Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>

                <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Greater Accessibility
                </h2>

                <figure class="mt-10 border-l border-indigo-600 pl-9">
                    <blockquote class="font-semibold text-gray-900">
                        <p>
                            <span class="font-medium">“</span>
                            It's beautiful to see a crypto community that's built for the other 99%.
                            Nxy makes me feel like I finally belong to a place that understands what I care about.
                            <span class="font-medium">”</span>
                        </p>
                    </blockquote>

                    <figcaption class="mt-6 flex gap-x-4">
                        <img
                            class="h-6 w-6 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div class="text-sm leading-6">
                            <strong class="font-semibold text-gray-900">Maria Hill</strong>
                            – Marketing Manager
                        </div>
                    </figcaption>
                </figure>

                <p class="mt-10">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>
            </div>

            <figure class="mt-16">
                <img
                    class="aspect-video rounded-xl bg-gray-50 object-cover"
                    src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=1832&auto=format&fit=crop"
                    alt=""
                />

                <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                    <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    Faucibus commodo massa rhoncus, volutpat.
                </figcaption>
            </figure>

            <div class="mt-16 max-w-2xl">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                    Introduction
                </h2>

                <p class="mt-6">
                    $NXY is a native asset/token that can be minted, in pre-determined quantities, by ANYONE using a NexScript wise contract and Nexa's 100K+ TPS 3rd-generation blockchain.
                </p>

                <p class="mt-8">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>
            </div>

            <div class="mt-16 max-w-2xl">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                    Mainteance Fees (1st 30 days)
                </h2>

                <p class="mt-6">
                    WEEK #1 & #2 will be used to create the 1st $NXY liquidity pool on WiserSwap.
                </p>

                <p class="mt-6">
                    WEEK #3 & #4 will be Airdropped to Twitter / X participants.
                </p>

            </div>

            <div class="mt-16 max-w-2xl">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                    Everything you need to get up and running
                </h2>

                <p class="mt-6">
                    Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis
                    fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
                </p>

                <p class="mt-8">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                </p>
            </div>

            <div class="mt-16 max-w-2xl">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">
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

            <WhitepaperProxy />

            <WhitepaperDisclaimer />

        </div>
    </main>
</template>
