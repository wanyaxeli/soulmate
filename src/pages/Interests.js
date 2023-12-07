import { View, TouchableOpacity,Pressable,Text,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { interests } from '../components/Data'
import axios from 'axios'
import Icon from "react-native-vector-icons/FontAwesome"
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Interests({navigation}) {
    const[interest,setInterests]=useState([])
    const [token,setToken]=useState()
    const [error,setError]=useState('')
     const handleFinishReg=()=>{
        if(interest.length < 9){
            setError('You must select 9 interests')
        }
        else if(interest.length > 9){
            setError('You have  selected more than 9 interests')
        }
        else if(interest.length === 9) {
            const url='http://10.0.2.2:8000/interests/'
            try{
                axios.post(url,{interest:JSON.stringify(interest)},{headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${token}`
                }})
                .then(res=>{
                    console.log(res.data)
                    navigation.navigate('maintabs')
                })
            }
            catch(error){
                console.log(error)
            }
        }
    }
    const handleSelect = (interestToAdd) => {
        setInterests((prevInterests) => {
          const isInterestAlreadySelected = prevInterests.includes(interestToAdd);
    
          return isInterestAlreadySelected
            ? prevInterests.filter((item) => item !== interestToAdd)
            : [...prevInterests, interestToAdd];
        });
      };
    const renderInterest = (iconName, interestName) => {
        return (
          <Pressable onPress={() => handleSelect(interestName)}>
            <View style={interest.includes(interestName) ? styles.selectedInterests : styles.interest}>
              <View>
                <Icon name={iconName} size={20} color={'#000'} />
              </View>
              <Text>{interestName}</Text>
            </View>
          </Pressable>
        );
      };
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
 useEffect(()=>{
 getToken()
 },[])
  return (
    <SafeAreaView style={styles.InterestWrapper}>
        <ScrollView style={{flex:1}}>
           <View style={{height:'auto',width:'100%',marginBottom:20}}>
            <Text style={{color:'#fff',fontSize:35}}>Select your interests</Text>
            <Text style={{color:'#fff',fontSize:25,marginTop:10}}>To finish registration</Text>
            {error && <Text style={{color:'#ff0000',fontSize:15}}>{error}</Text>}
           </View>
           <View style={[styles.interestsContainer,{height:'auto',width:'100%'}]}>
            {renderInterest('headphones', 'Music')}
            {renderInterest('microphone', 'Singing')}
            {renderInterest('gamepad', 'gaming')}
            {renderInterest('file-movie-o', 'Movies')}
            {renderInterest('microphone', 'Football')}
            {renderInterest('microphone', 'Swimming')}
            {renderInterest('shopping-bag', 'Shopping')}
            {renderInterest('coffee', 'Coffee')}
            {renderInterest('coffee', 'Basketball')}
            {renderInterest('coffee', 'Tiktoking')}
            {renderInterest('coffee', 'Skating')}
            {renderInterest('coffee', 'Drinking')}
            {renderInterest('bus', 'Travel')}
            {renderInterest('car', 'cars')}
            {renderInterest('coffee', 'Biking')}
            {renderInterest('fire', 'Cooking')}
            {renderInterest('coffee', 'Hiking')}
            {renderInterest('spoon', 'Eating')}
           </View>
           <View style={styles.finishBtnWrapper}>
            <Pressable onPress={handleFinishReg} style={styles.finishBtn}><Text style={{color:"#fff",textAlign:'center',fontSize:25}}>Finish</Text></Pressable>
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
        gap:15,
        marginTop:15
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
    },
    selectedInterests:{
        width:113,
        height:50,
        backgroundColor:'#7a55e8',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderRadius:10,
    },
    finishBtnWrapper:{
        width:"100%",
        height:'auto',
        marginTop:40,
    },
    finishBtn:{
        width:'100%',
        height:80,
        backgroundColor:"#7a55e8",
        borderRadius:10,
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
    }
})