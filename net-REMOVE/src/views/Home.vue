<template>
    <main class="pb-0 h-full flex flex-col justify-center items-center">
        <img class="w-32 h-32 sm:w-48 sm:h-48" src="@/assets/logo.png">

        <h1 class="my-10 text-4xl sm:text-6xl font-bold text-purple-800 text-center">
            <span class="uppercase">Nxy</span>
            <span class="block sm:inline sm:ml-7 uppercase">Network</span>
        </h1>

        <nav class="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10">
            <a class="mt-0 p-3 sm:p-5 bg-purple-100 border-4 border-purple-300 text-lg sm:text-2xl font-medium text-center rounded-xl" href="https://nxy.wiki" target="_blank">
                Read The Docs
            </a>

            <button @click="setupWeb3" class="mt-0 p-3 sm:p-5 bg-purple-100 border-4 border-purple-300 text-lg sm:text-2xl font-medium text-center rounded-xl">
                Setup Your Web3 Wallet
            </button>

            <button @click="addToken" class="mt-0 p-3 sm:p-5 bg-purple-100 border-4 border-purple-300 text-lg sm:text-2xl font-medium text-center rounded-xl">
                Add $NEX Token
            </button>
        </nav>
    </main>
</template>

<script>
export default {
    components: {
        // HelloWorld
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        mainnetProvider() {
            return {
                chainId: '0x89',
                rpcUrls: [
                    'https://matic-mainnet.chainstacklabs.com',
                    'https://polygon-rpc.com',
                    'https://rpc-mainnet.matic.quiknode.pro',
                ],
                chainName: 'Polygon',
                nativeCurrency: {
                    name: 'Polygon',
                    symbol: 'MATIC',
                    decimals: 18,
                },
                blockExplorerUrls: ['https://polygonscan.com/'],
                iconUrls: [''],
            }
        },

        testnetProvider() {
            return {
                chainId: '0x13881',
                rpcUrls: [
                    'https://matic-mumbai.chainstacklabs.com',
                    'https://rpc-mumbai.maticvigil.com',
                    'https://polygon-testnet.public.blastapi.io',
                ],
                chainName: 'Polygon (Mumbai)',
                nativeCurrency: {
                    name: 'Polygon',
                    symbol: 'MATIC',
                    decimals: 18,
                },
                blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
                iconUrls: [''],
            }
        },
    },
    methods: {
        addToken() {
            alert('The $NEX token HAS NOT been minted yet.')
        },

        async setupWeb3() {
            try {
                await window.ethereum
                    .request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x13881' }],
                    })
                    .catch(err => console.error(err))

                return true
            } catch (err) {
                console.error(err)

                /* Handle error. */
                // NOTE: This error code indicates that the chain has not been added to MetaMask.
                if (err.code === 4902) {
                    try {
                        await window.ethereum
                            .request({
                                method: 'wallet_addEthereumChain',
                                params: [ this.mainnetProvider() ],
                            })
                            .catch(err => console.error(err))

                        return true
                    } catch (err) {
                        console.error(err)
                        return false
                    }
                }

                return false
            }
        },

        async installMainnet() {
            await window.ethereum
                .request({
                    method: 'wallet_addEthereumChain',
                    params: [ this.mainnetProvider ],
                })
                .catch(err => console.error(err))
        },

        async installTestnet() {
            await window.ethereum
                .request({
                    method: 'wallet_addEthereumChain',
                    params: [ this.testnetProvider ],
                })
                .catch(err => console.error(err))
        },

    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
