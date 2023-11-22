import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const img =require("../assets/images/mowen.jpg")
const img1 =require("../assets/images/women1.jpg")
const img2 =require("../assets/images/women2.jpg")
const img3 =require("../assets/images/women3.jpg") 
export const Data=[{name:'jane doe',distance:"3km away",img:img},
{name:'winnie williams',distance:"10km away",img:img1},
{name:'jane roberts',distance:"13km away",img:img2},
{name:'rebecca johnson',distance:"32km away",img:img3}]

export const interests=[{interest:'music',id:1,icon:<Icon name='headphones' size={20} color={'#000'} />},
    {interest:'gaming',id:2,icon:<Icon name='gamepad' size={20} color={'#000'} />},
    {interest:'singing',id:3,icon:<Icon name='microphone' size={20} color={'#000'} />},
    {interest:'watching',id:4,icon:<Icon name='file-movie-o' size={20} color={'#000'} />},
    {interest:'football',id:5,icon:<Ionicons name='football-sharp' size={20} color={'#000'}/>},
    {interest:'cooking',id:6,icon:<Icon name='fire' size={20} color={'#000'}/>},
    {interest:'coffee',id:7,icon:<Icon name='coffee' size={20} color={'#000'}/>},
    {interest:'reading',id:8,icon:<Ionicons name='book' size={20} color={'#000'}/>},
    {interest:'travel',id:9,icon:<Icon name='bus' size={20} color={'#000'}/>}, 
    {interest:'shopping',id:10,icon:<Icon name='shopping-bag' size={20} color={'#000'}/>},  
    {interest:'swimming',id:11,icon:<MaterialIcons name='pool' size={20} color={'#000'}/>},  
    {interest:'eating',id:12,icon:<Icon name='spoon' size={20} color={'#000'}/>},  
    {interest:'drinking',id:13,icon:<MaterialIcons name='local-drink' size={20} color={'#000'}/>},  
    {interest:'hiking',id:14,icon:<MaterialIcons name='hiking' size={20} color={'#000'}/>},  
    {interest:'biking',id:15,icon:<MaterialIcons name='pedal-bike' size={20} color={'#000'}/>}, 
    {interest:'skating',id:16,icon:<MaterialIcons name='roller-skating' size={20} color={'#000'}/>}, 
    {interest:'tiktoking',id:17,icon:<MaterialIcons name='tiktok' size={20} color={'#000'}/>}, 
    {interest:'Basketball',id:18,icon:<MaterialIcons name='sports-basketball' size={20} color={'#000'}/>},      
]