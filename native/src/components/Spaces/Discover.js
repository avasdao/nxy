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
 * Discover
 */
const Discover = observer(() => {
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
        <View className="px-3 flex flex-col gap-y-4 bg-rose-50 border-t-2 border-rose-400">
            <View className="-mb-2 pl-2 w-full">
                <Text className="-mt-2 text-rose-900 opacity-50 text-xs font-bold uppercase tracking-widest">
                    Discover New Spaces
                </Text>
            </View>

            <View className="w-full flex flex-row">
                <View className="w-1/3 pr-1 h-auto">
                    <View className="rounded-lg border border-slate-300 overflow-hidden">
                        <Image
                            className="w-full h-48"
                            src="https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </View>
                </View>

                <View className="w-1/3 px-1 h-auto">
                    <View className="rounded-lg border border-slate-300 overflow-hidden">
                        <Image
                            className="w-full h-48"
                            src="https://images.unsplash.com/photo-1730136804523-d43801043710?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </View>
                </View>

                <View className="w-1/3 pl-1 h-auto">
                    <View className="rounded-lg border border-slate-300 overflow-hidden">
                        <Image
                            className="w-full h-48"
                            src="https://images.unsplash.com/photo-1729731322182-781ba8d93af2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
})

export default Discover
