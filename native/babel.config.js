module.exports = {
    presets: [
        [
            'module:metro-react-native-babel-preset',
            { unstable_transformProfile: 'hermes-stable' },
        ],
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ['@babel/plugin-transform-private-methods', { loose: false }],
        'react-native-reanimated/plugin',
        'nativewind/babel',
    ],
}
