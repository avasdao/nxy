/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
    TextInput,
    View,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

/**
 * Search
 *
 * Provides a generic search box.
 */
const Search = (_props) => {
    const [queryText, onChangeQueryText] = React.useState(null)

    /**
     * Handle (Search) Input
     */
    const _handleInput = (_input) => {
        /* Update state. */
        onChangeQueryText(_input)

        /* Validate query length. */
        if (_input.length >= 3) {
            /* Emit query. */
            _props.onQuery(_input)
        }
    }

    return (
        <View
            className="w-full px-3 flex flex-row items-center justify-between bg-gray-800 border-b-2 border-sky-500"
            style={_props.style}
        >
            <View className="flex flex-row items-center">
                <View className="">
                    <Ionicons
                        className="top-2 text-gray-200"
                        name={'globe-outline'}
                        size={28}
                        color={'#acacec'}
                    />
                </View>

                <TextInput
                    className="h-14 ml-3 pb-3 text-xl text-gray-300 font-medium"
                    onChangeText={_handleInput}
                    onFocus={() => alert('Browsing is NOT enabled in this PREVIEW')}
                    value={queryText}
                    placeholder={_props.placeholder}
                    placeholderTextColor="#AAA"
                />
            </View>

            <View className="ml-2">
                <Ionicons
                    className="ml-5 top-2 text-gray-200"
                    name={'qr-code-outline'}
                    size={26}
                    color={'#acacec'}
                />
            </View>
        </View>
    )
}

export default Search
