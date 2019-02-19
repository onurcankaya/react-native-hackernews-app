import * as React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
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
  }

  onPressSearch = () => {
    this.props.dispatch(actions.getSearchResults(this.props.query))
  }

  render() {
    const { results } = this.props

    if (!results) return null

    console.warn('from inside the component: ', results)

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
          <Button onPress={this.onPressSearch}>
            <Text>{`Search`}</Text>
          </Button>
          <View>
            {results.map((result, index) => (
              <Text key={index}>{result.title}</Text>
            ))}
          </View>
        </Content>
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  query: selectors.getSearchQuery(state),
  results: selectors.getSearchResults(state),
})

export default connect(mapStateToProps)(LoginLayout)
