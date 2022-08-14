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
import PortalsStackScreen from './Blank'
import TreasuryStackScreen from './Blank'

/* Add (main) screens. */
import CafeScreen from './Blank'
import PortfolioScreen from './Blank'

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

                    if (route.name === 'Portals') {
                        iconName = focused
                        ? 'ios-apps'
                        : 'ios-apps-outline'
                    } else if (route.name === 'Café') {
                        iconName = focused
                        ? 'ios-cafe'
                        : 'ios-cafe-outline'
                    } else if (route.name === 'Portfolio') {
                        iconName = focused
                        ? 'ios-bar-chart'
                        : 'ios-bar-chart-outline'
                    } else if (route.name === 'Treasury') {
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
                name="Portfolio"
                component={PortfolioScreen}
                options={{
                    headerRight: MenuButton,
                }}
            />

            <Tab.Screen
                name="Treasury"
                component={TreasuryStackScreen}
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

            <Tab.Screen
                name="Portals"
                component={PortalsStackScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
