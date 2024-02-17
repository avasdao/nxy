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
    <main class="my-16 flex flex-col gap-8">
        <h2 class="text-4xl font-bold tracking-tight text-gray-700">
            Introduction
        </h2>

        <p class="text-xl leading-9">
            Nxy is a decentralized Social Finance (SoFi) network, built on the Nexa 100K+ TPS (Layer 1) blockchain, providing safe & secure Spaces for Creators to Dream, Build & Profit from their own exclusive token economies.
        </p>

        <h3 class="text-2xl font-light italic">
            How much Power does it take to Change The World?
        </h3>

        <p class="text-xl">
            Well.. it takes just 1.337 kilo-watts (and a few hours of patience) to generate the proof-of-work (PoW) required to mine 10,000 $NXY from ANY web-enabled mobile device.
        </p>

        <h3 class="text-2xl font-light italic">
            And then from there...
        </h3>

        <pre class="">
It costs approx. 1,000 $NXY to register & setup a new Space
It costs approx. 4,000 $NXY to initiate a new Token Economy
It costs approx. 2,500 $NXY to setup an Automated Trading Pool
It costs approx. 2,500 $NXY to setup an Self-managed Marketplace</pre>

        <h3 class="text-2xl font-light italic">
            and then… skies the limit!
        </h3>
</main>
</template>
