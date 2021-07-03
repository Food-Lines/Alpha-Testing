import React from 'react'
import { Provider } from 'react-redux'

// React Navigation stack
import RootStack from './src/Navigators/MainNavigation'
import store from './src/Redux'

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

export default App
