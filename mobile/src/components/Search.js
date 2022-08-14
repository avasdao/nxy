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
import tailwind from 'tailwind-rn'

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
        <View style={[ tailwind('bg-gray-800 border-2 border-gray-800 rounded-lg'), _props.style ]}>
            <TextInput
                style={tailwind('h-14 pl-14 pb-3 text-xl text-gray-300 font-medium')}
                onChangeText={_handleInput}
                onFocus={() => alert('Search is NOT enabled in this DEMO')}
                value={queryText}
                placeholder={_props.placeholder}
                placeholderTextColor="#AAA"
            />

            <Ionicons
                style={tailwind('absolute left-3 top-2 text-gray-500')}
                name={'search'}
                size={36}
            />
        </View>
    )
}

export default Search
