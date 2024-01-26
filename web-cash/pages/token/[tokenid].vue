<script setup>
/* Initialize route. */
const route = useRoute()

/* Set (route) path. */
const tokenid = route?.params.tokenid

/* Set (token display) target. */
const target = `https://nexa.exchange/token/${tokenid}`

/* Validate client. */
if (process.client) {
    // NOTE: `window` is ONLY available on client.
    window.location.replace(target)
}
</script>

<template>
    <main class="p-10">
        <h1 class="text-rose-500 text-2xl font-medium tracking-widest">
            redirecting...
        </h1>
    </main>
</template>
