import * as React from 'react'
import styled from 'styled-components'

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const Title = styled.Text`
  color: #000000;
  margin-left: 5;
  font-size: 17;
`

type Props = {
  title?: string,
  onPress?: () => void,
}

class NavigationButton extends React.PureComponent<Props> {
  render() {
    const { title, onPress } = this.props

    return (
      <Container onPress={onPress}>
        <Title>{title}</Title>
      </Container>
    )
  }
}

export default NavigationButton
