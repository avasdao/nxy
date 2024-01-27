<script setup lang="ts">
useHead({
    title: `Palms d'Iamante — Nxy Cash`,
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
        <main class="overflow-hidden bg-white py-16">
        <div class="mx-auto max-w-7xl px-3 lg:flex lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">

                    <div class="hidden sm:mt-16 sm:flex lg:mt-8">
                        <div class="relative rounded-full px-3 py-1 text-lg leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            We're opening very soon

                            <NuxtLink to="/bootstrap" class="pl-3 whitespace-nowrap font-semibold text-indigo-600">
                                <span class="absolute inset-0" aria-hidden="true"></span>Help us Bootstrap <span aria-hidden="true">&rarr;</span>
                            </NuxtLink>
                        </div>
                    </div>

                    <h2 class="mt-5 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                        Palms d'Iamante
                    </h2>

                    <p class="mt-6 text-xl leading-8 text-gray-600">
                        Our chef cooks the two fingers thick bone-in piece of meat right in front of you, so you can have a feast for your eyes, as well as for your taste buds.
                    </p>

                    <p class="mt-6 text-base leading-7 text-gray-600">
                        Our team is working very hard to open this Stakehouse location for the Nexican community ASAP.
                        Please be patient and we promise that your next <span class="text-indigo-500 font-medium">Payouts Experience</span> will be well worth the wait.
                    </p>

                    <div class="mt-10 flex">
                        <NuxtLink to="/bootstrap" class="rounded-xl bg-indigo-600 px-5 py-5 text-3xl lg:text-4xl font-semibold text-indigo-50 border-4 border-indigo-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Do you want to help us Bootstrap Palms?

                            <span class="mt-2 block text-sm">
                                Every NEXA you contribute to our Bootstrap campaigns goes towards building a stronger DAO community.
                            </span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                    <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <img
                            src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                            class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>
                    <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                        <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                            <img
                                src="https://images.unsplash.com/photo-1606677661991-446cea8ee182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                                alt=""
                                class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                            <img
                                src="https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                                alt=""
                                class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                            <img
                                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                                alt=""
                                class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
