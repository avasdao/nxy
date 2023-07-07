/**
 * @format
 */

import Bugsnag from '@bugsnag/react-native'
import BugsnagPluginReactNavigation from '@bugsnag/plugin-react-navigation'
Bugsnag.start({
    plugins: [new BugsnagPluginReactNavigation()]
})

import { ampli } from './src/ampli'
ampli.load({ environment: 'production' })

import {
    AppRegistry,
    LogBox,
} from 'react-native'

// in App.js
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
// import { faMugEmpty } from '@fortawesome/free-solid-svg-icons/faMugEmpty'
//
// library.add(fab, faSquareCheck, faMugSaucer)

import App from './src/App'
// import App from './App'

import {name as appName} from './src/app.json'

if (!new class { x }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly');

/* Disable log warnings. */
LogBox.ignoreLogs([
    'Require cycle: node_modules/victory', // https://github.com/FormidableLabs/victory/issues/2230
])

AppRegistry.registerComponent(appName, () => App)
