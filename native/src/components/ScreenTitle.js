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

import store from '../store'

/**
 * Page Title
 */
const PageTitle = observer((_props) => {
    // const [ hasBlank, setHasBlank ] = React.useState(false)

    /* Set title. */
    const title = _props.title

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
        <View className="w-full py-3 bg-blue-700 border-b-2 border-t-2 border-blue-300 items-center">
            <Text className="text-blue-300 text-2xl font-bold">
                {title}
            </Text>
        </View>
    )
})

export default PageTitle
