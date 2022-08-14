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

import { observer } from 'mobx-react-lite'

import Ionicons from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native'
import tailwind from 'tailwind-rn'

import { ethers, utils, Wallet } from 'ethers'

import store from '../store'

/**
 * Blank Screen
 */
const Blank = observer(({navigation}) => {
    const [hasAgreed, setHasAgreed] = React.useState(false)

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
            style={tailwind('')}
        >
            <View style={tailwind('py-6 items-center')}>
                <View style={tailwind('bg-pink-200 px-3 py-2 rounded-full')}>
                    <Text style={tailwind('text-pink-800 text-xl font-semibold')}>
                        1,337 traders online..
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Do <Text style={tailwind('font-bold')}>YOU</Text> need help?
                </Text>

                <Pressable onPress={() => navigation.goBack()} title="No thanks" />
            </View>

            <View style={tailwind('py-5 bg-gray-50 items-center')}>
                <LottieView
                    style={tailwind('h-48')}
                    source={require('../assets/lottie/couple-talk.json')} autoPlay loop
                />

                <Text style={tailwind('text-pink-500 font-semibold')}>
                    24 Hour Cafe
                </Text>
            </View>

        </ScrollView>
    )
})

export default Blank
