module.exports = {
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
