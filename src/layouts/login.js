import * as React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import styled from 'styled-components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import TextInput from '../components/text-input'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

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

type Props = {
  dispatch: Function,
  query: string,
}

class LoginLayout extends React.PureComponent<Props> {
  onChangeSearchQuery = (query) => {
    this.props.dispatch(actions.setSearchQuery(query))
    console.warn(this.props.query)
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

const mapStateToProps = (state) => ({
  query: selectors.getSearchQuery(state),
})

export default connect(mapStateToProps)(LoginLayout)
