import * as React from 'react'
import { Text } from 'react-native'

import Screen from '../components/screen'

class LoginLayout extends React.PureComponent {
  render() {
    return (
      <Screen>
        <Text>{`login`}</Text>
      </Screen>
    )
  }
}

export default LoginLayout
