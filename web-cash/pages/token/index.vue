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

const copyToClipboard = () => {
    /* Copy address to clipboard. */
    Clipboard.copy('nexa:tp0jg4h6gj5gcj5rrf9h6xclxstk52dr72yyttmrn6umrjyd6sqqqsy86tk9q')

    alert(`Token ID has been copied to the clipboard.`)
}

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
    <main class="isolate">
        <!-- Hero section -->
        <div class="relative isolate -z-10">
            <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                    <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
                <div
                    class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style="
                        clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%);
                    "
                ></div>
            </div>
            <div class="overflow-hidden">
                <div class="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-32 lg:px-8 lg:pt-16">
                    <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                $NXY Tokenomics
                            </h1>

                            <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Official token of the Nxy social network.
                                $NXY were <span class="text-2xl font-bold text-lime-500 italic">designed to be spent</span> and provide a gateway the countless opportunities that lay ahead for participants in this nascent community.
                            </p>

                            <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                $NXY is distributed via proof-of-work mining, using one of <span class="text-2xl font-bold text-lime-500 italic">over 10+ million algorithms</span> embedded into the Polymorph wise contract.
                            </p>

                            <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                Mining rewards begin at <span class="text-2xl font-bold text-lime-500 italic">50 MILLION in Season One</span> and decrease at the start of each following season.
                                Check out the <NuxtLink to="/whitepaper" class="text-2xl font-bold text-blue-500 hover:underline">Whitepaper</NuxtLink> for more details on the mining algorithm and the rewards schedule.
                            </p>
                        </div>

                        <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                            <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1556741574-0ddb65d14311?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1594404430075-9ca1fd127858?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1634674740441-462149c06ae2?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                                <div class="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1686748548097-d0cdec48a61a?q=80"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content section -->
        <div class="mx-auto -mt-12 max-w-7xl sm:mt-0 xl:-mt-8">

            <div class="px-3 sm:px-10 py-5">
                <h2 class="my-5 text-4xl sm:text-5xl font-medium text-center">
                    Token Details
                </h2>

                <ul class="mt-2 flex flex-col gap-8 leading-6 sm:leading-8">

                    <li class="flex flex-col items-center">
                        <NuxtLink
                            class="px-3 py-2 w-full flex flex-col items-center bg-blue-300 border-2 border-blue-500 rounded-lg shadow hover:bg-blue-200"
                            to="https://telr.exchange/token/5f2456fa44a88c4a831a4b7d1b1f34176a29a3f28845af639eb9b1c88dd40000"
                            target="_blank"
                        >
                            <h3 class="text-sm sm:text-lg text-blue-700 font-medium uppercase">
                                Token ID
                            </h3>

                            <span class="sm:hidden text-lg">
                                tp0jg4h6gj5gc...6sqqqsy86tk9q
                            </span>
                            <span class="hidden sm:block lg:hidden text-lg">
                                tp0jg4h6gj5gcj5rrf9h6xcl...tmrn6umrjyd6sqqqsy86tk9q
                            </span>
                            <span class="hidden lg:block text-xl">
                                nexa:tp0jg4h6gj5gcj5rrf9h6xclxstk52dr72yyttmrn6umrjyd6sqqqsy86tk9q
                            </span>

                        </NuxtLink>

                        <button
                            @click="copyToClipboard"
                            class="w-full block px-3 py-1 text-2xl text-blue-100 font-medium bg-blue-800 border-2 border-blue-400 rounded-md shadow hover:bg-blue-700"
                        >
                            Copy to Clipboard
                        </button>

                    </li>

                    <li>
                        <div class="px-3 py-2 w-full flex flex-col items-center bg-amber-200 border-2 border-amber-400 rounded-lg shadow">
                            <h3 class="text-sm text-amber-700 font-medium uppercase">
                                Max Token Supply
                            </h3>

                            <h3 class="text-3xl font-medium">
                                &lt; 21,000,000,000,000.00
                            </h3>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    </main>
</template>
