module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { unstable_transformProfile: 'hermes-stable' },
    ]
  ],
  plugins: [
    // ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    'react-native-reanimated/plugin',
    'nativewind/babel',
  ],
  assumptions: {
    // setPublicClassFields: false,
    // privateFieldsAsProperties: true
  },
}
