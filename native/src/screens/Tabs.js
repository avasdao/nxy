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
    Text,
    View,
} from 'react-native'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

/* Add (navigation) stacks. */
import SpacesStackScreen from './Spaces'
import WealthStackScreen from './Wealth'

/* Add (main) screens. */
import SocietyScreen from './Society'
import LoungeScreen from './Lounge'

import InfoButton from '../components/InfoButton'
import MenuButton from '../components/MenuButton'

/* Initialize navigators. */
const Tab = createBottomTabNavigator()

/**
 * Bottom Navigation Tabs
 */
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Spaces') {
                        iconName = focused
                        ? 'ios-grid'
                        : 'ios-grid-outline'
                    } else if (route.name === 'Society') {
                        iconName = focused
                        ? 'ios-cafe'
                        : 'ios-cafe-outline'
                    } else if (route.name === 'Wealth') {
                        iconName = focused
                        ? 'ios-cash'
                        : 'ios-cash-outline'
                    }

                    /* Return (tab) icon. */
                    return <Image
                        source={require('../assets/icon.png')}
                        style={{ width: 24, height: 24 }}
                    />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarItemStyle: { paddingBottom: 3 },
            })}
        >
            <Tab.Screen
                name="Wealth"
                component={WealthStackScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Spaces"
                component={SpacesStackScreen}
                options={{
                    headerShown: false,
                    tabBarBadge: 1,
                }}
            />

            <Tab.Screen
                name="Society"
                component={SocietyScreen}
                options={{
                    headerShown: false,
                    // headerRight: InfoButton,
                    // headerTitle: "Society Feeds",
                    tabBarBadge: 3,
                }}
            />

            <Tab.Screen
                name="Lounge"
                component={LoungeScreen}
                options={{
                    headerShown: false,
                    // headerRight: InfoButton,
                    // headerTitle: "Lounge Area",
                    // headerBackground: () => (
                    //     <View intensity={100} style={{ backgroundColor: 'tomato' }} />
                    // ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
