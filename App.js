// Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import ViewContactScreen from './screens/ViewContactScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';

const MainNavigator = createStackNavigator(
  { 
    Home: {screen: HomeScreen},
    Add: {screen: AddNewContactScreen},
    View: {screen: ViewContactScreen},
    Edit: {screen: EditContactScreen}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#b83227",
      },
      headerTitleStyle: {
        color: "#fff",
      }
    }
  }
)

const App = createAppContainer(MainNavigator);
export default App;
