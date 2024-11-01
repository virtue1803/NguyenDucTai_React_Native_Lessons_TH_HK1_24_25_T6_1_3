import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductCard from './screens/ProductCard'; // Import the ProductCard screen
import ColorSelectionScreen from './screens/ColorSelectionScreen'; // Import the ColorSelectionScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductCard">
        <Stack.Screen 
          name="ProductCard" 
          component={ProductCard} 
          options={{ title: 'Product' }} 
        />
        <Stack.Screen 
          name="ColorSelection" 
          component={ColorSelectionScreen} 
          options={{ title: 'Chọn màu' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
