import { View, Image,Text,TouchableOpacity,SafeAreaView,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import img from "../assets/images/women3.jpg"
export default function Messages({navigation}) {
  const handleToChat=()=>{
    navigation.navigate('chat')
  }
  return (
    <SafeAreaView style={styles.messagesWrapper}>
      <ScrollView style={{flex:1}}>
        <TouchableOpacity onPress={handleToChat}>
        <View style={styles.messageCard}>
            <View style={styles.messImgWrapper}>
              <Image style={styles.img} source={img}/>
            </View>
            <View>
              <Text style={{textTransform:"capitalize",fontSize:20,marginTop:-10}}>jane roberts</Text>
              <Text>hello world</Text>
            </View>
            <View style={styles.chatBargeWrapper}>
              <Text style={{color:"#7a55e8"}}>12.54 in the morning</Text>
              <View style={styles.barger}><Text style={{color:'#fff'}}>2</Text></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToChat}>
        <View style={styles.messageCard}>
            <View style={styles.messImgWrapper}>
              <Image style={styles.img} source={img}/>
            </View>
            <View>
              <Text style={{textTransform:"capitalize",fontSize:20}}>jane roberts</Text>
              <Text>hello world</Text>
            </View>
            <View style={styles.chatBargeWrapper}>
              <Text style={{color:"#7a55e8"}}>12.54 in the morning</Text>
              <View style={styles.barger}><Text style={{color:'#fff'}}>2</Text></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToChat}>
        <View style={styles.messageCard}>
            <View style={styles.messImgWrapper}>
              <Image style={styles.img} source={img}/>
            </View>
            <View>
              <Text style={{textTransform:"capitalize",fontSize:20}}>jane roberts</Text>
              <Text>hello world</Text>
            </View>
            <View style={styles.chatBargeWrapper}>
              <Text style={{color:"#7a55e8"}}>12.54 in the morning</Text>
              <View style={styles.barger}><Text style={{color:'#fff'}}>2</Text></View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
   messagesWrapper:{
    width:'100%',
    flex:1,
    backgroundColor:'#000',
    padding:10
   },
   img:{
    width:'100%',
    height:'100%',
    borderRadius:50,
    objectFit:'contain'
   },
   messageCard:{
    width:'100%',
    height:100,
    backgroundColor:'#fff',
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginBottom:20
   },
   messImgWrapper:{
    width:70,
    height:70,
    borderRadius:50,
   },
   chatBargeWrapper:{
    flexDirection:'column',
    alignItems:'flex-end',
    justifyContent:'center'
   },
   barger:{
    width:30,
    height:30,
    backgroundColor:'#7a55e8',
    borderRadius:50,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
   }
})