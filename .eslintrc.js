module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  extends: ['@react-native-community'],
  rules: {
    semi: 0,
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: './src',
        rootPathPrefix: '~/',
      },
    },
  },
}
