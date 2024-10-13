/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {Dimensions, SafeAreaView, useColorScheme} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'

// import Bugsnag from '@bugsnag/react-native'

import {ampli} from './ampli'

import DeviceInfo from 'react-native-device-info'

import store from './store'

import MainStack from './screens/Main'

/**
 * Main Application
 */
const App = () => {
    /* Initialize PROFILE context. */
    const {userid, saveUserid} = React.useContext(store.Profile)

    /**
     * Start Session
     *
     * Begins a new session.
     *
     * NOTE: Logs the device info to the API server.
     */
    React.useEffect(() => {
        /**
         * Fetch Device Info
         *
         * Will retrieve all available information about the running device
         * and store to the active/new session.
         */
        const fetchDeviceInfo = async () => {
            try {
                /* Set unique id. */
                const uid = await DeviceInfo.getUniqueId()

                /* Set brand. */
                const brand = await DeviceInfo.getBrand()

                /* Set build id. */
                const buildId = await DeviceInfo.getBuildId()

                /* Set build number. */
                const buildNumber = await DeviceInfo.getBuildNumber()

                /* Set device id. */
                const deviceId = await DeviceInfo.getDeviceId()

                /* Set device name. */
                const deviceName = await DeviceInfo.getDeviceName()

                /* Set ip address. */
                const ipAddress = await DeviceInfo.getIpAddress()

                /* Set manufacturer. */
                const mfr = await DeviceInfo.getManufacturer()

                /* Set model. */
                const model = await DeviceInfo.getModel()

                /* Set system name. */
                const sysName = await DeviceInfo.getSystemName()

                /* Set system version. */
                const sysVersion = await DeviceInfo.getSystemVersion()

                /* Set security. */
                const security = await DeviceInfo.isPinOrFingerprintSet()

                /* Set tablet. */
                const tablet = await DeviceInfo.isTablet()

                /* Set version. */
                const version = await DeviceInfo.getVersion()

                /* Build session package. */
                const pkg = {
                    uid,
                    brand,
                    buildId,
                    buildNumber,
                    deviceId,
                    deviceName,
                    ipAddress,
                    mfr,
                    model,
                    sysName,
                    sysVersion,
                    security,
                    tablet,
                    version,
                }
                // console.log('SESSION (pkg):', JSON.stringify(pkg, null, 4))

                /* Save userid. */
                saveUserid(uid)

                /* Record user id. */
                ampli.identify('user-id', {
                    uid,
                    deviceId,
                })

// FOR DEV PURPOSES ONLY
// console.log('BUGSNAG', Bugsnag)
// Bugsnag.notify(new Error('Test error'))
            } catch (err) {
                console.error('SESSION ERROR', err)
            }
        }

        /* Fetch device info. */
        fetchDeviceInfo()

        /* Record new user session. */
        ampli.newUserSession()
    })

    /* Initialize Bugsnag. */
    // const {createNavigationContainer} = Bugsnag.getPlugin('reactNavigation')
    // const BugsnagNavigationContainer =
    //     createNavigationContainer(NavigationContainer)

    /* Request dark mode. */
    const isDarkMode = useColorScheme() === 'dark'

    /* Set background style. */
    const backgroundStyle = {
        _backgroundColor: isDarkMode
            ? 'rgba(30, 30, 30, 0.8)'
            : 'rgba(180, 180, 180, 0.8)',
        get backgroundColor() {
            return this._backgroundColor
        },
        set backgroundColor(value) {
            this._backgroundColor = value
        },
    }

    /**
     * Update Layout
     *
     * Controls the orientation updates to the UI.
     */
    const _updateLayout = () => {
        /* Retreive window width. */
        const width = Dimensions.get('window').width

        /* Retrieve window height. */
        const height = Dimensions.get('window').height

        console.info(
            `Screen Layout has been updated [ w:${parseInt(
                width,
            )} | h:${parseInt(height)} ]`,
        )
    }

    return (
        // <BugsnagNavigationContainer>
        <NavigationContainer>
            <SafeAreaView
                onLayout={_updateLayout}
                style={backgroundStyle}
                className="h-full">
                <MainStack />
            </SafeAreaView>
        </NavigationContainer>
        // </BugsnagNavigationContainer>
    )
}

export default App
