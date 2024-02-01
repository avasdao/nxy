<script setup>
import { ref } from 'vue'

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'

/* Initialize System. */
const System = useSystemStore()

defineProps({
    msg: String,
})

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })

const count = ref(0)
</script>

<template>
    <main class="flex flex-col gap-4">
        <p>
            Nxy is very proud to introduce the <span class="font-semibold text-rose-900">1st Permissionless Asset Exchange;</span>
            running on Nexa's 100K TPS L1 blockchain.
        </p>

        <p class="">
            Ava's DAO is super busy preparing our new platform for guests, but please don't hesitate to reach out to us at any time using any of the channels listed below:
        </p>

        <div class="mt-2 pl-5 flex flex-col gap-4">
            <!-- <NuxtLink to="https://twitter.com/NEXAdotgames" target="_blank" class="text-xl sm:text-2xl text-blue-500 font-medium hover:underline">
                @NEXAdotgames
            </NuxtLink> -->

            <!-- <NuxtLink to="https://www.reddit.com/r/NexaGames" target="_blank" class="text-xl sm:text-2xl text-blue-500 font-medium hover:underline">
                r/NexaGames
            </NuxtLink> -->

            <NuxtLink to="mailto:support@nexaexchange.com" class="text-xl sm:text-2xl text-blue-500 font-medium hover:underline">
                support@nexaexchange.com
            </NuxtLink>
        </div>
    </main>
</template>
