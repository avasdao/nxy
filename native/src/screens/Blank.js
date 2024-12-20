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

/* Import (local) modules. */
import stores from '../../stores'
import { ethers, utils, Wallet } from '../../libs/ethers-setup.js'

/**
 * Blank Screen
 */
const Blank = observer(({ navigation }) => {
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
            <View className="py-6 items-center">
                <View className="bg-pink-200 px-3 py-2 rounded-full">
                    <Text className="text-pink-800 text-xl font-semibold">
                        1,337 players online..
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Do <Text className="font-bold">YOU</Text> need help?
                </Text>

                <Pressable onPress={() => navigation.goBack()} title="No thanks" />
            </View>

            <Text className="text-4xl text-pink-500">
                NEW TAILWIND PLUGIN
            </Text>

            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-48"
                    source={require('../assets/lottie/couple-talk.json')} autoPlay loop
                />

                <Text className="text-pink-500 font-semibold">
                    Power & Respect
                </Text>
            </View>

        </ScrollView>
    )
})

export default Blank
