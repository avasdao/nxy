/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

// import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Add (top-level) screens. */
import InfoScreen from './Info'
import TabsScreen from './Tabs'

/* Add (modal) windows. */
import EarlyPreviewWin from '../windows/EarlyPreview'
import TxManagerWin from '../windows/TxManager'

/* Initialize navigators. */
const HomeStack = createNativeStackNavigator()

/**
 * Home Stack Screen
 */
const Home = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name="Start" component={TabsScreen} />
            <HomeStack.Screen name="Info" component={InfoScreen} />

            <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
                <HomeStack.Screen name="EarlyPreview" component={EarlyPreviewWin} />
                <HomeStack.Screen name="TxManager" component={TxManagerWin} />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}

export default Home
