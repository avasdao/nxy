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
            My Pool Stats
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
                        Earnings

                        <small class="text-sm text-yellow-600">
                            Last 24hrs
                        </small>
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">
                        4,491,048.12
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        750K
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

            <div class="order-2 sm:order-1 relative overflow-hidden rounded-lg bg-lime-200 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
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
                        Shares

                        <small class="text-sm text-lime-600">
                            Accepted
                        </small>
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">
                        277
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        32
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

            <div class="order-3 relative overflow-hidden rounded-lg bg-red-200 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                <dt>
                    <div class="absolute rounded-md bg-red-500 p-3">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                            />
                        </svg>
                    </div>

                    <p class="ml-16 truncate text-2xl font-medium text-red-800">
                        Shares

                        <small class="text-sm text-red-600">
                            Rejected
                        </small>
                    </p>
                </dt>

                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">
                        16
                    </p>

                    <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                        <svg class="h-5 w-5 flex-shrink-0 self-center text-red-500" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
                        </svg>
                        <span class="sr-only"> Decrease by </span>
                        2
                    </p>

                    <div class="absolute inset-x-0 bottom-0 bg-red-600 px-4 py-4 sm:px-6">
                        <div class="text-lg">
                            <a href="javascript://" class="font-medium text-red-100 hover:text-amber-300">
                                view details<span class="sr-only"> Total Subscribers stats</span>
                            </a>
                        </div>
                    </div>
                </dd>
            </div>

        </dl>
    </main>
</template>
