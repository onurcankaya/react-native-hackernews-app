import * as React from 'react'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  background-color: #f6f6f6;
`

const Content = styled.View`
  flex: 1;
`

const LoadingView = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 53, 71, 0.5);
  align-items: center;
  justify-content: center;
`

type Props = {
  children?: React.Node,
  backgroundColor?: string,
  loading: boolean,
}

class Screen extends React.PureComponent<Props> {
  static defaultProps = { loading: false }

  render() {
    const { children, loading } = this.props

    return (
      <Container>
        <Content>{children}</Content>
        {loading && <LoadingView>{`loading`}</LoadingView>}
      </Container>
    )
  }
}

export default Screen
