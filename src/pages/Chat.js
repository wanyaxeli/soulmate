import { View, Text,Image,ScrollView,KeyboardAvoidingView,TouchableOpacity,TextInput ,SafeAreaView,StyleSheet} from 'react-native'
import React from 'react'
import img from "../assets/images/mowen.jpg"
import Icon from "react-native-vector-icons/FontAwesome"
export default function Chat({navigation,route}) {
    const handleGoBack=()=>{
        navigation.goBack()
    }
  return (
    <SafeAreaView style={styles.chatWrapper}>
       <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
       <View style={styles.goBackWrapper}>
           <View style={styles.goBackBtn}>
           <TouchableOpacity onPress={handleGoBack}>
           <Icon name='arrow-left' color={'#000'} size={22} />
           </TouchableOpacity>
           </View>
           <Text style={{color:'#fff',fontSize:20,textTransform:'capitalize'}}>Jane Roberts</Text>
            <View style={styles.goBackBtn}>
                <Image style={styles.img} source={img}/>
            </View>
        </View>
        <View style={styles.chatContainer}>
            <View style={styles.chat}>
                <Text>hello</Text>
            </View>
            <View style={styles.chatInputWrapper}>
                <TextInput style={styles.chatInput}/>
                <TouchableOpacity style={styles.chatBtn}>
                    <Icon name='send' color={'#fff'} size={30}/>
                </TouchableOpacity>
            </View>
        </View>
       </KeyboardAvoidingView>
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
    borderRadius:10
   },
   chat:{
    width:"100%",
    height:"88%",
    paddingHorizontal:10,
   },
   chatInputWrapper:{
    width:'100%',
    height:'auto',
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
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