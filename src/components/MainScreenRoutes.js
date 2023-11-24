import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import Icon from "react-native-vector-icons/FontAwesome"
import Likes from '../pages/Likes'
import Messages from '../pages/Messages'
export default function MainScreenRouter() {
    const tab=createBottomTabNavigator()
  return (
    <tab.Navigator screenOptions={{
        headerShown:false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute', 
            elevation: 5,
            backgroundColor: '#fff',
            borderRadius:15,
            height: 60,
            width:'95%',
            marginLeft:10
          }
    }} >
        <tab.Screen name='Home'  options={{
            tabBarIcon:()=>{
                return(
                    <Icon name='home' color={'#7a55e8'} size={30}/>
                )
            }, 
        }} component={Home}/>
         <tab.Screen name='Likes'  options={{
            tabBarIcon:()=>{
                return(
                    <Icon name='heart' color={'#7a55e8'} size={30}/>
                )
            }
        }} component={Likes}/>
         <tab.Screen name='messages'  options={{
            tabBarIcon:()=>{
                return(
                    <Icon name='bookmark' color={'#7a55e8'} size={30}/>
                )
            },
            tabBarBadge: 3
        }} component={Messages}/>
    </tab.Navigator>
  )
}