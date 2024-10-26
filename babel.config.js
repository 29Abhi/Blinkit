
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@assets': './src/assets',
        '@features': './src/features',
        '@service': './src/service',
        '@state': './src/state',
        '@navigation': './src/navigation',
        '@types': './src/types',
        '@utils': './src/utils',
        '@components': './src/components',
        '@redux': './src/redux',
      },
    },
  ],
  ],
};
