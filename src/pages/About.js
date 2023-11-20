import { View, Text,Image,TouchableOpacity ,SafeAreaView,ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import img from "../assets/images/women3.jpg"
import Icon from "react-native-vector-icons/FontAwesome"
export default function About({navigation:{goBack}}) {
    const handleGoBack=()=>{
       goBack()
    }
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
                <TouchableOpacity style={[styles.Btn]}>
                <Icon name='bookmark-o' color={'#000'} size={22} />
                </TouchableOpacity>
              </View>
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
        height:400,
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
    }
})