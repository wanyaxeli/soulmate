import { View, Text,Image,TouchableOpacity ,SafeAreaView,ScrollView,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'
import img from "../assets/images/women3.jpg"
import Icon from "react-native-vector-icons/FontAwesome"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function About({route,navigation:{goBack,navigate}}) {
  const [token,setToken]=useState()
  const [interests,setInterests]=useState()
  const {user}=route.params
  const {id}=user
    const handleGoBack=()=>{
       goBack()
    }
    const handleToChat=()=>{
        navigate("chat",{user:user})
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
    const fetchData = async () => {
      const url = `http://10.0.2.2:8000/interests/${id}`;
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const{interest}=response.data
        setInterests(JSON.parse(interest))
      } catch (error) {
        console.error('Error:', error);
      }
    };
  useEffect(()=>{
    getToken()
  },[])
  useEffect(()=>{
    fetchData()
  },[token,user])
  return (
    <SafeAreaView style={styles.AboutWrapper}>
        <ScrollView style={{flex:1}}>
          <View style={styles.AboutBannerImg}>
            <Image style={styles.img} source={img}/>
            <View style={styles.gobackBtnWrapper}>
                 <TouchableOpacity onPress={handleGoBack} style={styles.gobackBtn}>
                 <Icon name='arrow-left' color={'#000'} size={22} />
                 </TouchableOpacity>
            </View>
          </View>
          <View style={styles.aboutBtnWrapper}>
              <View style={[styles.aboutBtn]}>
                <TouchableOpacity style={[styles.Btn]}>
                  <Text style={{fontSize:25}}>&times;</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.aboutBtn]}>
                <TouchableOpacity style={[styles.Btn,{backgroundColor:'#7a55e8'}]}>
                <Icon name='heart' color={'#fff'} size={22} />
                </TouchableOpacity>
              </View>
              <View style={[styles.aboutBtn]}>
                <TouchableOpacity onPress={handleToChat} style={[styles.Btn]}>
                <Icon name='bookmark-o' color={'#000'} size={22} />
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.interestsWrapper}>
            {interests? interests.map((item,i)=>{
               return(
                <View key={i} style={styles.interests}>
                  <View style={styles.decorator}></View>
                  <Text style={{color:"#fff",textTransform:'capitalize'}}>{item}</Text>
              </View>
               )
            }):<Text>Loading ...</Text>}
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
    AboutWrapper:{
        flex:1,
        backgroundColor:'#000'
    },
    AboutBannerImg:{
        width:'100%',
        height:410,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        position:"relative"
    },
    img:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40
    },
    gobackBtnWrapper:{
        width:'100%',
        height:50,
        position:"absolute",
        top:0,
        padding:10
    },
    gobackBtn:{
        width:40,
        height:40,
        backgroundColor:'#fff',
        borderRadius:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    aboutBtnWrapper:{
        width:'70%',
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:50,
    },
    aboutBtn:{
        width:75,
        height:75,
        borderRadius:50,
        backgroundColor:'#000',
        marginTop:-40,
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        padding:5
    },
    Btn:{
        width:60,
        height:60,
        backgroundColor:'#fff',
        borderRadius:50,
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        padding:5
    },
    interestsWrapper:{
        width:"100%",
        heighta:'auto',
        padding:15,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        flexWrap:"wrap"
    },
    interests:{
        width:120,
        height:50,
        backgroundColor:'#7a51a2',
        flexDirection:"row",
        alignItems:'center',
        gap:10,
        paddingHorizontal:5,
        borderRadius:15
    },
    decorator:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'#7a55e8'
    }
})