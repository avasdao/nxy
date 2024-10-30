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

import { ethers, utils, Wallet } from '../../libs/ethers-setup.js'

import store from '../../stores'

import Divider from '../../components/Divider'
import ScreenTitle from '../../components/ScreenTitle'

/**
 * Mining Screen
 */
const Mining = observer(({ navigation }) => {
    const [ hasBlank, setHasBlank ] = React.useState(false)

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

            <View className="py-6 items-center">
                <View className="bg-pink-200 px-3 py-2 rounded-full">
                    <Text className="text-pink-800 text-xl font-semibold">
                        MINING CENTER
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Do <Text className="font-bold">YOU</Text> need help?
                </Text>

                <Pressable onPress={ () => navigation.goBack() } title="No thanks" />
            </View>

            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-48"
                    source={ require('../../assets/lottie/couple-talk.json') } autoPlay loop
                />

                <Text className="text-pink-500 font-semibold">
                    Power & Respect
                </Text>
            </View>

        </ScrollView>
    )
})

export default Mining
