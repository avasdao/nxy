/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Button,
    Image,
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
import Discover from '../components/Spaces/Discover'
import Trending from '../components/Spaces/Trending'
import ProtectedGallery from '../components/Spaces/Gallery/Protected'
import FavoritesGallery from '../components/Spaces/Gallery/Favorites'

/**
 * Playground Screen
 */
const Playground = observer(({ navigation }) => {
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

            <FavoritesGallery />

            <Trending />

            <Discover />

            <View className="flex bg-indigo-200">
                <View className="ml-2">
                    <Text className="text-indigo-800 text-sm font-bold uppercase">
                        My Spaces
                    </Text>
                </View>

                <Button
                    onPress={ () => navigation.navigate('TxManager') }
                    title="Open TxManager"
                />

            </View>

            <ProtectedGallery />

            <View className="flex flex-col bg-rose-50 border-t-2 border-rose-400">
                <View className="py-5 bg-gray-50 items-center">
                    <LottieView
                        className="h-8 w-full"
                        source={ require('../assets/lottie/broadcast.json') } autoPlay loop
                    />
                </View>

                <View className="px-2 flex flex-col">
                    <View className="py-2 pl-2 w-full">
                        <Text className="text-rose-900 opacity-50 text-xs font-bold uppercase tracking-widest">
                            Browse All Spaces
                        </Text>
                    </View>

                    <View className="w-full flex flex-row">
                        <Pressable
                            onPress={
                                () => navigation.navigate(
                                    'SpaceWin', {
                                        spaceid: 'apecs', // a.k.a Nametag
                                        subspaceid: 'shomari'
                                    })
                            }
                            className="w-1/2 pr-2 h-auto"
                        >
                            <View className="h-28 bg-rose-700 px-3 py-2 rounded-lg border border-rose-400">
                                <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                    Nxy Oasis
                                </Text>
                            </View>
                        </Pressable>

                        <View className="w-1/2 pl-2 h-auto">
                            <View className="h-28 bg-sky-700 px-3 py-2 rounded-lg border border-sky-400">
                                <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                    Minado
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="w-full flex flex-row">
                        <View className="w-1/2 pr-2 h-auto">
                            <View className="h-28 bg-fuchsia-700 px-3 py-2 rounded-lg border border-fuchsia-400">
                                <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                    Nifty Art
                                </Text>
                            </View>
                        </View>

                        <View className="w-1/2 pl-2 h-auto">
                            <View className="h-28 bg-green-600 px-3 py-2 rounded-lg border border-green-400">
                                <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                                    Causes Cash
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

            <View className="pt-3 bg-rose-50" />
        </ScrollView>
    )
})

export default Playground
