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

import stores from '../../stores'

/**
 * Area 51 Screen
 */
const Area51 = observer(({ navigation }) => {
    const [ hasBlank, setHasBlank ] = React.useState(false)

    /* Initialize WALLET context. */
    const {
        runBugsnagTest: runBugsnagTest,
    } = React.useContext(stores.Area51)

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
            className="bg-slate-100"
        >
            <View className="py-5 flex items-center justify-center">
                <Text className="px-5 text-4xl text-sky-700 font-bold uppercase tracking-widest">
                    Welcome To
                </Text>

                <Text className="px-5 text-7xl text-sky-700 font-light italic">
                    Area 51
                </Text>
            </View>

            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-32 w-full"
                    source={ require('../../assets/lottie/under-construction.json') } autoPlay loop
                />
            </View>

            <View className="my-5 flex flex-col items-center gap-3">
                <Pressable
                    className="w-full py-3 px-5 border border-red-500 bg-red-300 rounded"
                    onPress={ navigation.goBack }
                >
                    <Text className="text-center text-red-800 text-3xl font-bold uppercase">
                        EXIT, GO BACK!
                    </Text>
                </Pressable>
            </View>

            <View className="mt-2 mb-5 mx-5 border border-red-500" />

            <View className="my-10 flex flex-col items-center gap-5">
                <Text className="text-3xl text-red-600 font-bold tracking-tighter">
                    ⚠️ LIVE! Experiments ⚠️
                </Text>
            </View>

            <View className="px-10 flex flex-col items-center gap-5">

                <Pressable
                    className="w-full py-3 px-5 border border-yellow-500 bg-yellow-300 rounded opacity-30"
                    onPress={ runBugsnagTest }
                    disabled
                >
                    <Text className="text-center text-yellow-800 text-xl font-bold uppercase">
                        Bugsnag Test Suite
                    </Text>
                </Pressable>

                <Pressable
                    className="w-full py-3 px-5 border border-yellow-500 bg-yellow-300 rounded"
                    onPress={ runSystemTest }
                >
                    <Text className="text-center text-yellow-800 text-xl font-bold uppercase">
                        System Test Suite
                    </Text>
                </Pressable>

            </View>

            <View className="pt-3" />
        </ScrollView>
    )
})

export default Area51
