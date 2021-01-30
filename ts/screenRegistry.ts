import { AppRegistry } from 'react-native'

import { name as appName } from '../app.json'
import App from './App'

export const registerScreen = () => {
  AppRegistry.registerComponent(appName, () => App)
}

export default {
  registerScreen,
}
