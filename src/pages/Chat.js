import { View, Text,Image,ScrollView,KeyboardAvoidingView,TouchableOpacity,TextInput ,SafeAreaView,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import img from "../assets/images/mowen.jpg"
import Icon from "react-native-vector-icons/FontAwesome"
export default function Chat({route,navigation}) {
    const ws = new WebSocket('ws://10.0.2.2:8000/ws/chat/')
    console.log(ws)
    const [token,setToken]=useState()
    const [message,setMessage]=useState()
    const [value,setValue]=useState()
    const [name,setName]=useState()
    const handleGoBack=()=>{
        navigation.goBack()
    }
    const {user}=route.params
    const {id}=user
    const handleInput=(text)=>{
    setValue(text)
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
      const HandleWebSocket=()=>{
        ws.onopen=()=>{
          const userDetails={recipientId:id,senderToken:token,chat:''}
          ws.send(JSON.stringify(userDetails))
         }
         ws.onmessage=(e)=>{
          console.log(e.data)
         }
      }
    const getMessage=()=>{
    if (ws && ws.readyState === WebSocket.OPEN){
       ws.onmessage=(e)=>{
        console.log(e.data)
       }
    }
    }
    const handleSendText=()=>{
       if (token && user){
        if (ws && ws.readyState === WebSocket.OPEN) {
          setMessage(value)
          const message = JSON.stringify({ chat: value });
          ws.send(message);
        } else {
          console.error('WebSocket connection not open.');
        }
       }
    }
    // useEffect(()=>{
    //   getMessage()
    // },[])
    useEffect(()=>{
    getToken()
    },[])
    useEffect(()=>{
    const{first_name}=user
    const{last_name}=user
    const fullname=`${first_name} ${last_name}`
    setName(fullname)
    },[user])
    useEffect(()=>{
        HandleWebSocket()
        return ()=>{
          ws.close()
        }
    },[token,user])
  return (
    <SafeAreaView style={styles.chatWrapper}>
       <View style={styles.goBackWrapper}>
           <View style={styles.goBackBtn}>
           <TouchableOpacity onPress={handleGoBack}>
           <Icon name='arrow-left' color={'#000'} size={22} />
           </TouchableOpacity>
           </View>
           <Text style={{color:'#fff',fontSize:20,textTransform:'capitalize'}}>{name}</Text>
            <View style={styles.goBackBtn}>
                <Image style={styles.img} source={img}/>
            </View>
        </View>
        <ScrollView>
        <KeyboardAvoidingView>
            <View style={styles.chatContainer}>
                <View style={styles.chat}>
                    <Text>hello</Text>
                </View>
                <View style={styles.chatInputWrapper}>
                    <TextInput onChangeText={(newValue)=>handleInput(newValue)} style={styles.chatInput}/>
                    <TouchableOpacity onPress={handleSendText} style={styles.chatBtn}>
                        <Icon name='send' color={'#fff'} size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
       </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
   chatWrapper:{
    flex:1,
    backgroundColor:"#000",
    padding:10
   },
   goBackWrapper:{
    width:'100%',
    height:'auto',
    marginVertical:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
   },
   goBackBtn:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:'#fff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
   },
   img:{
    width:'100%',
    height:'100%',
    objectFit:'contain',
    borderRadius:50
   },
   chatContainer:{
    width:'100%',
    height:580,
    backgroundColor:'#4B4B4B',
    borderRadius:10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center'
   },
   chat:{
    width:"100%",
    height:"auto",
    paddingHorizontal:10,
   },
   chatInputWrapper:{
    width:'100%',
    height:'auto',
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginBottom:10
   },
   chatInput:{
    flex:1,
    backgroundColor:'#fff',
    height:60,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    paddingHorizontal:10
   },
   chatBtn:{
    width:60,
    height:60,
    backgroundColor:'#7a55e8',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
   }
})