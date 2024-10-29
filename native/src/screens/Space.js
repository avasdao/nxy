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

import { ethers, utils } from 'ethers'

import store from '../store'

import Divider from '../components/Divider'
import AddressBar from '../components/AddressBar'
import SpaceFavorites from '../components/Space/Favorites'

/**
 * Playground Screen
 */
const Playground = observer(({navigation}) => {
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

    /* Handle search query. */
    const _handleQuery = (_query) => {
        console.log('QUERY (props):', _query)
    }

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            className=""
        >
            <AddressBar
                className=""
                onQuery={_handleQuery}
                placeholder="where do you want to go?"
            />

            <SpaceFavorites />

            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-48 w-full"
                    source={require('../assets/lottie/under-construction.json')} autoPlay loop
                />
            </View>

            <View className="flex bg-indigo-200">
                <View className="ml-2">
                    <Text className="text-indigo-800 text-sm font-bold uppercase">
                        My Spaces
                    </Text>
                </View>

                <View className="flex justify-center h-16 w-32 bg-yellow-300 px-3 py-2 rounded-lg">
                    <Text className="text-yellow-800 text-2xl font-bold">
                        Nexa Fun
                    </Text>
                </View>
            </View>

            <View className="flex bg-indigo-200">
                <View className="ml-2">
                    <Text className="text-indigo-800 text-sm font-bold uppercase">
                        More Spaces
                    </Text>
                </View>

                <View className="flex flex-row space-x-4 px-4 py-2 items-center bg-indigo-200">
                    <View className="h-16 w-16 bg-pink-200 px-3 py-2 rounded-lg">

                    </View>

                    <View className="h-16 w-16 bg-pink-200 px-3 py-2 rounded-lg">

                    </View>
                </View>
            </View>

            <View className="py-5 bg-gray-50 items-center">
                <LottieView
                    className="h-32 w-full"
                    source={require('../assets/lottie/broadcast.json')} autoPlay loop
                />
            </View>

            <View className="px-3 flex flex-col gap-y-4 bg-rose-50 border-t-2 border-rose-400">
                <View className="-mb-2 pl-2 w-full">
                    <Text className="-mt-2 text-rose-900 opacity-50 text-xs font-bold uppercase tracking-widest">
                        Browse all
                    </Text>
                </View>

                <View className="w-full flex flex-row">
                    <View className="w-1/2 pr-2 h-auto">
                        <View className="h-28 bg-rose-700 px-3 py-2 rounded-lg">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Nxy Oasis
                            </Text>
                        </View>
                    </View>

                    <View className="w-1/2 pl-2 h-auto">
                        <View className="h-28 bg-sky-700 px-3 py-2 rounded-lg">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Minado
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="w-full flex flex-row">
                    <View className="w-1/2 pr-2 h-auto">
                        <View className="h-28 bg-fuchsia-700 px-3 py-2 rounded-lg">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Nifty Art
                            </Text>
                        </View>
                    </View>

                    <View className="w-1/2 pl-2 h-auto">
                        <View className="h-28 bg-green-600 px-3 py-2 rounded-lg">
                            <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                Causes Cash
                            </Text>
                        </View>
                    </View>
                </View>
            </View>


            <View className="pt-3 bg-rose-50">
                {/* Bottom (scroll) spacer */}
            </View>

        </ScrollView>
    )
})

export default Playground
