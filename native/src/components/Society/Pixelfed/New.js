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

import store from '../../../store'

/**
 * Blank
 */
const Blank = observer(() => {
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
        <View className="px-2 flex flex-col gap-y-2 bg-rose-50 border-t-2 border-rose-400">
            <View className="pl-2 w-full">
                <Text className="text-rose-900 opacity-50 text-xs font-bold uppercase tracking-widest">
                    Pixelfed: New &amp; Noteworthy
                </Text>
            </View>

            <View className="w-full flex flex-row">
                <Pressable
                    onPress={() => navigation.navigate('PixelfedWin')}
                    className="w-1/2 pr-1 h-auto"
                >
                    <View className="rounded-lg border border-amber-600 overflow-hidden">
                        <Image
                            className="w-full h-48"
                            src="https://images.unsplash.com/photo-1617138278033-ac7e498321da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </View>
                </Pressable>

                <View className="w-1/2 pl-1 h-auto">
                    <View className="rounded-lg border border-fuchsia-500 overflow-hidden">
                        <Image
                            className="w-full h-48"
                            src="https://images.unsplash.com/photo-1729962021385-659b53192b9e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </View>
                </View>
            </View>

            <View className="w-full flex flex-row">
                <View className="w-1/2 pr-1 h-auto">
                    <View className="rounded-lg border border-sky-300 overflow-hidden">
                        <Image
                            className="w-full h-48"
                            src="https://images.unsplash.com/photo-1730121108411-4c6c079204ad?q=80&w=1745&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </View>
                </View>

                <View className="w-1/2 pl-1 h-auto">
                    <View className="rounded-lg border border-slate-300 overflow-hidden">
                        <Image
                            className="w-full h-48"
                            src="https://images.unsplash.com/photo-1729396877734-801af2fa5709?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
})

export default Blank
