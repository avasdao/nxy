<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

const emits = defineEmits(['toggleMenu'])

const displayQuote = computed(() => {
    if (!System.avasUsd) {
        return {
            primary: '$0.00',
            secondary: '0000',
        }
    }

    return {
        primary: '$' + System.avasUsd.toString().split('.')[0] + '.' + System.avasUsd.toString().split('.')[1].slice(0, 2),
        secondary: System.avasUsd.toString().split('.')[1].slice(2, 6),
    }
})

const toggleMenu = () => {
    emits('toggleMenu')
}

onMounted(() => {
    // TODO
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

</script>

<template>
    <header class="absolute inset-x-0 sticky top-0 z-20 bg-white border-b border-gray-100 bg-opacity-90 backdrop-blur-md">
        <nav class="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-3 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink to="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Nxy Cash</span>
                    <img class="w-12 h-auto" src="~/assets/logo.png" alt="" />
                </NuxtLink>
            </div>

            <div class="flex lg:hidden items-center gap-6 sm:gap-8">
                <ClientOnly>
                    <NuxtLink to="/markets" class="flex flex-row items-end gap-1 text-4xl text-rose-500 font-medium">
                        <div class="flex flex-row items-start">
                            <sup class="mt-2 text-xs text-rose-300">mNXY/USD</sup>
                            {{displayQuote.primary}}
                        </div>

                        <span class="text-lg text-rose-300">
                            {{displayQuote.secondary}}
                        </span>
                    </NuxtLink>
                </ClientOnly>

                <button @click="toggleMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-12 h-auto" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            <div class="hidden lg:flex lg:gap-x-12">
                <NuxtLink to="/mining" class="text-xl font-semibold leading-6 text-gray-900">
                    Mining
                </NuxtLink>

                <NuxtLink to="https://nxy.social/download" target="_blank" class="text-xl font-semibold leading-6 text-gray-900">
                    Download
                </NuxtLink>

                <NuxtLink to="/token" class="text-xl font-semibold leading-6 text-gray-900">
                    $NXY
                </NuxtLink>

                <NuxtLink to="/whitepaper" class="text-xl font-semibold leading-6 text-gray-900">
                    Whitepaper
                </NuxtLink>

                <NuxtLink to="/help" class="text-xl font-semibold leading-6 text-gray-900">
                    Help
                </NuxtLink>
            </div>

            <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-10">
                <ClientOnly>
                    <NuxtLink to="/markets" class="flex flex-row items-end gap-1 text-4xl text-rose-500 font-medium">
                        <div class="flex flex-row items-start">
                            <sup class="mt-2 text-xs text-rose-300">mNXY/USD</sup>
                            {{displayQuote.primary}}
                        </div>

                        <span class="text-lg text-rose-300">
                            {{displayQuote.secondary}}
                        </span>
                    </NuxtLink>
                </ClientOnly>

                <button @click="toggleMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-12 h-auto" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>
</template>
