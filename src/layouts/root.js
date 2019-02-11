import * as React from 'react'
import { Navigation } from 'react-native-navigation'
import styled from 'styled-components'

import Screen from '../components/screen'
import NavigationHeader from '../components/navigation-header'
import NavigationButton from '../components/navigation-button'

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  color: magenta;
`

class RootLayout extends React.PureComponent {
  modal = (screen) => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: { name: screen },
          },
        ],
      },
    })
  }

  onPressLogin = () => {
    this.modal('hackernews.layout.login')
  }

  onPressSettings = () => {
    console.warn('onPressSettings')
  }

  render() {
    return (
      <Screen>
        <NavigationHeader
          title="App"
          leftNavigationButton={
            <NavigationButton
              title={'Login'}
              onPress={() => this.onPressLogin()}
            />
          }
          rightNavigationButton={
            <NavigationButton
              title={'Settings'}
              onPress={() => this.onPressSettings()}
            />
          }
        />
        <Content>
          <Title>{`Root`}</Title>
        </Content>
      </Screen>
    )
  }
}

export default RootLayout
