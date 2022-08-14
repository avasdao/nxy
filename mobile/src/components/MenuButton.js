/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import tailwind from 'tailwind-rn'

/**
 * Information Center Button
 *
 * Loads a "context-sensitive" information screen.
 */
const MenuButton = () => {
    /* Request navigation. */
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate('Info')}>
            <Ionicons
                style={tailwind('mr-3 text-gray-500')}
                name={'grid'}
                size={32}
            />
        </Pressable>
    )
}

export default MenuButton
