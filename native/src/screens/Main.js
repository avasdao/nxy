/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Add (top-level) screens. */
import InfoScreen from './Info'
import TabsScreen from './Tabs'

/* Add (general) windows. */
import EarlyPreviewWin from '../windows/EarlyPreview'
import SpaceWin from '../windows/Space'
import TxManagerWin from '../windows/TxManager'

/* Add (core) windows. */
import KeychainWin from '../windows/core/Keychain'
import MineWin from '../windows/core/Mine'
import PersonaWin from '../windows/core/Persona'
import ProtectedWin from '../windows/core/Protected'
import WatchWin from '../windows/core/Watch'
import WalletWin from '../windows/core/Wallet'

/* Add (society) windows. */
import FarcasterWin from '../windows/society/Farcaster'
import PixelfedWin from '../windows/society/Pixelfed'

/* Initialize navigators. */
const HomeStack = createNativeStackNavigator()

/**
 * Main Stack Screen
 */
const Main = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name="Start" component={ TabsScreen } />
            <HomeStack.Screen name="Info" component={ InfoScreen } />

            <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
                {/* General UI/UX */}
                <HomeStack.Screen name="EarlyPreview" component={ EarlyPreviewWin } />
                <HomeStack.Screen name="SpaceWin" component={ SpaceWin } />

                {/* Core Spaces */}
                <HomeStack.Screen name="KeychainWin" component={ KeychainWin } />
                <HomeStack.Screen name="MineWin" component={ MineWin } />
                <HomeStack.Screen name="PersonaWin" component={ PersonaWin } />
                <HomeStack.Screen name="ProtectedWin" component={ ProtectedWin } />
                <HomeStack.Screen name="WatchWin" component={ WatchWin } />
                <HomeStack.Screen name="WalletWin" component={ WalletWin } />

                {/* Society */}
                <HomeStack.Screen name="FarcasterWin" component={ FarcasterWin } />
                <HomeStack.Screen name="PixelfedWin" component={ PixelfedWin } />

                {/* Wallet */}
                <HomeStack.Screen name="TxManager" component={ TxManagerWin } />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}

export default Main
