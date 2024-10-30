/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* Import modules. */
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

/* Import (local) modules. */
import stores from '../../stores'
import { ethers, utils, Wallet } from '../../libs/ethers-setup.js'
import FundListItem from '../../components/FundListItem'
import ScreenTitle from '../../components/ScreenTitle'

/**
 * Identity Screen
 */
const Identity = observer(({ navigation }) => {
    const [ hasBlank, setHasBlank ] = React.useState(false)

    /* Initialize LOUNGE context. */
    const {
        changeMnemonic,
    } = React.useContext(stores.Lounge)

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
            <Pressable
                className="py-1 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                onPress={
                    () => navigation.navigate(
                        'PersonaWin', {
                            id: 'abc123'
                        })
                }
            >
                <Text className="text-yellow-800 text-sm font-bold uppercase">
                    View My Persona
                </Text>
            </Pressable>

            <Pressable
                className="py-1 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                onPress={ () => navigation.navigate('KeychainWin') }
            >
                <Text className="text-yellow-800 text-sm font-bold uppercase">
                    View My Keychain
                </Text>
            </Pressable>

            <Pressable
                className="py-1 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                onPress={ changeMnemonic }
            >
                <Text className="text-yellow-800 text-sm font-bold uppercase">
                    Change Mnemonic
                </Text>
            </Pressable>

        </ScrollView>
    )
})

export default Identity
