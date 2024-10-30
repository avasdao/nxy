/**
 * @format
 */

/* Inject Crypto polyfills. */
import { install } from 'react-native-quick-crypto'
install()

/* Import modules. */
import { AppRegistry, LogBox } from 'react-native'
import Bugsnag from '@bugsnag/react-native'
import BugsnagPluginReactNavigation from '@bugsnag/plugin-react-navigation'
Bugsnag.start({ plugins: [ new BugsnagPluginReactNavigation() ] })

/* Import (local) modules. */
import { ampli } from './src/ampli'
ampli.load({ environment: 'production' })

import App from './src/App'
import { name as appName } from './src/app.json'

if (!new (class {x})().hasOwnProperty('x')) {
    throw new Error('Transpiler is not configured correctly')
}

/* Disable log warnings. */
LogBox.ignoreLogs([
    'Require cycle: node_modules/victory', // https://github.com/FormidableLabs/victory/issues/2230
    'JSON Parse error: Unexpected character: e', // FIXME
])

AppRegistry.registerComponent(appName, () => App)
