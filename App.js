import 'react-native-gesture-handler'
import React from 'react'
import { View ,Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/components/AppRoutes';
export default function App() {
  return (
    <NavigationContainer>
        <AppRoutes/>
    </NavigationContainer>
  )
}
