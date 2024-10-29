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
 * Area 51 Screen
 */
const Area51 = observer(({navigation}) => {
    const [hasAgreed, setHasAgreed] = React.useState(false)

    /* Initialize WALLET context. */
    const {
        runBugsnagTest: runBugsnagTest,
    } = React.useContext(store.Area51)

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
            <Pressable
                className="flex items-center justify-center"
                onPress={() => navigation.goBack()} title="No thanks"
            >
                <Text className="py-5 text-slate-700 text-4xl font-bold">
                    Go <Text className="font-bold">BACK!</Text>
                </Text>
            </Pressable>

            <Text className="px-5 text-5xl text-sky-700 font-bold">
                Area 51
            </Text>

            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-48 w-full"
                    source={require('../../assets/lottie/couple-talk.json')} autoPlay loop
                />

                <Text className="text-2xl text-red-600 font-semibold">
                    Experiments are LIVE!
                </Text>
            </View>

            <View className="px-3">

                <Pressable
                    className="py-2 px-5 border border-yellow-500 bg-yellow-300 rounded"
                    onPress={runBugsnagTest}
                >
                    <Text className="text-yellow-800 text-lg font-bold uppercase">
                        Run Bugsnag Test
                    </Text>
                </Pressable>

            </View>

        </ScrollView>
    )
})

export default Area51
