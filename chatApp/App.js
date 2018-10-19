// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
import Lobby from './components/Lobby';
// Import React Navigation
import { createStackNavigator } from 'react-navigation'

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
  Lobby: { screen: Lobby },
});

// Export it as the root component
export default navigator