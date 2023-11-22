import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import About from '../pages/About'
import Chat from '../pages/Chat'
import MainScreenRouter from './MainScreenRoutes'
import Profile from '../pages/Profile'
export default function HomeScreens() {
    const stack=createNativeStackNavigator()
    
  return (
    <stack.Navigator screenOptions={{
        headerShown:false,
    }}>
        <stack.Screen name='homeScreens' component={MainScreenRouter}/>
        <stack.Screen  name='about' component={About}/>
        <stack.Screen  name='chat' component={Chat}/>
        <stack.Screen  name='profile' component={Profile}/>
    </stack.Navigator>
  )
}