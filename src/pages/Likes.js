import { View, Text,Image ,StyleSheet,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import { Data } from '../components/Data'
import img from "../assets/images/mowen.jpg"
export default function Likes() {
  return (
    <SafeAreaView style={styles.LikesWrapper}>
      <ScrollView style={{flex:1,paddingHorizontal:10}}>
        <View style={styles.likesWrapper}>
            <View style={styles.goBackWrapper}>
              <TouchableOpacity>
              <Icon name='arrow-left' color={'#000'} size={22} />
              </TouchableOpacity>
            </View>
            <View style={styles.goBackWrapper}></View>
        </View>
        <View style={styles.likesUserWrapper}>
            {Data.map((item,i)=>{
              return(
            <View key={i} style={styles.likesCardWrapper}>
                  <Image source={item.img} style={styles.LikesImgWrapper}/>
                  <View style={styles.cardCover}>
                    <View style={styles.cardNameWrapper}>
                          <View>
                            <Text style={{fontSize:18,textTransform:'capitalize'}}>{item.name}</Text>
                          </View>
                          <TouchableOpacity style={styles.chatBtnWrapper}>
                          <Icon name='bookmark'color={'#000'} size={20} />
                          </TouchableOpacity>
                    </View>
                  </View>
            </View>
              )
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
   LikesWrapper:{
    backgroundColor:'#000',
    flex:1,
   },
   likesWrapper:{
    width:'100%',
    height:80,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   },
   goBackWrapper:{
    width:50,
    height:50,
    backgroundColor:"#fff",
    borderRadius:50,
    display:"flex",
    justifyContent:'center',
    alignItems:'center'
   },
   likesUserWrapper:{
    width:'100%',
    height:"auto",
    alignItems:'center',
    flexDirection:"row",
    justifyContent:'space-between',
    flexWrap:'wrap',
    gap:30
   },
   likesCardWrapper:{
    height:300,
    width:'46%',
    borderRadius:15,
    position:'relative'
   },
   LikesImgWrapper:{
    width:'100%',
    height:"100%",
    objectFit:'cover',
    borderRadius:15
   },
   cardCover:{
    position:'absolute',
    top:0,
    width:'100%',
    height:"100%",
    borderRadius:15,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"flex-end"
   },
   cardNameWrapper:{
    width:'100%',
    height:60,
    borderRadius:10,
    backgroundColor:"#fff",
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    opacity:.65
   },
   chatBtnWrapper:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:"#fff",
    display:'flex',
    alignItems:'center',
    justifyContent:"center"
   }
})