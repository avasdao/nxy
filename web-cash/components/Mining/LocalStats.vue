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
    <main>
        <h3 class="text-base font-semibold leading-6 text-gray-900">
            My Local Stats
        </h3>

        <dl class="mt-5 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2">

            <div class="order-1 sm:order-2 relative overflow-hidden rounded-lg bg-yellow-200 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-md bg-yellow-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                        </svg>
                    </div>

                    <p class="ml-16 truncate text-2xl font-medium text-yellow-800">
                        Rewards

                        <small class="text-sm text-yellow-600">
                            Since Feb 4th
                        </small>
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">
                        32,011,294.03
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        1.1M
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-yellow-600 px-4 py-4 sm:px-6">
                        <div class="text-lg">
                            <a href="javascript://" class="font-medium text-yellow-100 hover:text-amber-300">
                                view details<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

            <div class="order-1 sm:order-2 relative overflow-hidden rounded-lg bg-yellow-200 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-md bg-yellow-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                        </svg>
                    </div>

                    <p class="ml-16 truncate text-2xl font-medium text-yellow-800">
                        Profitability

                        <small class="text-sm text-yellow-600">
                            Last 24hrs
                        </small>
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">
                        $0.88 USD
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <!-- <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg> -->
                        <span class="sr-only"> Increased by </span>
                        14.888 mNXY
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-yellow-600 px-4 py-4 sm:px-6">
                        <div class="text-lg">
                            <a href="javascript://" class="font-medium text-yellow-100 hover:text-amber-300">
                                view details<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

            <div class="relative overflow-hidden rounded-lg bg-lime-200 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-md bg-lime-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                        </svg>
                    </div>

                    <p class="ml-16 truncate text-xl font-medium text-gray-500">
                        Current Hashrate
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">71,897</p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        122
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-lime-600 px-4 py-4 sm:px-6">
                        <div class="text-lg">
                            <a href="javascript://" class="font-medium text-lime-100 hover:text-amber-300">
                                view details<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

            <div class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                            />
                        </svg>
                    </div>

                    <p class="ml-16 truncate text-xl font-medium text-gray-500">
                        Average Hashrate
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">58.16%</p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        5.4%
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                        <div class="text-sm">
                            <a href="javascript://" class="font-medium text-indigo-600 hover:text-indigo-500">View all<span class="sr-only"> Avg. Open Rate stats</span></a>
                        </div>
                    </div>
                </dd>
            </div>

            <div class="relative overflow-hidden rounded-lg bg-lime-200 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-md bg-lime-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                        </svg>
                    </div>

                    <p class="ml-16 truncate text-2xl font-medium text-lime-800">
                        # of Miners

                        <small class="text-sm text-lime-600">
                            Online
                        </small>
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">
                        8
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        1
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-lime-600 px-4 py-4 sm:px-6">
                        <div class="text-lg">
                            <a href="javascript://" class="font-medium text-lime-100 hover:text-amber-300">
                                view details<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

        </dl>
    </main>
</template>
