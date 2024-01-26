<script setup>
/* Import modules. */
//

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
const Profile = useProfileStore()


/* Initialize constants. */
const POLLING_FREQUENCY = 3000 // 3 seconds

let pollingid

const hasAuth = ref(false)
const isLoading = ref(true)

const nickname = ref(null)
const email = ref(null)
const fullName = ref(null)
const socials = ref(null)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}


/* Handle mounting. */
onMounted(() => {
    /* Setup API polling. */
    // pollForAuth()

    /* Initialize authorization polling. */
    // FIXME How can we implement WebSockets for more efficiency?
    // pollingid = setInterval(pollForAuth, POLLING_FREQUENCY)
})

onBeforeUnmount(() => {
    /* Stop polling. */
    // if (pollingid) {
    //     clearInterval(pollingid)
    // }
})
</script>

<template>
    <main class="px-1 sm:px-3 max-w-5xl mx-auto text-gray-700">
        <h1 class="text-2xl font-medium">
            Profile
        </h1>

        <section class="my-5 flex flex-col gap-8">
            <input
                class="w-full px-3 py-1 text-lg sm:text-xl bg-yellow-200 border-2 border-yellow-400 rounded-md shadow"
                type="text"
                v-model="nickname"
                placeholder="(optional) Enter your nickname"
            />

            <input
                class="w-full px-3 py-1 text-lg sm:text-xl bg-yellow-200 border-2 border-yellow-400 rounded-md shadow"
                type="text"
                v-model="email"
                placeholder="(optional) Enter your email address"
            />

            <input
                class="w-full px-3 py-1 text-lg sm:text-xl bg-yellow-200 border-2 border-yellow-400 rounded-md shadow"
                type="text"
                v-model="fullName"
                placeholder="(optional) Enter your full name"
            />

            <input
                class="w-full px-3 py-1 text-lg sm:text-xl bg-yellow-200 border-2 border-yellow-400 rounded-md shadow"
                type="text"
                v-model="socials"
                placeholder="(optional) Enter your social media"
            />
        </section>

    </main>
</template>
