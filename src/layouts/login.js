import * as React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import TextInput from '../components/text-input'

const Content = styled.View`
  padding: 70px 30px;
`

const Button = styled.TouchableOpacity`
  border-width: 1;
  width: 100%;
  height: 50;
  align-items: center;
  justify-content: center;
`

class LoginLayout extends React.PureComponent {
  onChangeSearchQuery = (query) => {
    console.warn('this is NOT redux', query)
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <Content>
          <TextInput
            placeholder={'Search...'}
            // value={email}
            onChangeText={this.onChangeSearchQuery}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button>
            <Text>{`Search`}</Text>
          </Button>
        </Content>
      </KeyboardAwareScrollView>
    )
  }
}

export default LoginLayout
