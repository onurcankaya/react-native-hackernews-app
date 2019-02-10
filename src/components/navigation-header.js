import * as React from 'react'
import { View, Platform } from 'react-native'
import styled from 'styled-components'

import { ifIPhoneX } from '../utils/device'

const NavigationBar = styled.View`
  height: 52;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-bottom-width: 1;
  border-bottom-color: #cccccc;
`

const Title = styled.Text`
  position: absolute;
  font-size: 18;
  color: #000000;
`

const LeftNavigationButton = styled.View`
  padding-left: 7;
  width: 50%;
  align-items: flex-start;
`

const RightNavigationButton = styled.View`
  padding-right: 7;
  width: 50%;
  align-items: flex-end;
`
const StatusBar = styled.View`
  height: ${Platform.select({
    ios: ifIPhoneX(44, 20),
    android: 0,
  })};
`

type Props = {
  title?: string,
  leftNavigationButton?: React.Node,
  rightNavigationButton?: React.Node,
}

class NavigationHeader extends React.PureComponent<Props> {
  render() {
    const { title } = this.props
    return (
      <View>
        <StatusBar />
        <NavigationBar>
          {title && <Title>{title}</Title>}
          <LeftNavigationButton>
            {this.props.leftNavigationButton}
          </LeftNavigationButton>
          <RightNavigationButton>
            {this.props.rightNavigationButton}
          </RightNavigationButton>
        </NavigationBar>
      </View>
    )
  }
}

export default NavigationHeader
