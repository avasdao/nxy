<script setup>
/* Define properties. */
const props = defineProps({
    isShowingMenu: Boolean,
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

const emit = defineEmits(['toggleMenu'])

const curTab = ref(null)
const isFullScreen = ref(false)

const toggleMenu = () => {
    emit('toggleMenu')
}

/* Set default tab. */
curTab.value = 'wallet'

const trackMatomo = () => {
    _paq.push(['setCustomUrl', '/menu'])
    _paq.push(['setDocumentTitle', 'Main Menu'])
    _paq.push(['trackPageView'])
}

onMounted(() => {
    trackMatomo()
})
</script>

<template>
    <main v-if="isShowingMenu" class="relative z-30" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0"></div>

        <div class="fixed inset-0 overflow-hidden bg-sky-900 bg-opacity-50 backdrop-blur-sm">
            <div class="absolute inset-0 overflow-hidden">

                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <!--
                    Slide-over panel, show/hide based on slide-over state.

                    Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-full"
                        To: "translate-x-0"
                    Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-0"
                        To: "translate-x-full"
                    -->
                    <div class="pointer-events-auto w-full max-w-md lg:max-w-5xl">

                        <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl w-[335px] sm:w-[450px]" :class="[ isFullScreen ? 'lg:w-[1000px]' : 'lg:w-[450px]' ]">
                            <div class="px-4 py-6 sm:pl-3 sm:pr-6">

                                <div class="flex items-start justify-between">
                                    <div class="flex flex-row gap-3 items-center">
                                        <div @click="isFullScreen = !isFullScreen" class="hidden lg:block">
                                            <svg v-if="isFullScreen" class="w-8 h-auto rotate-180 cursor-pointer hover:scale-110 hover:text-rose-400 duration-200 ease-in-out" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
                                            </svg>
                                            <svg v-if="!isFullScreen" class="w-8 h-auto rotate-180 cursor-pointer hover:scale-110 hover:text-rose-400 duration-200 ease-in-out" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                                            </svg>
                                        </div>

                                        <h2 id="slide-over-heading" class="text-2xl font-semibold leading-6 text-gray-900">
                                            Main Menu
                                        </h2>
                                    </div>

                                    <div class="ml-3 flex h-7 items-center">
                                        <button @click="toggleMenu" type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                                            <span class="sr-only">Close panel</span>
                                            <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <nav class="lg:hidden mb-3 px-3 sm:px-10 w-full flex flex-col items-center text-xs text-amber-800 font-medium uppercase">
                                <div class="w-full my-0 py-2 flex flex-row gap-x-0.5">
                                    <NuxtLink @click="toggleMenu" to="https://nxy.social/download" target="_blank" class="w-full text-center px-2 py-1 bg-amber-200 border border-amber-300 rounded-tl-lg tracking-widest hover:bg-amber-400">
                                        Download
                                    </NuxtLink>

                                    <NuxtLink @click="toggleMenu" to="/whitepaper" class="w-full text-center px-2 py-1 bg-amber-200 border border-amber-300 tracking-widest hover:bg-amber-400">
                                        Whitepaper
                                    </NuxtLink>

                                    <NuxtLink @click="toggleMenu" to="/token" class="w-full text-center px-2 py-1 bg-amber-200 border border-amber-300 tracking-widest hover:bg-amber-400">
                                        $NXY
                                    </NuxtLink>

                                    <NuxtLink @click="toggleMenu" to="/help" class="w-full text-center px-2 py-1 bg-amber-200 border border-amber-300 rounded-tr-lg tracking-widest hover:bg-amber-400">
                                        Help
                                    </NuxtLink>
                                </div>

                                <NuxtLink @click="toggleMenu" to="/mining" class="-mt-1.5 w-full text-center my-0 px-2 py-1 bg-amber-200 border border-amber-300 rounded-b-lg tracking-widest hover:bg-amber-400 uppercase">
                                    Mining Center
                                </NuxtLink>
                            </nav>

                            <!-- Main -->
                            <div class="pb-1 sm:pb-6">
                                <section>
                                    <div class="block">
                                        <div class="border-b border-gray-200">
                                            <nav class="-mb-px flex" aria-label="Tabs">
                                                <div @click="curTab = 'wallet'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'wallet', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'wallet' }]">
                                                    Wallet
                                                </div>

                                                <div @click="curTab = 'profile'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'profile', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'profile' }]">
                                                    Profile
                                                </div>

                                                <div @click="curTab = 'settings'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'settings', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'settings' }]">
                                                    Settings
                                                </div>

                                                <!-- <div @click="curTab = 'help'" aria-current="page" class="cursor-pointer w-1/3 border-b-2 py-4 px-1 text-center text-sm font-medium" :class="[{ 'border-indigo-500 text-indigo-600': curTab === 'help', 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': curTab !== 'help' }]">
                                                    Help
                                                </div> -->
                                            </nav>
                                        </div>
                                    </div>
                                </section>

                                <div class="mt-3 px-3 sm:mt-4">
                                    <MenuProfile v-if="curTab == 'profile'" class="w-full" :isFullScreen="isFullScreen" />
                                    <MenuSettings v-if="curTab == 'settings'" class="w-full" :isFullScreen="isFullScreen" />
                                    <MenuWallet v-if="curTab == 'wallet'" class="w-full" :isFullScreen="isFullScreen" />
                                    <MenuHelp v-if="curTab == 'help'" class="w-full" :isFullScreen="isFullScreen" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>
