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

import LottieView from 'lottie-react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ExperimentalScreen from './Lounge/Experimental'
import PersonasScreen from './Lounge/Personas'
import SettingsScreen from './Lounge/Settings'

/* Initialize tab (navigation). */
const Tab = createMaterialTopTabNavigator()

/**
 * Lounge Screen
 */
const Lounge = observer(({navigation}) => {
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
                name="Personas"
                component={PersonasScreen}
                options={{
                    title: 'Personas'
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Settings'
                }}
            />
            <Tab.Screen
                name="Experimental"
                component={ExperimentalScreen}
                options={{
                    title: 'For XP Only'
                }}
            />
        </Tab.Navigator>
    )
})

export default Lounge
