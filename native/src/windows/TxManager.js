/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Button,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { observer } from 'mobx-react'

import { useNavigationContainerRef } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import LottieView from 'lottie-react-native'

import { ethers, utils, Wallet } from '../libs/ethers-setup.js'

import moment from 'moment'

import store from '../stores'

/**
 * Transaction Manager Screen
 */
const TxManager = observer(({ navigation }) => {
    // const [balance, setBalance] = React.useState(0)

    /* Initialize PROFILE context. */
    const {
        balance,
        balanceDisplay,
        wallet,
        initWallet,
    } = React.useContext(store.Wallet)

    /* Initialize SYSTEM context. */
    const {
        price,
        quote,
    } = React.useContext(store.System)

    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            // console.log('\nTX MANAGER (saved wallet):', wallet)

            /* Validate wallet. */
            if (!wallet) {
                /* Create new wallet. */
                const returnedWallet = await initWallet()
                // console.log('\nTX MANAGER (new wallet)', returnedWallet)
            }
        }

        /* Fetch info. */
        fetchInfo()

    }, [balance, wallet])

    /**
     * Start Transaction
     */
    const startTx = async () => {
        const contractAddress = '0x60ae616a2155ee3d9a68541ba4544862310933d4' // Trader Joe: Router
        // const contractAddress = '0xe54ca86531e17ef3616d22ca28b0d458b6c89106' // Pangolin: Router
        // const contractAddress = '0x5c0401e81bc07ca70fad469b451682c0d747ef1c' // Benqi Finance: qiAVAX Token
        // const contractAddress = '0x486af39519b4dc9a7fccd318217352830e8ad9b4' // Benqi Finance: Comptroller
        // const contractAddress = '0x21c630b7824d15bcdfeefa73cbd4e49cafe9f836' // Alpha Homora v2: Router
        // const contractAddress = '0xc4729e56b831d74bbc18797e0e17a295fa77488c' // Yield Yak: Router
        // console.log('\nCONTRACT ADDR', contractAddress)

        const abi = require('../assets/abis/trader-joe/Router')
        // console.log('\nABI', abi)

        /* Initialize contract. */
        const contract = new ethers.Contract(contractAddress, abi, wallet)
        // console.log('\nCONTRACT', contract);

        /* Call contract. */
        const tx = await contract.swapExactAVAXForTokens(
                '0x00000000000000000000000000000000000e1de7',
                ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7','0xc7198437980c041c805a1edcba50c1ce5db95118'],
                '0xE2266286745fEFdDeC42D895abC85a33710a2078',
                '0x0000000000000000000000000000017EB321C590',
                {
                    gasPrice: '0x6FC23AC00',
                    gasLimit: 300000,
                    // value: '0x13B7B21280E0000', // 0.0888
                    // value: '0x1F8C501D9B0000',  // 0.0888
                    value: '0x4BFFE92109000',  // 0.01337
                }
        )
        .catch(err => console.error(err))

        /* Validate transaction . */
        if (tx) {
            // wait for the transaction to be mined
            const receipt = await tx.wait()
                .catch(err => console.error(err))
            console.log('\nRECEIPT', receipt)
        } else {
            alert('Oops! Something went wrong with the last transaction.')
        }

    }

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            className=""
        >
            <View className="bg-gray-800 items-end py-1">
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons
                        className="mr-2 text-gray-300"
                        name={'close-outline'}
                        size={40}
                    />
                </Pressable>
            </View>

            <View className="m-5 items-center">
                <Text className="text-gray-400 text-3xl font-semibold">
                    Transaction Manager
                </Text>
            </View>

            <View className="hidden py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-48"
                    source={require('../assets/lottie/customer-support.json')} autoPlay loop
                />

                <Text className="text-pink-500 font-semibold">
                    24 Customer Support Center
                </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text className="text-2xl font-medium text-purple-500">
                    Balance Display: {balanceDisplay}
                </Text>

                <Text className="text-2xl font-medium text-purple-500">
                    AVAX Price: {price('AVAX')}
                </Text>

                <Button onPress={() => startTx()} title="Run Test" />
            </View>

        </ScrollView>
    )
})

export default TxManager
