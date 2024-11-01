import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';

import Login from './screens/login';
import DemoCRUD from './screens/demoCRUD';
import Dashboard from './screens/dashboard';
import AddNote from './screens/addNote';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
          <Stack.Screen name="AddNote" component={AddNote} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
