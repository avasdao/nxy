<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

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
    <main class="">
        <div class="mx-auto max-w-7xl">
            <div class="bg-gray-900 py-10 rounded-2xl shadow-md">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center">
                        <div class="sm:flex-auto">
                            <h1 class="text-lg font-semibold leading-6 text-white">
                                Mining Rewards Table
                            </h1>

                            <p class="mt-2 text-sm text-gray-200 italic">
                                The circulating supply of NXL approaches <span class="text-lg text-amber-400 font-medium">21 million</span> over a very long period of time, but the supply will never reach that value.
                                The following table summarizes the maximum possible circulating supply of NXY over time, assuming mining is kept in perfect sync with the underlying Nexa blockchain.
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table class="min-w-full divide-y divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="py-3.5 pl-4 pr-3 text-center text-lg font-semibold text-white sm:pl-0">
                                                Time Since Genesis
                                            </th>

                                            <th scope="col" class="px-3 py-3.5 text-center text-lg font-semibold text-white">
                                                Block Reward
                                            </th>

                                            <th scope="col" class="px-3 py-3.5 text-center text-lg font-semibold text-white">
                                                Total Rewards <em class="text-sm font-medium">(in millions)</em>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-800">
                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                0 d
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                0
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                0
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                1 d
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                50,000,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                36,000
                                                <small class="pl-1 text-amber-400 italic">
                                                    0.17%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                30 d
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                50,000,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                1,080,000
                                                <small class="pl-1 text-amber-400 italic">
                                                    5.14%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                90 d
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                25,000,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                3,240,000
                                                <small class="pl-1 text-amber-400 italic">
                                                    15.43%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                180 d
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                16,670,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                4,860,000
                                                <small class="pl-1 text-amber-400 italic">
                                                    23.14%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                1 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                10,000,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                6,750,000
                                                <small class="pl-1 text-amber-400 italic">
                                                    32.14%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                2 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                5,560,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                8,517,850
                                                <small class="pl-1 text-amber-400 italic">
                                                    40.56%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                5 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                2,380,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                11,162,954
                                                <small class="pl-1 text-amber-400 italic">
                                                    53.16%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                10 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                1,220,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                13,293,493
                                                <small class="pl-1 text-amber-400 italic">
                                                    63.30%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                25 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                500,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                16,471,472
                                                <small class="pl-1 text-amber-400 italic">
                                                    78.44%
                                                </small>
                                            </td>
                                        </tr>
<!--
21 - 186746
22 - 185252
23 - 183955
24 - 182851
25 - 181937
-->

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                50 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                250,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                18,688,829
                                                <small class="pl-1 text-amber-400 italic">
                                                    88.99%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                100 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                125,000
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                19,797,507
                                                <small class="pl-1 text-amber-400 italic">
                                                    94.27%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                1,000 y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                12,500
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                20,783,007
                                                <small class="pl-1 text-amber-400 italic">
                                                    98.97%
                                                </small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-center font-medium text-white sm:pl-0">
                                                50,000+ y
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-xl text-center text-amber-400 font-bold">
                                                &lt; 500
                                            </td>

                                            <td class="whitespace-nowrap px-3 py-4 text-lg text-center text-gray-100 font-medium">
                                                &lt; 21,000,000
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
