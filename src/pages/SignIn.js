import React,{useState} from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView,KeyboardAvoidingView} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function SignIn({navigation}) {
    const initialState={
        email:"",
        password:''
    }
    const [value,setValues]=useState(initialState)
    const handleToRegister=()=>{
        navigation.navigate('register')
    }
    const handleLogin=()=>{
       
        console.log(value)
        const url='http://10.0.2.2:8000/api/token/'
        try{
           axios.post(url,value,{headers:{
            'Content-Type':"Application/json"
           }})
           .then(res=>{
            console.log(res.data)
            const {access}=res.data
            console.log(access)
            AsyncStorage.setItem('token',JSON.stringify(access))
            navigation.navigate('maintabs')
           })
        }
        catch(error){
            console.log(error)
        }
    }
    const handleChange=(text,name)=>{
        setValues(pre=>({...pre,[name]:text}))
    }
  return (
   <SafeAreaView style={styles.signInWrapper}>
        <KeyboardAvoidingView>
         <View style={styles.signInContainer}>
                <View style={styles.signHeaderWrapper}>
                    <Text style={[styles.headerText,{color:'white'}]}>Let's sign you in</Text>
                    <Text style={{color:'#e8e8ee',fontSize:28,paddingBottom:10}}>Welcome back.</Text>
                    <Text style={{color:'#e8e8ee',fontSize:23}}>You've been missed?</Text>
                </View>
            <View style={styles.signInInputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={{flex:1,color:'#fff'}}
                    placeholder='Email'
                    placeholderTextColor={'#fff'}
                    onChangeText={(text)=>handleChange(text,'email')}
                    />
                </View>
                <View  style={styles.inputContainer}>
                    <TextInput 
                    style={{flex:1,color:'#fff'}}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor={'#fff'}
                    onChangeText={(text)=>handleChange(text,'password')}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={handleLogin} style={styles.signbtnWrapper}>
                        <Text style={{color:'#fff',fontSize:20}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.signbtnWrapper,styles.loginWithWrapper]}>
                        <Text style={{color:'#000',fontSize:20}}>Login with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signInTextWrapper}>
                    <TouchableOpacity>
                    <Text style={{color:'#7a55e8',fontSize:18}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#fff',fontSize:18}}>Don't have account? <TouchableOpacity onPress={handleToRegister}><Text style={{color:'#7a55e8'}}>sign up</Text></TouchableOpacity> </Text>
                </View>
            </View>
         </View>
        </KeyboardAvoidingView>
   </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    signInWrapper:{
        flex:1,
        backgroundColor:'#000',
        paddingHorizontal:10,
        paddingTop:15,
    },
    signInContainer:{
        height:'100%',
        width:'100%',
        display:"flex",
        flexDirection:'column',
        justifyContent:'space-between',
    },
    signHeaderWrapper:{
    width:'100%',
    height:'auto',
    },
    headerText:{
        fontSize:40,
        paddingBottom:10
    },
    signInInputWrapper:{
        width:'100%',
        height:'auto',
    },
    inputContainer:{
        width:'100%',
        height:60,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:15,
        paddingHorizontal:15,
        marginVertical:20
    },
    signbtnWrapper:{
        width:'100%',
        height:60,
        borderRadius:10,
        backgroundColor:'#7a55e8',
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        marginVertical:15
    },
    loginWithWrapper:{
        backgroundColor:"#fff"
    },
    signInTextWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'auto',
    }
})