import { AppRegistry } from 'react-native'

import { name as appName } from '../app.json'
import ContactsList from './Contacts/screens/ContactsListNew'

export const registerScreen = () => {
  AppRegistry.registerComponent(appName, () => ContactsList)
}

export default {
  registerScreen,
}
