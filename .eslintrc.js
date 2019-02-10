const config = require('@rise-digital/eslint-config-rise')
module.exports = config({
  rules: {
    // This rule does not play nice with styled-components
    'react-native/no-raw-text': 0,
    'react-native/no-color-literals': 0
  }
})
