<script setup lang="ts">
/* Import modules. */
import { copyToClipboard } from '@nexajs/app'

/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
import { useWalletStore } from '@/stores/wallet'
const Profile = useProfileStore()
const Wallet = useWalletStore()

const uxWalletAddress = computed(() => {
    if (Profile.ux === 'NEXA') {
        return Wallet.address
    }

    if (Profile.ux === 'NXY') {
        return Wallet.getNetwork('NXY').address
    }
})

const enableMetaNet = () => {
    if (confirm('Would you like to take a moment and learn how YOU CAN HELP to enable MetaNet in this wallet?')) {
        window.open('https://causes.cash/c/f900d1b8-1ae0-4e18-8a2f-212631b62562')
    }
}

const clipboardHandler = () => {
    /* Copy address to clipboard. */
    if (copyToClipboard(uxWalletAddress.value)) {
        alert(`[ ${uxWalletAddress.value} ] has been copied to the clipboard.`)
    } else {
        alert(`Oops! Unfortunately, something went wrong.`)
    }
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
    <main>
        <legend class="pl-3 text-xs font-medium tracking-widest text-gray-400 uppercase">
            Choose Your Preferred Experience
        </legend>

        <div class="mt-3 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

            <label @click="Profile.saveUserExperience('NEXA')" aria-label="Nexa Core" aria-description="Last activity was an hour ago to 621 users" class="col-span-2 relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none" :class="[ Profile.ux === 'NEXA' ? 'border-amber-400 ring-2 ring-amber-400' : 'border-gray-300' ]">
                <input type="radio" name="project-type" value="Nexa Core" class="sr-only" />
                <span class="flex flex-1">
                    <span class="w-full flex flex-col">
                        <span class="block text-lg font-medium text-gray-700 tracking-wider">
                            Nexa Core
                        </span>

                        <span class="mt-1 flex items-center text-sm text-gray-500">
                            <!-- Last activity was an hour ago -->
                            There is NO activity recorded yet
                        </span>

                        <span class="mt-3 text-xs font-medium text-gray-500 text-right" :class="[ Profile.ux === 'NEXA' ? '-mr-16' : '' ]">
                            Nexa Layer1 VM
                        </span>
                    </span>
                </span>

                <img v-if="Profile.ux === 'NEXA'" src="@/assets/nexa.svg" class="-mt-3 h-16 w-auto" />
                <!-- <svg class="h-7 w-auto text-amber-600" :class="[ Profile.ux === 'NEXA' ? '' : 'invisible' ]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg> -->

                <span class="pointer-events-none absolute -inset-px rounded-lg" :class="[ Profile.ux === 'NEXA' ? 'border border-amber-600' : 'border-2 border-transparent' ]" aria-hidden="true"></span>
            </label>

            <label @click="Profile.saveUserExperience('NXY')" aria-label="Nxy Supernet" aria-description="Last activity was 2 weeks ago to 1200 users" class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none" :class="[ Profile.ux === 'NXY' ? 'border-rose-400 ring-2 ring-rose-400' : 'border-gray-300' ]">
                <input type="radio" name="project-type" value="Nxy Supernet" class="sr-only" />
                <span class="flex flex-1">
                    <span class="w-full flex flex-col">
                        <span class="block text-lg font-medium text-gray-700 tracking-wider">
                            Nxy Supernet
                        </span>

                        <span class="mt-1 flex items-center text-sm text-gray-500">
                            <!-- Last activity was 4 days ago -->
                            There is NO activity recorded yet
                        </span>

                        <span class="mt-3 text-xs font-medium text-gray-500 text-right" :class="[ Profile.ux === 'NXY' ? '-mr-8' : '' ]">
                            Nexa Layer1+ VM
                        </span>
                    </span>
                </span>

                <img v-if="Profile.ux === 'NXY'" src="@/assets/logo.svg" class="h-8 w-auto" />
                <!-- <svg class="h-7 w-auto text-rose-600" :class="[ Profile.ux === 'NXY' ? '' : 'invisible' ]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg> -->

                <span class="pointer-events-none absolute -inset-px rounded-lg" :class="[ Profile.ux === 'NXY' ? 'border border-rose-600' : 'border-2 border-transparent' ]" aria-hidden="true"></span>
            </label>

            <label @click.prevent="enableMetaNet" aria-label="Nxy MetaNet" aria-description="Last activity was 4 days ago to 2740 users" class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none" :class="[ Profile.ux === 'METANXY' ? 'border-rose-600 ring-2 ring-rose-600' : 'border-gray-300' ]">
                <input type="radio" name="project-type" value="Nxy MetaNet" class="sr-only" />
                <span class="flex flex-1">
                    <span class="w-full flex flex-col">
                        <span class="block text-lg font-medium text-gray-700 tracking-wider">
                            Nxy MetaNet
                        </span>

                        <span class="mt-1 flex items-center text-sm text-gray-500">
                            There is NO activity recorded yet
                        </span>

                        <span class="mt-3 -mr-7 text-xs font-medium text-gray-500 text-right">
                            Ethereum Layer1 VM
                        </span>
                    </span>
                </span>

                <svg class="h-7 w-auto text-rose-600" :class="[ Profile.ux === 'METANXY' ? '' : 'invisible' ]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>

                <span class="pointer-events-none absolute -inset-px rounded-lg" :class="[ Profile.ux === 'METANXY' ? 'border border-rose-600' : 'border-2 border-transparent' ]" aria-hidden="true"></span>
            </label>
        </div>

        <div @click="clipboardHandler" class="cursor-pointer mt-5 px-5 py-2 flex flex-col items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 border-2 border-gray-400 rounded-xl shadow hover:from-gray-600 hover:to-gray-700">
            <h4 class="text-sm text-amber-200 font-bold tracking-widest uppercase">
                My Active Address
            </h4>

            <h4 class="text-amber-50 font-bold text-sm tracking-tight truncate">
                {{uxWalletAddress}}
            </h4>

            <span class="text-amber-200 text-xs font-medium text-medium italic">
                click to copy to clipboard
            </span>
        </div>

    </main>
</template>
