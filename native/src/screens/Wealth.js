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

import { ethers, utils } from 'ethers'

import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs'

import store from '../store'

import ConciergeScreen from './Wealth/Concierge'
import MarketsScreen from './Wealth/Markets'
import WalletScreen from './Wealth/Wallet'

/* Initialize tab (navigation). */
const Tab = createMaterialTopTabNavigator()

/**
 * Wealth Screen
 */
const Wealth = observer(({navigation}) => {
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
        <Tab.Navigator>
            <Tab.Screen
                name="Markets"
                component={MarketsScreen}
                options={{
                    title: 'Markets'
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    title: 'Wallet'
                }}
            />
            <Tab.Screen
                name="Concierge"
                component={ConciergeScreen}
                options={{
                    title: 'Concierge'
                }}
            />
        </Tab.Navigator>
    )
})

export default Wealth
