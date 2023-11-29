import { View, TouchableOpacity,Pressable,Text,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { interests } from '../components/Data'
import axios from 'axios'
import Icon from "react-native-vector-icons/FontAwesome"
export default function Interests({navigation}) {
    const [selectedinterests,SetSelectedInterest]=useState([])
    const [selected,SetSelected]=useState(false)
    const [error,setError]=useState('')
    const handleSelecltedInterests=(id)=>{
        let interest = interests.find((item) => item.id === id);

    SetSelectedInterest((prevSelectedInterests) => {
        if (prevSelectedInterests.some((item) => item.id === id)) {
            // If the interest is already selected, remove it
            return prevSelectedInterests.filter((item) => item.id !== id);
        } else {
            // If the interest is not selected, add it
            return [...prevSelectedInterests, interest];
        }
    });

    SetSelected((prevSelected) => ({
        ...prevSelected,
        [id]: !prevSelected[id], // Toggle the selected state
    }));
    }
    const handleFinishReg=()=>{
        if(selectedinterests.length < 9){
            setError('You must select 9 interests')
        }
        else if(selectedinterests.length > 9){
            setError('You have  selected more than 9 interests')
        }
        else if(selectedinterests.length === 9) {
            console.log(selectedinterests)
            try{
                axios.post()
            }
            catch(error){
                console.log(error)
            }
            navigation.navigate('maintabs')
        }
    }

  return (
    <SafeAreaView style={styles.InterestWrapper}>
        <ScrollView style={{flex:1}}>
           <View style={{height:'auto',width:'100%',marginBottom:20}}>
            <Text style={{color:'#fff',fontSize:35}}>Select your interests</Text>
            <Text style={{color:'#fff',fontSize:25,marginTop:10}}>To finish registration</Text>
            {error && <Text style={{color:'#ff0000',fontSize:15}}>{error}</Text>}
           </View>
           <View style={[styles.interestsContainer,{height:'auto',width:'100%'}]}>
            {interests.map(item=>{
                return(
                <Pressable key={item.id} onPress={()=>handleSelecltedInterests(item.id)}>
                <View style={selected[item.id]?styles.selectedInterests:styles.interest}>
                <Text style={{color:selected[item.id]?"#fff":"#000"}}>{item.icon}</Text>
                <Text style={[{color:selected[item.id]?"#fff":"#000",textTransform:'capitalize'}]}>{item.interest}</Text>
                </View>
                </Pressable>
                )
            })}
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