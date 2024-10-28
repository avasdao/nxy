module.exports = {
    presets: [
        [
            'module:@react-native/babel-preset',
            { unstable_transformProfile: 'hermes-stable' },
        ],
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        'nativewind/babel',
        [
            'module-resolver',
            {
                alias: {
                    'bn.js': 'react-native-bignumber',
                    'crypto': 'react-native-quick-crypto',
                    'stream': 'readable-stream',
                    'buffer': '@craftzdog/react-native-buffer',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
}
