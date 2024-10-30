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

import store from '../../../stores'

/**
 * Blank
 */
const Blank = observer(() => {
    // const [ hasBlank, setHasBlank ] = React.useState(false)

    // const {
    //     firstName,
    //     displayName
    // } = React.useContext(store.Profile)

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
        <View className="flex bg-indigo-200">
            <View className="ml-2">
                <Text className="text-indigo-800 text-sm font-bold uppercase">
                    Favorites
                </Text>
            </View>

            <View className="h-16 flex flex-row space-x-4 px-4 py-2 items-center bg-indigo-200">

                <Pressable
                    onPress={ () => navigation.navigate('WalletWin') }
                    className="h-full w-16 flex justify-center items-center bg-fuchsia-600 px-1 rounded-lg"
                >
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Wallet
                    </Text>
                </Pressable>

                <View className="h-full w-16 flex justify-center items-center bg-fuchsia-600 px-1 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Mining
                    </Text>
                </View>

                <View className="h-full w-16 flex justify-center items-center bg-fuchsia-600 px-1 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Play
                    </Text>
                </View>

                <View className="h-full w-16 flex justify-center items-center bg-fuchsia-600 px-1 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Dating
                    </Text>
                </View>

                <View className="h-full w-16 flex justify-center items-center bg-fuchsia-600 px-1 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Shop
                    </Text>
                </View>

                <View className="h-full w-16 flex justify-center items-center bg-fuchsia-600 px-1 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Learn
                    </Text>
                </View>

            </View>
        </View>
    )
})

export default Blank
