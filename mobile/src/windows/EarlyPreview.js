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

import { observer } from 'mobx-react-lite'

import Ionicons from 'react-native-vector-icons/Ionicons'

import tailwind from 'tailwind-rn'

import LottieView from 'lottie-react-native'

/**
 * Open Web Home
 */
const openWebHome = async () => {
    /* Set URL. */
    const url = 'https://nexaverse.org'

    /* Open URL. */
    await Linking.openURL(url)
}

/**
 * Early Preview
 */
const EarlyPreview = observer(({navigation}) => {
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
            <View style={tailwind('bg-gray-800 items-end py-1')}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons
                        style={tailwind('mr-2 text-gray-300')}
                        name={'close-outline'}
                        size={40}
                    />
                </Pressable>
            </View>

            <View style={tailwind('p-5')}>
                <Text style={tailwind('text-2xl text-purple-700 text-center')}>
                    Welcome to a very <Text style={tailwind('font-bold')}>EARLY (PREVIEW)</Text> of Ava GoGo: Premier Social DeFi Community
                </Text>

                <Text style={tailwind('px-7 mt-5 text-xl font-bold text-center')}>
                    Oops! That feature you selected isn't quite ready yet.
                </Text>

                <Text style={tailwind('mt-5 text-base font-semibold text-center')}>
                    We <Text style={tailwind('font-bold')}>LOVE</Text> to hear from you.
                    Don't hesitate to reach out to our team on social media to express which features are <Text style={tailwind('font-bold')}>MOST</Text> important to <Text style={tailwind('font-bold')}>YOU.</Text>
                </Text>
            </View>

            <View style={tailwind('-mt-5 items-center')}>
                <LottieView
                    style={tailwind('h-48')}
                    source={require('../assets/lottie/under-construction.json')} autoPlay loop
                />

                <Text style={tailwind('-mt-3 mb-3 text-purple-500 text-sm font-bold')}>
                    OUR TEAM IS VERY HARD @WORK
                </Text>
            </View>

            <View style={tailwind('mt-5 items-center')}>
                <Pressable
                    onPress={openWebHome}
                    style={tailwind('px-5 py-2 bg-blue-300 border-2 border-blue-500 rounded-xl')}
                >
                    <Text style={tailwind('text-gray-600 text-xl font-bold text-center')}>
                        click here to visit our website
                    </Text>

                    <Text style={tailwind('text-red-700 text-2xl font-medium text-center')}>
                        AvaGoGo.io
                    </Text>
                </Pressable>
            </View>

        </ScrollView>
    )
})

export default EarlyPreview
