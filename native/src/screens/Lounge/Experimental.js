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

import LottieView from 'lottie-react-native'

import store from '../../store'

/**
 * Lounge Screen
 */
const Lounge = observer(({navigation}) => {
    const [hasAgreed, setHasAgreed] = React.useState(false)

    /* Initialize WALLET context. */
    const {
        runTest: runLoungeTest,
    } = React.useContext(store.Lounge)

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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    Do <Text className="font-bold">YOU</Text> need help?
                </Text>

                <Pressable onPress={() => navigation.goBack()} title="No thanks" />
            </View>

            <Text className="text-4xl text-pink-500">
                MY LOUNGE
            </Text>

            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-48 w-full"
                    source={require('../../assets/lottie/couple-talk.json')} autoPlay loop
                />

                <Text className="text-pink-500 font-semibold">
                    24 Hour Lounge
                </Text>
            </View>

            <Pressable
                className="py-1 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                onPress={runLoungeTest}
            >
                <Text className="text-yellow-800 text-sm font-bold uppercase">
                    Run Lounge Test!
                </Text>
            </Pressable>

        </ScrollView>
    )
})

export default Lounge
