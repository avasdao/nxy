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

import WalletScreen from './Wealth/FundsManager'
import PortfolioScreen from './Wealth/TradeCenter'

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
                name="Portfolio"
                component={PortfolioScreen}
                options={{
                    title: 'Portfolio'
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
                name="Assets"
                component={WalletScreen}
                options={{
                    title: 'Assets'
                }}
            />
        </Tab.Navigator>
    )
})

export default Wealth
