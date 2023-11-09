import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
