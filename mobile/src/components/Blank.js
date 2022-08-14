/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { observer } from 'mobx-react-lite'

import Ionicons from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native'
import tailwind from 'tailwind-rn'

import store from '../store'

/**
 * Blank
 */
const Blank = observer(() => {
    // const [hasAgreed, setHasAgreed] = React.useState(false)

    // const {
    //     firstName,
    //     displayName
    // } = React.useContext(store.Profile)

    /* Initialize navigation. */
    const navigation = useNavigation()

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
        <View>
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
        </View>
    )
})

export default Blank
