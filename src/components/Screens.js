import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
export default function HomeScreens() {
    const stack=createNativeStackNavigator()
  return (
    <stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <stack.Screen name='home' component={Home}/>
        <stack.Screen name='about' component={About}/>
    </stack.Navigator>
  )
}