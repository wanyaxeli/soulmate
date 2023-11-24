import { View,SafeAreaView,ScrollView,StyleSheet,Image, Text,Pressable } from 'react-native'
import React from 'react'
import img from "../assets/images/man.jpg"
import Icon from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
export default function Profile({navigation}) {
    const handleGoBack=()=>{
    navigation.goBack()
    } 
  return (
    <SafeAreaView style={styles.profileWrapper}>
        <View style={styles.profileBanner}>
            <View style={styles.profileNameWrapper}>
            <Text style={{color:'#fff',fontSize:40}}>Elias Wanyama</Text>
            </View>
            <View style={styles.profileImage}>
              <Image source={img} style={styles.img}/>
            </View>
            <View style={styles.editWrapper}>
                 <View style={styles.edit}><MaterialIcons name='image' color={'#7a55e8'} size={30}/></View>
            </View>
            <View style={styles.goBackWrapper}>
            <Pressable onPress={handleGoBack}>
            <Icon name='arrow-left' color={'#fff'} size={22} />
            </Pressable>
            </View>
        </View>
        <View style={styles.userDetailsWrapper}>
        <Text style={[styles.user,{color:"#fff"}]}>Full Name:Elias Wanyama</Text>
          <Text style={[styles.user,{color:"#fff"}]}>Email:eliwanyax@gmail.com</Text>
          <Text style={[styles.user,{color:"#fff"}]}>Phone Number:eliwanyax@gmail.com</Text>
          <Text style={[styles.user,{color:"#fff"}]}>Gender:Male</Text>
          <View style={styles.editBtnWrapper}>
          <Pressable style={styles.btn}><Text style={{fontSize:20,color:"#fff"}}>Edit profile</Text></Pressable>
          </View>
        </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  profileWrapper:{
    flex:1,
    backgroundColor:'#000'
  },
  profileBanner:{
    width:'100%',
    height:250,
    backgroundColor:'#7a55e8',
    borderBottomLeftRadius:150,
    borderBottomRightRadius:150,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'relative'
  },
  profileImage:{
    width:150,
    height:150,
    borderRadius:100,
    position:'absolute',
    bottom:-70,
    left:'30%'
  },
  img:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderRadius:100
  },
  profileNameWrapper:{
    width:"100%",
    height:'auto',
    marginTop:-50,
    display:'flex',
    alignItems:"center",
    justifyContent:'center'
  },
  editWrapper:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:'#fff',
    position:'absolute',
    bottom:-17,
    right:'29%'
  },
  edit:{
    width:"100%",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
  },
  userDetailsWrapper:{
    width:'95%',
    height:300,
    marginHorizontal:15,
    marginTop:80,
    padding:10,
  },
  user:{
    width:'100%',
    paddingBottom:20,
    fontSize:20,
    borderBottomColor:'#fff',
    borderBottomWidth:1,
    marginTop:10
  },
  editBtnWrapper:{
    width:'100%',
    height:100,
    marginTop:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    width:'80%',
    height:65,
    backgroundColor:'#7a55e8',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },
  goBackWrapper:{
   position:'absolute',
   top:10,
   left:15
  }
})