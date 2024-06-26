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

import tailwind from 'tailwind-rn'

import { ethers, utils, Wallet } from 'ethers'

import LottieView from 'lottie-react-native'

import store from '../../store'

import FundListItem from '../../components/FundListItem'
import ScreenTitle from '../../components/ScreenTitle'

/**
 * Funds Manager Screen
 */
const FundsManager = observer(({navigation}) => {
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
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={tailwind('')}
        >
            <ScreenTitle title="Funds Manager" />

            <View style={tailwind('m-3')}>

                <FundListItem
                    basePair={'AVAX'}
                    tradePair={'JOE'}
                    platform={'Trader Joe'}
                    yield={'206.23'}
                    yieldOther={'59.87'}
                    farming={88}
                    fee={'12 per mo'}
                    borrow={'3 days ago'}
                />

                <FundListItem
                    basePair={'AVAX'}
                    tradePair={'USDT'}
                    platform={'Trader Joe'}
                    yield={'206.23'}
                    yieldOther={'59.87'}
                    farming={'95.02'}
                    fee={'156.77'}
                    borrow={'-45.56'}
                />

                <FundListItem
                    basePair={'USDC'}
                    tradePair={'AVAX'}
                    platform={'Trader Joe'}
                    yield={'184.48'}
                    yieldOther={'55.76'}
                    farming={'76.43'}
                    fee={'158.07'}
                    borrow={'-50.02'}
                />

                <FundListItem
                    basePair={'WETH'}
                    tradePair={'AVAX'}
                    platform={'Trader Joe'}
                    yield={'73.01'}
                    yieldOther={'29.86'}
                    farming={'51.78'}
                    fee={'37.08'}
                    borrow={'-15.86'}
                />

                <FundListItem
                    basePair={'AVAX'}
                    tradePair={'DAI'}
                    platform={'Trader Joe'}
                    yield={'95.81'}
                    yieldOther={'36.89'}
                    farming={null}
                    fee={'155.17'}
                    borrow={'-59.36'}
                />

            </View>
        </ScrollView>
    )
})

export default FundsManager
