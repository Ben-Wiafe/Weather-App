import React from 'react'
import { View, Text} from 'react-native'
import HomeScreen from './components/welcome'
import { NavigationContainer } from '@react-navigation/native'
import WeatherPage from './components/weatherpage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name= "Home" component={HomeScreen} options={{headerTitle: " Welcome ",headerShown:false,headerStyle: { backgroundColor: '#1b0d63' }}}/>
       <Stack.Screen name= "WeatherPage" component={WeatherPage} options={{headerTitle:'Weather Forecast', headerTintColor:'white', headerShown:false, headerStyle: { backgroundColor: '#1b0d63' }}} />

     </Stack.Navigator>
   </NavigationContainer>
  )
}
