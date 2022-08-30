/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

/* Add (navigation) stacks. */
import ExplorerStackScreen from './Explorer'
import WealthStackScreen from './Wealth'

/* Add (main) screens. */
import CafeScreen from './Cafe'

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

                    if (route.name === 'Explorer') {
                        iconName = focused
                        ? 'ios-rocket'
                        : 'ios-rocket-outline'
                    } else if (route.name === 'Café') {
                        iconName = focused
                        ? 'ios-cafe'
                        : 'ios-cafe-outline'
                    } else if (route.name === 'Wealth') {
                        iconName = focused
                        ? 'ios-cash'
                        : 'ios-cash-outline'
                    }

                    /* Return (tab) icon. */
                    return <Ionicons
                        name={iconName}
                        size={size}
                        color={color}
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
                name="Explorer"
                component={ExplorerStackScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Café"
                component={CafeScreen}
                options={{
                    headerRight: InfoButton,
                    tabBarBadge: 3,
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
