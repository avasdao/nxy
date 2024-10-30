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
 * Trending
 */
const Trending = observer(() => {
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
        <View className="px-2 flex flex-col gap-y-2 bg-rose-50 border-t-2 border-rose-400">
            <View className="pl-2 w-full">
                <Text className="text-rose-900 opacity-50 text-xs font-bold uppercase tracking-widest">
                    Trending Spaces
                </Text>
            </View>

            <View className="w-full flex flex-row">
                <View className="w-1/2 pr-1 h-auto">
                    <View className="h-20 bg-rose-700 px-3 py-2 rounded-lg border border-rose-400">
                        <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                            Nxy Oasis
                        </Text>
                    </View>
                </View>

                <View className="w-1/2 pl-1 h-auto">
                    <View className="h-20 bg-sky-700 px-3 py-2 rounded-lg border border-sky-400">
                        <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                            Minado
                        </Text>
                    </View>
                </View>
            </View>

            <View className="w-full flex flex-row">
                <View className="w-1/2 pr-1 h-auto">
                    <View className="h-20 bg-fuchsia-700 px-3 py-2 rounded-lg border border-fuchsia-400">
                        <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                            Nifty Art
                        </Text>
                    </View>
                </View>

                <View className="w-1/2 pl-1 h-auto">
                    <View className="h-20 bg-green-600 px-3 py-2 rounded-lg border border-green-400">
                        <Text className="w-3/5 text-base text-lime-100 font-bold tracking-wider">
                            Causes Cash
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
})

export default Trending
