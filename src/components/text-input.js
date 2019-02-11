import * as React from 'react'
import { StyleSheet } from 'react-native'
import FloatingLabelTextInput from '@rise-digital/react-native-floating-label-text-input'

const styles = StyleSheet.create({
  container: {
    borderColor: '#f1ece8',
    borderWidth: 1,
    height: 55,
    padding: 10,
    width: '100%',
  },

  input: {
    color: '#979797',
    fontSize: 14,
    padding: 0,
  },

  label: {
    borderBottomWidth: 0,
    color: 'white',
    fontSize: 14,
  },
})

type Props = {
  placeholder: string,
  value: ?string,
}

class TextInput extends React.PureComponent<Props> {
  render() {
    return (
      <FloatingLabelTextInput
        {...this.props}
        containerStyle={styles.container}
        labelStyle={styles.label}
        placeholderTextColor="#979797"
        style={styles.input}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
    )
  }
}

export default TextInput
