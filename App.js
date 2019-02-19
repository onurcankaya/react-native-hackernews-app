import * as React from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { configureStore } from './src/store'
import RootLayout from './src/layouts/root'
import SearchLayout from './src/layouts/search'

const screens = {
  'hackernews.layout.root': RootLayout,
  'hackernews.layout.search': SearchLayout,
}

class App {
  constructor() {
    const store = configureStore()
    this.registerScreens(store)
  }

  registerScreens(store: Object) {
    Object.keys(screens).map((name) => {
      Navigation.registerComponent(name, this.wrap(screens[name], store))
    })
  }

  wrap(comp: any, store: Object) {
    type Props = {
      componentId: string,
    }

    /* eslint-disable */
    return () => 
      class extends React.Component<Props> {
        render() {
          return (
            <Provider store={store}>
              {React.createElement(comp, this.props)}
            </Provider>
          )
        }
      }
  }
  /* eslint-enable */

  start() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setDefaultOptions({
        topBar: {
          visible: false,
          drawBehind: true,
          animate: false,
        },
      })

      Navigation.setRoot({
        root: {
          component: {
            name: 'hackernews.layout.root',
          },
        },
      })
    })
  }
}

export default App
