import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../pages/SignIn'
import Register from "../pages/Register"
import Interests from '../pages/Interests'
const AuthScreenRoutes = () => {
    const stack=createNativeStackNavigator()
  return (
    <stack.Navigator>
        <stack.Screen options={{headerShown:false}} name='signIn' component={SignIn}/>
        <stack.Screen options={{headerShown:false}} name='register' component={Register}/>
        <stack.Screen options={{headerShown:false}}name='interests' component={Interests} />
    </stack.Navigator>
  )
}

export default AuthScreenRoutes