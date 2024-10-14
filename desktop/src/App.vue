<script setup lang="ts">
/* Import modules. */
import Greet from "./components/Greet.vue"
</script>

<template>
    <main class="w-screen h-screen bg-gradient-to-r from-fuchsia-100 to-fuchsia-200">
        <section class="max-w-5xl py-20 mx-auto flex flex-col gap-6">
            <h1 class="text-5xl text-fuchsia-600 font-bold tracking-widest">
                Welcome to Nxy!
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquam quae iusto, sunt quia qui obcaecati sit laborum ad nemo molestias laboriosam commodi, eveniet explicabo vel quis autem cum debitis?
            </p>

            <Greet />
        </section>
    </main>
</template>

<style scoped>
/* TBD... */
</style>
