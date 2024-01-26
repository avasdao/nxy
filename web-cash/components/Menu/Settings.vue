<script setup>
import moment from 'moment'

/* Initialize stores. */
import { useProfileStore } from '@/stores/profile'
import { useSystemStore } from '@/stores/system'
import { useWalletStore } from '@/stores/wallet'
const Profile = useProfileStore()
const System = useSystemStore()
const Wallet = useWalletStore()

const isShowingSaveGamesOptions = ref(false)
const isShowingMnemonic = ref(false)

const currency = ref(null)


const wordList = computed(() => {
    if (!Wallet.mnemonic) {
        return null
    }

    const list = Wallet.mnemonic.split(' ')

    return list
})


const setNEXA = () => {
    if (currency.value !== 'NEXA') {
        currency.value = 'NEXA'

        // amount.value = ((amount.value / props.usd) * 1000000).toFixed(2)
    }
}

const setUSD = () => {
    if (currency.value !== 'USD') {
        currency.value = 'USD'

        // amount.value = ((amount.value * props.usd) / 1000000).toFixed(2)
    }
}

/**
 * Destroy Wallet
 */
 const destroyWallet = () => {
    if (window.confirm(`Are you really sure you want to destroy your wallet?`)) {
        Wallet.destroy()
    }
}

