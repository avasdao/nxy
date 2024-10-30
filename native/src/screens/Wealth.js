/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import { observer } from 'mobx-react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ConciergeScreen from './Wealth/Concierge'
import MarketsScreen from './Wealth/Markets'
import PortfolioScreen from './Wealth/Portfolio'

/* Initialize tab (navigation). */
const Tab = createMaterialTopTabNavigator()

/**
 * Wealth Screen
 */
const Wealth = observer(({ navigation }) => {
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
                name="Portfolio"
                component={PortfolioScreen}
                options={{
                    title: 'Portfolio'
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
