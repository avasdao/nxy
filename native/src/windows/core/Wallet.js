/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { observer } from 'mobx-react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native'

import { ethers, utils, Wallet as EvmWallet } from '../../libs/ethers-setup.js'

import stores from '../../stores'

import Divider from '../../components/Divider'
import ScreenTitle from '../../components/ScreenTitle'

/**
 * Wallet Screen
 */
const Wallet = observer(({ navigation }) => {
    const [ hasBlank, setHasBlank ] = React.useState(false)

    /* Initialize SYSTEM context. */
    const {
        runTest: runSystemTest,
    } = React.useContext(stores.System)

    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            //
        }

        /* Fetch info. */
        fetchInfo()
    }, [])

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            className=""
        >
            <View className="bg-gray-800 items-end py-1">
                <Pressable onPress={ () => navigation.goBack() }>
                    <Ionicons
                        className="mr-2 text-gray-300"
                        name={ 'close-outline' }
                        size={ 40 }
                    />
                </Pressable>
            </View>

            <View className="w-full">
                <View className="py-6 items-center">
                    <Text className="text-pink-800 text-4xl font-light italic">
                        My Wallet
                    </Text>
                </View>

                <View className="px-3 pt-1 pb-3 flex flex-col gap-y-2 bg-amber-50 border-y border-amber-200">
                    <Text className="text-center text-amber-900 text-xs font-medium tracking-widest uppercase">
                        Primary Accounts / Addresses
                    </Text>

                    <View className="px-2 pb-1 bg-amber-100 border border-amber-300 rounded">
                        <Text className="text-amber-800 text-lg font-bold tracking-tighter">
                            0xblahblahblah
                        </Text>

                        <View className="flex flex-row justify-between">
                            <Text className="text-amber-700 text-xs uppercase tracking-wider">
                                0.0 | $0.00
                            </Text>

                            <Text className="text-amber-700 text-xs uppercase tracking-wider">
                                Nxy Oasis • L1
                            </Text>
                        </View>
                    </View>

                    <View className="px-2 pb-1 bg-amber-100 border border-amber-300 rounded">
                        <Text className="text-amber-800 text-lg font-bold tracking-tighter">
                            nxy:jahjahjahjah
                        </Text>

                        <View className="flex flex-row justify-between">
                            <Text className="text-amber-700 text-xs uppercase tracking-wider">
                                0.0 | $0.00
                            </Text>

                            <Text className="text-amber-700 text-xs uppercase tracking-wider">
                                Nxy Supernet • L1+
                            </Text>
                        </View>
                    </View>

                    <View className="px-2 pb-1 bg-amber-100 border border-amber-300 rounded">
                        <Text className="text-amber-800 text-lg font-bold tracking-tighter">
                            0xrahrahrahrah
                        </Text>

                        <View className="flex flex-row justify-between">
                            <Text className="text-amber-700 text-xs uppercase tracking-wider">
                                0.0 | $0.00
                            </Text>

                            <Text className="text-amber-700 text-xs uppercase tracking-wider">
                                Kingdom Of Nxy • L2
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="py-5 bg-gray-50 items-center">
                    <LottieView
                        className="w-full h-48"
                        source={ require('../../assets/lottie/couple-talk.json') } autoPlay loop
                    />
                </View>

                <Pressable
                    onPress={ () => navigation.navigate('TxManager') }
                    className="px-5 py-4 bg-red-400"
                >
                    <Text className="text-red-100 text-3xl font-medium">
                        Open TxManager
                    </Text>
                </Pressable>
            </View>

        </ScrollView>
    )
})

export default Wallet
