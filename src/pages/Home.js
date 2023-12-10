import { View, Pressable,SafeAreaView,TouchableOpacity,TextInput,Text,StyleSheet,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Data} from "../components/Data"
import {decode as atob, decode, encode as btoa} from 'base-64'
import {jwtDecode} from 'jwt-decode'
import Carousel from "react-native-snap-carousel"
import axios from 'axios'
const img = require("../assets/images/man.jpg")
const img1 = require("../assets/images/women3.jpg")
export default function Home({navigation}) {
    const[data,setData]=useState([])
    const[token,setToken]=useState('')
    const[user,setUser]=useState({})
    const [displayData,setDisplayData]=useState([])
    const handleToAbout=(id)=>{
        let user=flatDisplayData.find(item=>item.id === id)
        navigation.navigate("about",{
            user:user
        })
    }
    const handleToProfile=()=>{
        navigation.navigate('profile')
    }
    useEffect(()=>{
        const url='http://10.0.2.2:8000/users/'
    try{
        axios.get(url,{headers:{
            'Content-Type':'Application/json'
        }})
        .then(res=>{
            setData([res.data])
        })
    }
    catch(error){console.log(error)}
    },[])
    const getUser=()=>{
        if (token) {
            try {
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(decode(base64));
            const {user_id}=decodedToken
            let url =`http://10.0.2.2:8000/users/${user_id}`
            axios.get(url,{headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'Application/json'
            }})
            .then(res=>{
                const {gender,id}=res.data
                console.log(gender)
                setUser({gender:gender,id:id})
            })
            } catch (error) {
              console.error('Error decoding token:', error);
            }
          } else {
            console.error('Token is missing or invalid.');
          }
    }
    const getToken = async () => {
        try {
          const tokenString = await AsyncStorage.getItem('token');
          if (tokenString) {
            const token = JSON.parse(tokenString);
            setToken(token)
          } else {
            console.log('Token not found in AsyncStorage');
          }
        } catch (error) {
          console.error('Error retrieving token:', error);
        }
      };

    const displayUser=()=>{
        try {
            const flatData = data.flat();
            const items = flatData.filter(item => item.id !== user.id && item.gender !== user.gender);
            console.log(items);
            setDisplayData([items]);
          } catch (error) {
            console.error('Error in displayUser:', error);
          }
    }
    
    useEffect(()=>{
      displayUser()
    },[data,token,user])
    useEffect(()=>{
        getUser()
      },[token])
    useEffect(()=>{
       getToken()
    },[])
    const flatDisplayData=displayData.flat()
    const renderItem=({item, index}) => {
        return (
        <Pressable onPress={()=>handleToAbout(item.id)}>
            <View style={styles.bannerContainer}>
               <Image style={styles.imageBanner} source={img1}/>
                <View style={styles.bannerCover}>
                    <View style={styles.bannerContentWrapper}>
                    <View style={styles.closeBtnWRapper}>
                        <TouchableOpacity>
                            <Text style={{color:"#000",fontSize:35}}>&times;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bannerUserDetailWrapper}>
                        <Text  style={{fontSize:25,textTransform:'capitalize'}}>{`${item.first_name} ${item.last_name}`}</Text>
                        <Text style={{fontSize:18}}>3km away</Text>
                    </View>
                    </View>
                </View>
            </View>
        </Pressable>
        );
    }
  return (
    <SafeAreaView style={styles.homeRapper}>
        <View>
        <View style={styles.homeHeaderWrapper}>
           <View style={styles.homeHeaderBarContainer}>
           <Icon name='arrow-left' color={'#000'} size={22} />
           </View>
           <Pressable onPress={handleToProfile}>
                <View style={styles.homeHeaderBarContainer}>
                <Image style={styles.profileImg} source={img}/>
                </View>
           </Pressable>
        </View>
         <View style={styles.searchBarWrapper}>
          <TouchableOpacity>
           <Icon name='search' color={'#000'} size={30}/>
          </TouchableOpacity>
          <TextInput style={{flex:1,color:'#fff',marginLeft:10}}
           placeholder='Search ...'
           placeholderTextColor={'#000'}
          />
         </View>
         <View style={styles.banner}>
          <View style={styles.bannerTextWrapper}>
            <Text style={{color:"#fff",fontSize:30}}>For you</Text>
            <TouchableOpacity>
                <Text style={{color:'#7a55e8',textDecorationLine:'underline',textDecorationColor:'#7a55e8'}}>see more</Text>
            </TouchableOpacity>
          </View>
          <Carousel 
           data={flatDisplayData} 
           layout={'stack'}
           renderItem={renderItem}
           sliderWidth={400}
           itemWidth={385}
          />
         </View>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    homeRapper:{
        flex:1,
        backgroundColor:'#000',
        paddingHorizontal:10
    },
    homeHeaderWrapper:{
        width:'100%',
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    homeHeaderBarContainer:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    profileImg:{
        width:"100%",
        height:'100%',
        borderRadius:50,
        objectFit:'contain'
    },
    searchBarWrapper:{
        width:'100%',
        height:'auto',
        borderWidth:1,
        borderColor:"#fff",
        flexDirection:'row',
        alignItems:"center",
        backgroundColor:'#7a55e8',
        paddingHorizontal:15,
        borderRadius:15,
        marginTop:15
    },
    banner:{
        width:'100%',
        height:'auto',
        marginVertical:20
    },
    bannerTextWrapper:{
        width:'100%',
        height:"auto",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    bannerContainer:{
        width:'100%',
        marginTop:20,
        height:380,
        borderRadius:15,
        position:'relative'
    },
    imageBanner:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderRadius:15
    },
    bannerCover:{
        position:'absolute',
        width:"100%",
        height:"100%",
        top:0,
        borderRadius:15,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    bannerContentWrapper:{
        width:'90%',
        borderRadius:15,
        marginBottom:10,
        height:100,
        backgroundColor:'#fff',
        opacity:.8,
        padding:15,
        flexDirection:"row",
        alignItems:'center',
    },
    closeBtnWRapper:{
        width:65,
        height:65,
        borderRadius:50,
        borderWidth:4,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderColor:"#000"
    },
    bannerUserDetailWrapper:{
        flex:1,
        marginLeft:15,
        height:'auto'
    }
})