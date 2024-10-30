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

import store from '../../store'

/**
 * Society Watching
 */
const SocietyWatching = observer(() => {
    // const [hasAgreed, setHasAgreed] = React.useState(false)

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
                    Watching now...
                </Text>
            </View>

            <View className="h-16 flex flex-row space-x-4 px-4 py-2 items-center bg-indigo-200">

                <Pressable
                    onPress={() => navigation.navigate('FarcasterWin')}
                    className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg"
                >
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Farcaster
                    </Text>
                </Pressable>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Nostr
                    </Text>
                </View>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Bluesky
                    </Text>
                </View>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Mastodon
                    </Text>
                </View>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Gab
                    </Text>
                </View>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Matrix
                    </Text>
                </View>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Steem
                    </Text>
                </View>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Pixelfed
                    </Text>
                </View>

                <View className="h-full w-fit flex justify-center items-center bg-sky-800 px-3 py-2 rounded-lg">
                    <Text className="text-slate-200 text-sm font-medium uppercase">
                        Pixelfed
                    </Text>
                </View>

            </View>
        </View>
    )
})

export default SocietyWatching
