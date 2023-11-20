import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import AuthScreenRoutes from './AuthScreenRotes'
import HomeScreens from './Screens'
import MainScreenRouter from './MainScreenRoutes'
export default function AppRoutes() {
    const stack=createNativeStackNavigator()
  return (
     <stack.Navigator initialRouteName='authScreen'>
        <stack.Screen  name='authScreen' options={{
            headerShown:false
        }} component={AuthScreenRoutes}/>
        <stack.Screen options={{
             headerShown:false
        }} name='maintabs' component={HomeScreens}/>
     </stack.Navigator>
  )
}
