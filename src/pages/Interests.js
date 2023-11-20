import { View, TouchableOpacity,Text,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
export default function Interests() {
  return (
    <SafeAreaView style={styles.InterestWrapper}>
        <ScrollView style={{flex:1}}>
           <View style={{height:'auto',width:'100%',marginBottom:20}}>
            <Text style={{color:'#fff',fontSize:35}}>Select your interests</Text>
            <Text style={{color:'#fff',fontSize:25,marginTop:10}}>To finish registration</Text>
           </View>
           <View style={[styles.interestsContainer,{height:'auto',width:'100%'}]}>
            <TouchableOpacity>
            <View style={styles.interest}>
              <Icon name='headphones' size={20} color={'#000'} />
              <Text style={{textTransform:'capitalize'}}>music</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.interest}>
              <Icon name='headphones' size={20} color={'#000'} />
              <Text style={{textTransform:'capitalize'}}>music</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.interest}>
              <Icon name='headphones' size={20} color={'#000'} />
              <Text style={{textTransform:'capitalize'}}>music</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.interest}>
              <Icon name='headphones' size={20} color={'#000'} />
              <Text style={{textTransform:'capitalize'}}>music</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.interest}>
              <Icon name='headphones' size={20} color={'#000'} />
              <Text style={{textTransform:'capitalize'}}>music</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.interest}>
              <Icon name='headphones' size={20} color={'#000'} />
              <Text style={{textTransform:'capitalize'}}>music</Text>
            </View>
            </TouchableOpacity>
           </View>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    InterestWrapper:{
        flex:1,
        backgroundColor:'#000',
        width:'100%',
        padding:20
    },
    interestsContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        gap:15
    },
    interest:{
        width:113,
        height:50,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderRadius:10,
    }
})