/* Set (default) currency. */
currency.value = 'USD'

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
    <main class="flex flex-col gap-4">

        <section class="pr-1 sm:px-3 flex items-center justify-between gap-4">
            <span class="flex flex-grow flex-col">
                <span class="text-sm font-medium leading-6 text-gray-900" id="availability-label">
                    ENABLE password protection
                </span>

                <span class="text-xs sm:text-sm text-gray-500" id="availability-description">
                    Activate a strong password that will be required before performing ALL sensitive activities.
                </span>
            </span>

            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
            <button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 duration-200 ease-in-out"></span>
            </button>
        </section>

        <section class="pr-1 sm:px-3 flex items-center justify-between gap-4">
            <span class="flex flex-grow flex-col">
                <span class="text-sm font-medium leading-6 text-gray-900" id="availability-label">
                    ENABLE address privacy
                </span>

                <span class="text-xs sm:text-sm text-gray-500" id="availability-description">
                    Auto-select the next <em>(unused)</em> wallet address, to be used for change, before every transaction.
                </span>
            </span>

            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
            <button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 duration-200 ease-in-out"></span>
            </button>
        </section>

        <section class="pr-1 sm:px-3 flex items-center justify-between gap-4">
            <span class="flex flex-grow flex-col">
                <span class="text-sm font-medium leading-6 text-gray-900" id="availability-label">
                    ENABLE transaction privacy
                </span>

                <span class="text-xs sm:text-sm text-gray-500" id="availability-description">
                    Automatically send &amp; manage <em>"un-mixed"</em> coins to Nexa's decentralized CoinJoin pools.
                </span>
            </span>

            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
            <button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
                <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 duration-200 ease-in-out"></span>
            </button>
        </section>

        <div class="mx-5 my-5 border-t border-gray-300" />

        <fieldset v-if="1 === 2">
            <legend class="block text-sm font-medium leading-6 text-gray-900">
                Choose a Theme Color
            </legend>

            <div class="mt-4 flex items-center space-x-3">
    <!--
      Active and Checked: "ring ring-offset-1"
      Not Active and Checked: "ring-2"
    -->
                <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-pink-500">
                    <input type="radio" name="color-choice" value="Pink" class="sr-only" aria-labelledby="color-choice-0-label">
                    <span id="color-choice-0-label" class="sr-only">Pink</span>
                    <span aria-hidden="true" class="h-8 w-8 bg-pink-500 rounded-full border border-black border-opacity-10"></span>
                </label>
    <!--
      Active and Checked: "ring ring-offset-1"
      Not Active and Checked: "ring-2"
    -->
                <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-purple-500">
                    <input type="radio" name="color-choice" value="Purple" class="sr-only" aria-labelledby="color-choice-1-label">
                    <span id="color-choice-1-label" class="sr-only">Purple</span>
                    <span aria-hidden="true" class="h-8 w-8 bg-purple-500 rounded-full border border-black border-opacity-10"></span>
                </label>
    <!--
      Active and Checked: "ring ring-offset-1"
      Not Active and Checked: "ring-2"
    -->
                <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-blue-500">
                    <input type="radio" name="color-choice" value="Blue" class="sr-only" aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only">Blue</span>
                    <span aria-hidden="true" class="h-8 w-8 bg-blue-500 rounded-full border border-black border-opacity-10"></span>
                </label>
    <!--
      Active and Checked: "ring ring-offset-1"
      Not Active and Checked: "ring-2"
    -->
                <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-green-500">
                    <input type="radio" name="color-choice" value="Green" class="sr-only" aria-labelledby="color-choice-3-label">
                    <span id="color-choice-3-label" class="sr-only">Green</span>
                    <span aria-hidden="true" class="h-8 w-8 bg-green-500 rounded-full border border-black border-opacity-10"></span>
                </label>
    <!--
      Active and Checked: "ring ring-offset-1"
      Not Active and Checked: "ring-2"
    -->
                <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-yellow-500">
                    <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-4-label">
                    <span id="color-choice-4-label" class="sr-only">Yellow</span>
                    <span aria-hidden="true" class="h-8 w-8 bg-yellow-500 rounded-full border border-black border-opacity-10"></span>
                </label>
            </div>
        </fieldset>


        <div v-if="1 === 2">
            <label for="combobox" class="block text-sm font-medium leading-6 text-gray-900">
                Save My Games
            </label>

            <div class="relative mt-2">
                <input
                    id="combobox"
                    type="text"
                    class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    role="combobox"
                    aria-controls="options"
                    aria-expanded="false"
                    value="Forever">

                <button type="button" class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>

                <ul v-if="isShowingSaveGamesOptions" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id="options" role="listbox">
    <!--
    Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

    Active: "text-white bg-indigo-600", Not Active: "text-gray-900"
    -->
                    <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option" tabindex="-1">
    <!-- Selected: "font-semibold" -->
                        <span class="block truncate">Daily</span>

    <!--
        Checkmark, only display for selected option.

        Active: "text-white", Not Active: "text-indigo-600"
    -->
                        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </li>

                    <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option" tabindex="-1">
    <!-- Selected: "font-semibold" -->
                        <span class="block truncate">1 Week</span>

    <!--
        Checkmark, only display for selected option.

        Active: "text-white", Not Active: "text-indigo-600"
    -->
                        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </li>

                    <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option" tabindex="-1">
    <!-- Selected: "font-semibold" -->
                        <span class="block truncate">1 Month</span>

    <!--
        Checkmark, only display for selected option.

        Active: "text-white", Not Active: "text-indigo-600"
    -->
                        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </li>

                    <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option" tabindex="-1">
    <!-- Selected: "font-semibold" -->
                        <span class="block truncate font-semibold">Forever</span>

    <!--
        Checkmark, only display for selected option.

        Active: "text-white", Not Active: "text-indigo-600"
    -->
                        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </li>

    <!-- More items... -->
                </ul>
            </div>
        </div>

        <section v-if="Wallet.mnemonic" class="mb-5 px-3 py-2 bg-red-300 border border-red-500 rounded-lg shadow">
            <h2 class="text-2xl text-red-900 font-bold">
                Danger Zone
            </h2>

            <div class="mt-3 rounded-md bg-amber-50 p-4 border border-red-500">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="w-6 h-auto text-red-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"></path>
                        </svg>
                    </div>

                    <div class="ml-3">
                        <h3 class="text-lg font-medium text-red-700">
                            Mnemonic Seed Phrase
                        </h3>
                    </div>
                </div>

                <div class="mt-2 text-sm text-amber-700">
                    <div v-if="isShowingMnemonic">
                        <div class="grid grid-cols-2 gap-3">
                            <h3 v-for="(word, index) of wordList" :key="word" class="text-xl font-medium">
                                {{(index + 1).toString().padStart(2, '0')}}: {{word}}
                            </h3>
                        </div>

                        <p class="mt-2 text-sm text-gray-500 font-medium">
                            Backup the words shown above to a safe place in order to recovery your Wallet.
                        </p>
                    </div>

                    <SkeletonMnemonic v-else />
                </div>

                <div class="mt-4">
                    <div class="-mx-2 -my-1.5 flex">
                        <button v-if="isShowingMnemonic" @click="isShowingMnemonic = false" type="button" class="ml-3 rounded-md bg-amber-50 px-2 py-1.5 text-base font-medium text-red-600 border border-red-500 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-amber-50">
                            Hide Secret
                        </button>

                        <button v-else @click="isShowingMnemonic = true" type="button" class="rounded-md bg-amber-50 px-2 py-1.5 text-base font-medium text-red-600 border border-red-500 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-amber-50">
                            Show Secret
                        </button>
                    </div>
                </div>
            </div>

            <div class="my-8 border-t border-red-400" />

            <div>
                <div @click="destroyWallet" class="w-full px-3 py-1 bg-red-500 border border-red-700 text-center text-2xl text-red-100 font-medium rounded-lg cursor-pointer hover:bg-red-600">
                    Destroy Wallet
                </div>

                <p class="px-3 py-2 text-sm text-center font-bold">
                    BE CAREFUL!
                    THIS CANNOT BE UNDONE.
                    YOU'RE WALLET WILL BE PERMANENTLY ERASED!
                </p>
            </div>
        </section>

    </main>
</template>
