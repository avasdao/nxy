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
    <main class="mt-16 max-w-2xl">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Disclaimer
        </h2>

        <p class="mt-6">
            "Nxy" is a decentralized finance (DeFi) application built on the Nexa blockchain.
            It is NOT a registered financial institution and is not subject to regulation by any government agency.
            By using this product, you understand that you are participating in a decentralized, open-source project and that the developers of the product make no guarantee of its performance or security.
        </p>

        <p class="mt-8">
            Investing in this product carries a high degree of risk, including the risk of losing all or a portion of your investment.
            The product is intended for use by experienced cryptocurrency investors who understand the risks associated with DeFi applications and blockchain-based investments.
            The product does not guarantee any returns and past performance is not indicative of future results.
        </p>

        <p class="mt-8">
            The product is built using smart contracts and is open-source.
            By using this product, you represent that you understand the risks associated with DeFi applications and are willing to assume them.
            While the developers have taken reasonable steps to ensure the security and integrity of the contracts, there is always a risk of bugs, errors, or other issues that could result in the loss of your investment.
        </p>

        <p class="mt-8">
            The product makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the product or the information, products, services, or related graphics contained on the product for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
        </p>
    </main>
</template>
