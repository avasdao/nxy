/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { observer } from 'mobx-react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native'

import stores from '../../stores'

/**
 * Blank
 */
const Blank = observer(() => {
    const [earningsTime, setEarningsTime] = React.useState('MONTHLY')

    const [price, setPrice] = React.useState('$6.35')
    const [marketCap, setMarketCap] = React.useState('$1,854,465,619')
    const [circulating, setCirculating] = React.useState('292,187,500')
    const [circulatingPct, setCirculatingPct] = React.useState('29%')

    /* Retreive window width. */
    const width = Dimensions.get('window').width

    /* Initialize CRYPTO context. */
    const {
        runTest: runCryptoTest,
    } = React.useContext(stores.Crypto)

    /* Initialize WALLET context. */
    const {
        // balance,
        // balanceDisplay,
        // wallet,
        // createWallet,
        runTest: runWalletTest,
    } = React.useContext(stores.Wallet)


// FOR DEV PURPOSES ONLY
let wallet

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
        <View className="p-3">
            <View className="px-5 flex flex-row justify-between items-center">
                <Text className="text-gray-800 text-xl font-bold">
                    ApeCoin (APE)
                </Text>

                <Text className="text-gray-800 text-2xl font-bold">
                    {price}
                </Text>
            </View>

            <View className="px-5 flex flex-row justify-between items-center">
                <Text className="text-gray-800 text-base font-bold">
                    Market Cap
                </Text>

                <Text className="text-gray-800 text-lg font-bold">
                    {marketCap}
                </Text>
            </View>

            <View className="px-5 flex flex-row justify-between items-center">
                <Text className="text-gray-800 text-base font-bold">
                    Circulating Supply
                </Text>

                <View className="flex flex-row items-end">
                    <Text className="text-gray-800 text-lg font-bold">
                        {circulating}
                    </Text>

                    <Text className="ml-1 mb-1 text-gray-500 text-xs font-bold">
                        {circulatingPct}
                    </Text>
                </View>
            </View>
        </View>
    )
})

export default Blank
