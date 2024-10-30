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

import { ethers, utils, Wallet } from 'ethers'

import LottieView from 'lottie-react-native'

import store from '../../store'

import FundListItem from '../../components/FundListItem'
import ScreenTitle from '../../components/ScreenTitle'

/**
 * Identity Screen
 */
const Identity = observer(({ navigation }) => {
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
            <Pressable
                className="py-1 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                onPress={
                    () => navigation.navigate(
                        'PersonaWin', {
                            id: 'abc123'
                        })
                }
            >
                <Text className="text-yellow-800 text-sm font-bold uppercase">
                    View My Persona
                </Text>
            </Pressable>

            <Pressable
                className="py-1 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                onPress={ () => navigation.navigate('KeychainWin') }
            >
                <Text className="text-yellow-800 text-sm font-bold uppercase">
                    View My Keychain
                </Text>
            </Pressable>

        </ScrollView>
    )
})

export default Identity
