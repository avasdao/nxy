/**
 * @format
 */

import 'react-native'
import React from 'react'

import App from '../src/App'

// Note: test renderer MUST be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    renderer.create(<App />)
})
