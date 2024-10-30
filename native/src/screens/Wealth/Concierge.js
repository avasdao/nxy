/* FIXME HANDLE MISSING GLOBALS IN @NEXAJS/CRYPTO!!! */
if (!process?.version || typeof process?.version === 'undefined') {
    process.version = ''
    console.info('process.version has been INJECTED!', process)
}

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

import moment from 'moment'

import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryLine,
    VictoryTheme
} from 'victory-native'

import store from '../../store'

import Divider from '../../components/Divider'
import ScreenTitle from '../../components/ScreenTitle'
import SupportBar from '../../components/SupportBar'

const chartConfig = {
    // backgroundColor: "#e26a00",
    backgroundGradientFrom: "#f80",
    backgroundGradientTo: "#726",
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}

const userData = [
    { timestamp: 1, earnings: 21.3 },
    { timestamp: 2, earnings: 23.65 },
    { timestamp: 3, earnings: 32.425 },
    { timestamp: 4, earnings: 12.9 },
    { timestamp: 5, earnings: 4.7 },
    { timestamp: 6, earnings: 8.2 },
]

const communityData = [
    { timestamp: 1, earnings: 13.5 },
    { timestamp: 2, earnings: 11.95 },
    { timestamp: 3, earnings: 18.725 },
    { timestamp: 4, earnings: 15.1 },
    { timestamp: 5, earnings: 2.7 },
    { timestamp: 6, earnings: 11.7 },
    { timestamp: 7, earnings: 11.7 },
]

/**
 * Dashboard Screen
 */
const Dashboard = observer(({ navigation }) => {
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
    } = React.useContext(store.Crypto)

    /* Initialize WALLET context. */
    const {
        // balance,
        // balanceDisplay,
        // wallet,
        // createWallet,
        runTest: runWalletTest,
    } = React.useContext(store.Wallet)


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

    /* Handle search query. */
    const _handleQuery = (_query) => {
        console.log('QUERY (props):', _query)
    }

    const _changeEarningTime = async () => {
        if (earningsTime === 'MONTHLY') {
            setEarningsTime('WEEKLY')
        } else if (earningsTime === 'WEEKLY') {
            setEarningsTime('DAILY')
        } else {
            setEarningsTime('MONTHLY')
        }

// FOR DEV PURPOSES ONLY
runCryptoTest()
runWalletTest()
    }

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            className=""
        >
            {/* <ScreenTitle title="Concierge" /> */}

            <SupportBar
                className="my-1"
                onQuery={_handleQuery}
                placeholder="how can i help you?"
            />

            <Pressable
                className="mt-5 mb-5 mx-3 px-3 py-2 border-2 border-pink-800 bg-pink-600 rounded-md"
                onPress={() => alert('More centers are coming soon..')}
            >
                <Text className="text-xl text-pink-100 font-bold">
                    Choose Your App Center
                </Text>

                <View className="ml-3">
                    <Text className="mt-1 text-base text-pink-200 font-bold">
                        &#8618; DeFi Trade Center
                    </Text>

                    <Text className="mt-1 text-base text-pink-200 font-bold">
                        &#8618; GameFi Play Center
                        <Text className="pl-1 text-sm text-pink-300">(coming soon)</Text>
                    </Text>

                    <Text className="mt-1 text-base text-pink-200 font-bold">
                        &#8618; SocialFi Chat Center
                        <Text className="pl-1 text-sm text-pink-300">(coming soon)</Text>
                    </Text>
                </View>
            </Pressable>

        </ScrollView>
    )
})

export default Dashboard
