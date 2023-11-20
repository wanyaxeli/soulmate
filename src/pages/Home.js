import { View, SafeAreaView,ImageBackground,TouchableOpacity,TextInput,Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import {Data} from "../components/Data"
const img = require("../assets/images/man.jpg")
const img1 = require("../assets/images/women3.jpg")
import Carousel from "react-native-snap-carousel"
export default function Home({navigation}) {
    const handleToAbout=()=>{
        navigation.navigate("about")
    }
    const renderItem=({item, index}) => {
        return (
        <TouchableOpacity onPress={handleToAbout}>
            <View  style={styles.bannerContainer}>
               <Image style={styles.imageBanner} source={item.img}/>
                <View style={styles.bannerCover}>
                    <View style={styles.bannerContentWrapper}>
                    <View style={styles.closeBtnWRapper}>
                        <TouchableOpacity>
                            <Text style={{color:"#000",fontSize:35}}>&times;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bannerUserDetailWrapper}>
                        <Text  style={{fontSize:28,textTransform:'capitalize'}}>{item.name}</Text>
                        <Text style={{fontSize:18}}>{item.distance}</Text>
                    </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        );
    }
  return (
    <SafeAreaView style={styles.homeRapper}>
        <View>
        <View style={styles.homeHeaderWrapper}>
           <View style={styles.homeHeaderBarContainer}></View>
           <View style={styles.homeHeaderBarContainer}>
            <Image style={styles.profileImg} source={img}/>
           </View>
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
           data={Data} 
           layout={'stack'}
           renderItem={renderItem}
           sliderWidth={400}
           itemWidth={385}
          />
          {/* <View style={styles.bannerContainer}>
           <Image style={styles.imageBanner} source={img1}/>
           <View style={styles.bannerCover}>
            <View style={styles.bannerContentWrapper}>
               <View style={styles.closeBtnWRapper}>
                <TouchableOpacity>
                    <Text style={{color:"#000",fontSize:35}}>&times;</Text>
                </TouchableOpacity>
               </View>
               <View style={styles.bannerUserDetailWrapper}>
                <Text style={{fontSize:30}}>Jane Doe</Text>
                <Text style={{fontSize:18}}>3km away</Text>
               </View>
            </View>
           </View>
          </View> */}
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
        backgroundColor:'white'
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