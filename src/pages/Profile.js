import { View,SafeAreaView,ScrollView,StyleSheet,Image, Text } from 'react-native'
import React from 'react'
export default function Profile() {
   
  return (
    <SafeAreaView style={styles.profileWrapper}>
        <View style={styles.profileBanner}>
            <Text>hello</Text>
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
    height:300,
    backgroundColor:'#7a55e8',
  }
})