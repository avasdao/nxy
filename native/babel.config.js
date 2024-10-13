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
        'react-native-reanimated/plugin',
    ],
}
