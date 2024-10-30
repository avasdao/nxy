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

import stores from '../../../stores'

/**
 * Blank
 */
const Blank = observer(() => {
    // const [ hasBlank, setHasBlank ] = React.useState(false)

    // const {
    //     firstName,
    //     displayName
    // } = React.useContext(stores.Profile)

    /* Initialize navigation. */
    const navigation = useNavigation()

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
        <View className="flex flex-col bg-rose-50 border-t-2 border-rose-400">
            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-8 w-full"
                    source={ require('../../../assets/lottie/broadcast.json') } autoPlay loop
                />
            </View>

            <View className="px-2 flex flex-col gap-y-2">
                <View className="pl-2 pt-2 w-full">
                    <Text className="text-rose-900 opacity-50 text-xs font-bold uppercase tracking-widest">
                        Protected Spaces
                    </Text>
                </View>

                <View className="w-full flex flex-row">
                    <Pressable
                        onPress={ () => navigation.navigate('WalletWin') }
                        className="w-1/2 pr-1 h-auto"
                    >
                        <View className="h-20 bg-slate-700 px-3 py-2 rounded-lg border border-slate-400">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Wallet
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('MineWin') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-20 bg-slate-500 px-3 py-2 rounded-lg border border-slate-200">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Mine
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <View className="w-full flex flex-row">
                    <Pressable
                        onPress={ () => navigation.navigate('VueWin') }
                        className="w-1/2 pr-1 h-auto"
                    >
                        <View className="h-20 bg-slate-800 px-3 py-2 rounded-lg border border-slate-500">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Vue
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-20 bg-slate-400 px-3 py-2 rounded-lg border border-slate-100">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Meet
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <View className="w-full flex flex-row">
                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pr-1 h-auto"
                    >
                        <View className="h-20 bg-slate-500 px-3 py-2 rounded-lg border border-slate-200">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Swap
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-20 bg-slate-700 px-3 py-2 rounded-lg border border-slate-400">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Fairplay
                            </Text>
                        </View>
                    </Pressable>
                </View>

            </View>

            <Pressable
                onPress={ () => navigation.navigate('ProtectedWin') }
                className="w-full mt-3 mb-1 h-12"
            >
                <View className="mx-auto bg-blue-500 px-5 py-3 rounded-lg border border-blue-300">
                    <Text className="text-xs text-lime-100 font-bold tracking-wider uppercase">
                        View All Protected
                    </Text>
                </View>
            </Pressable>
        </View>
    )
})

export default Blank
