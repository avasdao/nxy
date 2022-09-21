<template>
    <main class="p-3 sm:p-10 h-screen bg-gradient-to-r from-pink-700 to-purple-700">
        <div class="h-full bg-gray-50 border-4 border-gray-200 rounded-xl">
            <router-view/>

            <Footer />
        </div>
    </main>
</template>

<script>
/* Import components. */
import Footer from '@/components/Footer'

export default {
    components: {
        Footer,
    }
}
</script>

<style>
/*  */
</style>
