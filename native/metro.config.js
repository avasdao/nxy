/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

const {
    resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname)

const resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'crypto') {
        // when importing crypto, resolve to react-native-quick-crypto
        return context.resolveRequest(
            context,
            'react-native-quick-crypto',
            platform,
        )
    }

    // otherwise chain to the standard Metro resolver.
    return context.resolveRequest(context, moduleName, platform)
}

const config = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
        // extraNodeModules: {
        //     // stream: require.resolve('stream-browserify'),
        //     // crypto: require.resolve('crypto-browserify'),
        // },
        resolveRequest,
    },
}

module.exports = mergeConfig(defaultConfig, config)
