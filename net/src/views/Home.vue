<template>
    <main class="pb-0 h-full flex flex-col justify-center items-center">
        <img class="w-32 h-32 sm:w-48 sm:h-48" src="@/assets/logo.png">

        <h1 class="my-10 text-4xl sm:text-6xl font-bold text-purple-800 text-center">
            <span class="uppercase">Nexaverse</span>
            <span class="block sm:inline sm:ml-7 uppercase">Network</span>
        </h1>

        <nav class="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10">
            <a class="mt-0 p-3 sm:p-5 bg-purple-100 border-4 border-purple-300 text-lg sm:text-2xl font-medium text-center rounded-xl" href="https://docs.nexaverse.org" target="_blank">
                Read The Docs
            </a>

            <button class="mt-0 p-3 sm:p-5 bg-purple-100 border-4 border-purple-300 text-lg sm:text-2xl font-medium text-center rounded-xl">
                Setup Your Web3 Wallet
            </button>

            <button class="mt-0 p-3 sm:p-5 bg-purple-100 border-4 border-purple-300 text-lg sm:text-2xl font-medium text-center rounded-xl">
                Add $NEX Token
            </button>
        </nav>
    </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: {
        // HelloWorld,
    }
}
</script>
