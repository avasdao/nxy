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

/* Set constants. */
const PERSONA_DEFAULT_INDEX = 0

/**
 * Identity Screen
 */
const Identity = observer(({ navigation }) => {
    const [ personaTitle, setPersonaTitle ] = React.useState(false)
    const [ personaMnemonic, setPersonaMnemonic ] = React.useState(false)

    /* Initialize KEYCHAIN context. */
    const {
        generateKeychain,
        getKeychain,
        keychain,
        saveKeychain,
        destroyKeychain,
    } = React.useContext(stores.Keychain)

    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            /* Initialize locals. */
            let persona

            console.log('KEYCHAIN (updated)', keychain)

            /* Validate (decoded) keychain. */
            if (
                keychain &&
                keychain !== 'No credentials stored' &&
                keychain.personas?.length
            ) {
                /* Set persona. */
                persona = keychain.personas[PERSONA_DEFAULT_INDEX]

                /* Set (selected) persona details. */
                setPersonaTitle(persona.title)
                setPersonaMnemonic(persona.mnemonic)
            } else {
                /* Clear persona details. */
                setPersonaTitle(null)
                setPersonaMnemonic(null)
            }
        }

        /* Fetch info. */
        fetchInfo()
    }, [ keychain ])

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            className=""
        >
            <View className="px-2 py-5 flex flex-col gap-4">
                { personaTitle &&
                    <View className="bg-rose-500">
                        <Text className="text-lg font-bold uppercase tracking-widest">
                            My Persona Title
                        </Text>

                        <Text className="text-3xl font-bold">
                            {personaTitle}
                        </Text>
                    </View>
                }

                { personaMnemonic &&
                    <View className="bg-rose-500">
                        <Text className="text-lg font-bold uppercase tracking-widest">
                            Mnemonic
                        </Text>

                        <Text className="text-3xl font-bold">
                            {personaMnemonic}
                        </Text>
                    </View>
                }

                <Pressable
                    className="py-3 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                    onPress={
                        () => navigation.navigate(
                            'PersonaWin', {
                                id: 'abc123'
                            })
                    }
                >
                    <Text className="text-yellow-800 text-lg font-bold uppercase">
                        View My Persona
                    </Text>
                </Pressable>

                <Pressable
                    className="py-3 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                    onPress={ () => navigation.navigate('KeychainWin') }
                >
                    <Text className="text-yellow-800 text-lg font-bold uppercase">
                        View My Keychain
                    </Text>
                </Pressable>

                <Pressable
                    className="py-3 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                    onPress={ async () => {
                        const response = await generateKeychain()
                        console.log('CREATE RESPONSE', response)
                    }}
                >
                    <Text className="text-yellow-800 text-lg font-bold uppercase">
                        Generate Keychain
                    </Text>
                </Pressable>

                <Pressable
                    className="py-3 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                    onPress={ async () => {
                        const response = await getKeychain({ hi: 'there!'})
                        console.log('GET RESPONSE', response)
                    }}
                >
                    <Text className="text-yellow-800 text-lg font-bold uppercase">
                        Get Keychain
                    </Text>
                </Pressable>

                <Pressable
                    className="py-3 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                    onPress={ async () => {
                        const response = await saveKeychain({ hi: 'there!'})
                        console.log('SAVE RESPONSE', response)
                    }}
                >
                    <Text className="text-yellow-800 text-lg font-bold uppercase">
                        Save Keychain
                    </Text>
                </Pressable>

                <Pressable
                    className="py-3 px-3 border-2 border-yellow-500 bg-yellow-300 rounded"
                    onPress={ async () => {
                        const response = await destroyKeychain()
                        console.log('DESTROY RESPONSE', response)
                    }}
                >
                    <Text className="text-yellow-800 text-lg font-bold uppercase">
                        Destroy Keychain
                    </Text>
                </Pressable>
            </View>

        </ScrollView>
    )
})

export default Identity
