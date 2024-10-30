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

import { useNavigation } from '@react-navigation/native'

import { observer } from 'mobx-react'

import Ionicons from 'react-native-vector-icons/Ionicons'

import LottieView from 'lottie-react-native'

import store from '../stores'

import Tokens from '../assets/images/tokens'

/**
 * Token Label
 *
 * We need to add the `.e` -suffix to bridged tokens.
 */
const getTokenLabel = (_token) => {
    switch(_token) {
    case 'CRA':
    case 'DAI':
    case 'JOE':
    case 'MIM':
    case 'SLOT':
    case 'THOR':
    case 'TUS':
    case 'USDC':
    case 'USDT':
    case 'WBTC':
    case 'WETH':
        return _token + '.e'
    default:
        return _token
    }
}

/**
 * Fund List Item
 */
const FundListItem = observer((_params) => {
    /* Initialize navigation. */
    const navigation = useNavigation()

    /* Initialize PLATFORM context. */
    // const {
    //     currentFund,
    //     saveCurrentFund,
    // } = React.useContext(store.Fund)

    /* Initialize SYSTEM context. */
    // const {
    //     openPreview,
    // } = React.useContext(store.System)

    /* Set base pair. */
    const basePair = _params.basePair

    /* Set trade pair. */
    const tradePair = _params.tradePair

    /* Set platform. */
    const platform = _params.platform

    /* Set (main) yield. */
    // FIXME: What is the name for this?
    const yieldMain = _params.yield

    /* Set (other) yield. */
    // FIXME: What is the name for this?
    const yieldOther = _params.yieldOther

    /* Set farming. */
    const farming = _params.farming
    // console.log('FARMING', farming);

    /* Set fee. */
    const fee = _params.fee

    /* Set borrow. */
    const borrow = _params.borrow

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

    /**
     * Save Fund
     *
     * Will save the user-selected fund to the Platform context.
     */
    const _saveFund = () => {
        /* Set fund */
        const fund = `${basePair}/${tradePair}`
        // console.log('USER SELECTED POOL', fund)

        /* Save selected fund. */
        saveCurrentFund(fund)

        /* Close modal. */
        navigation.goBack()
    }

    return (
        <Pressable
            onPress={_saveFund}
            className="mt-3 px-3 py-2 flex flex-row justify-between bg-sky-700 border-2 border-sky-300 rounded-xl"
        >
            <View className="flex flex-row items-center">
                <View className="flex mr-2">
                    <View className="bg-gray-50 border-2 border-gray-50 rounded-full overflow-hidden">
                        <Image
                            className="w-6 h-6"
                            source={Tokens[basePair]}
                        />
                    </View>

                    <View className="bg-gray-50 border-2 border-gray-50 rounded-full overflow-hidden relative -mt-1">
                        <Image
                            className="w-6 h-6"
                            source={Tokens[tradePair]}
                        />
                    </View>
                </View>

                <View>
                    <Text className="text-xs font-bold">
                        {platform}
                    </Text>

                    <Text className="text-xs font-bold">
                        {getTokenLabel(basePair)}/{getTokenLabel(tradePair)}
                    </Text>
                </View>
            </View>

            <View>
                <Text className="text-lg font-bold">
                    {yieldMain}%
                </Text>

                <Text className="text-base font-bold line-through">
                    {yieldOther}%
                </Text>
            </View>

            <View>
                <Text className={farming ? 'text-xs font-semibold' : 'hidden'}>
                    # of Subs
                </Text>

                <Text v-if="fee" className={fee ? 'text-xs font-semibold' : 'hidden'}>
                    # of Events
                </Text>

                <Text v-if="borrow" className={borrow ? 'text-xs font-semibold' : 'hidden'}>
                Last Event
                </Text>
            </View>

            <View>
                <Text v-if="farming" className={farming ? 'text-xs font-bold text-right' : 'hidden'}>
                    {farming}
                </Text>

                <Text v-if="fee" className={fee ? 'text-xs font-bold text-right' : 'hidden'}>
                    {fee}
                </Text>

                <Text v-if="borrow" className={borrow ? 'text-xs font-bold text-right' : 'hidden'}>
                    {borrow}
                </Text>
            </View>
        </Pressable>
    )
})

export default FundListItem
