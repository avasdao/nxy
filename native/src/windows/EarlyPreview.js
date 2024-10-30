/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Linking,
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

/**
 * Open Web Home
 */
const openWebHome = async () => {
    /* Set URL. */
    const url = 'https://nxy.social'

    /* Open URL. */
    await Linking.openURL(url)
}

/**
 * Early Preview
 */
const EarlyPreview = observer(({ navigation }) => {
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
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons
                        className="mr-2 text-gray-300"
                        name={'close-outline'}
                        size={40}
                    />
                </Pressable>
            </View>

            <View className="p-5">
                <Text className="text-2xl text-purple-700 text-center">
                    Welcome to a very <Text className="font-bold">EARLY (PREVIEW)</Text> of Nxy: The Oasis
                </Text>

                <Text className="px-7 mt-5 text-slate-500 text-xl font-bold text-center">
                    Oops! That feature you selected isn't quite ready yet.
                </Text>
            </View>

            <View className="-mt-5 items-center">
                <LottieView
                    className="h-48 w-full"
                    source={require('../assets/lottie/under-construction.json')} autoPlay loop
                />

                <View className="-mt-3 mb-3 px-5">
                    <Text className="text-rose-500 text-lg text-center font-light tracking-tighter italic">
                        OUR TEAM IS WORKING AROUND THE CLOCK TO DELIVER YOU THE BEST CRYPTO EXPERIENCE (CX) YOU'VE EVER HAD
                    </Text>
                </View>
            </View>

            <View className="w-full mt-5">
                <Pressable
                    onPress={openWebHome}
                    className="px-5 py-3 bg-rose-100 border-y-2 border-rose-300"
                >
                    <Text className="text-rose-600 text-xl font-bold text-center">
                        Support Nexa Builders 💗
                    </Text>

                    <Text className="text-sky-700 text-2xl font-bold text-center tracking-tighter">
                        Click &amp; Donate To MetaNet
                    </Text>
                </Pressable>
            </View>

            <View className="p-5">
                <Text className="mt-5 text-slate-500 text-base font-semibold text-center">
                    We <Text className="font-bold">LOVE</Text> to hear from you.
                    Don't hesitate to reach out to our team on social media to express which features are <Text className="font-bold">MOST</Text> important to <Text className="font-bold">YOU.</Text>
                </Text>
            </View>

            <View className="w-full mt-5">
                <Pressable
                    onPress={openWebHome}
                    className="px-5 py-3 bg-blue-600 border-2 border-blue-500"
                >
                    <Text className="text-indigo-100 text-xl font-bold text-center">
                        click here to visit our website
                    </Text>

                    <Text className="text-red-200 text-2xl font-medium text-center">
                        NXY.social
                    </Text>
                </Pressable>
            </View>

            <View className="pt-5" />
        </ScrollView>
    )
})

export default EarlyPreview
