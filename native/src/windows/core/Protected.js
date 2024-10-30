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
import LottieView from 'lottie-react-native'

import store from '../../stores'

import Divider from '../../components/Divider'
import ScreenTitle from '../../components/ScreenTitle'

/**
 * Blank Screen
 */
const Blank = observer(({ navigation }) => {
    const [ hasBlank, setHasBlank ] = React.useState(false)

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
            className=""
        >
            <View className="bg-gray-800 items-end py-1">
                <Pressable onPress={ () => navigation.goBack() }>
                    <Ionicons
                        className="mr-2 text-gray-300"
                        name={ 'close-outline' }
                        size={ 40 }
                    />
                </Pressable>
            </View>

            <View className="px-2 flex flex-col gap-y-2 bg-rose-50">
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
                        <View className="h-32 bg-slate-700 px-3 py-2 rounded-lg border border-slate-400">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Wallet
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('MineWin') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-32 bg-slate-500 px-3 py-2 rounded-lg border border-slate-200">
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
                        <View className="h-32 bg-slate-800 px-3 py-2 rounded-lg border border-slate-500">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Vue
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-32 bg-slate-400 px-3 py-2 rounded-lg border border-slate-100">
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
                        <View className="h-32 bg-slate-500 px-3 py-2 rounded-lg border border-slate-200">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Swap
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-32 bg-slate-700 px-3 py-2 rounded-lg border border-slate-400">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Fairplay
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <View className="w-full flex flex-row">
                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pr-1 h-auto"
                    >
                        <View className="h-32 bg-slate-800 px-3 py-2 rounded-lg border border-slate-500">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Arcade
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-32 bg-slate-500 px-3 py-2 rounded-lg border border-slate-200">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Trade
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <View className="w-full flex flex-row">
                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pr-1 h-auto"
                    >
                        <View className="h-32 bg-slate-400 px-3 py-2 rounded-lg border border-slate-100">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Listen
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-32 bg-slate-900 px-3 py-2 rounded-lg border border-slate-600">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Safu
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <View className="w-full flex flex-row">
                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pr-1 h-auto"
                    >
                        <View className="h-32 bg-slate-800 px-3 py-2 rounded-lg border border-slate-500">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Shop
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-32 bg-slate-500 px-3 py-2 rounded-lg border border-slate-200">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Edu
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <View className="w-full flex flex-row">
                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pr-1 h-auto"
                    >
                        <View className="h-32 bg-slate-900 px-3 py-2 rounded-lg border border-slate-600">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Donate
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={ () => navigation.navigate('EarlyPreview') }
                        className="w-1/2 pl-1 h-auto"
                    >
                        <View className="h-32 bg-slate-900 px-3 py-2 rounded-lg border border-slate-600">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                TBD
                            </Text>
                        </View>
                    </Pressable>
                </View>

            </View>

            <View className="pt-3 bg-rose-50" />
        </ScrollView>
    )
})

export default Blank
