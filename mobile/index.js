/**
 * @format
 */

 import Bugsnag from '@bugsnag/react-native'
 import BugsnagPluginReactNavigation from '@bugsnag/plugin-react-navigation'
 Bugsnag.start({
     plugins: [new BugsnagPluginReactNavigation()]
 })

 import {
     AppRegistry,
     LogBox,
 } from 'react-native'

import App from './src/App'

import {name as appName} from './src/app.json'

/* Disable log warnings. */
LogBox.ignoreLogs([
    'Require cycle: node_modules/victory', // https://github.com/FormidableLabs/victory/issues/2230
])

AppRegistry.registerComponent(appName, () => App)
