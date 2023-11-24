import React,{useState} from 'react'
import {RadioButton}from "react-native-paper"
import { View,Text,TextInput,ScrollView,TouchableOpacity,StyleSheet,SafeAreaView,KeyboardAvoidingView} from 'react-native'
export default function SignIn({navigation}) {
    const [gender,setGender]=useState('Gender')
    const handleToRegister=()=>{
        navigation.navigate('signIn')
    }
    const handleRegister=()=>{
        navigation.navigate('interests')
    }
  return (
   <SafeAreaView style={styles.signInWrapper}>
       <ScrollView>
       <KeyboardAvoidingView>
         <View style={styles.signInContainer}>
                <View style={styles.signHeaderWrapper}>
                    <Text style={[styles.headerText,{color:'white'}]}>Join us for free</Text>
                    <Text style={{color:'#e8e8ee',fontSize:28,paddingBottom:10}}>And be connected with the love</Text>
                    <Text style={{color:'#e8e8ee',fontSize:23}}> Of you life</Text>
                </View>
            <View style={styles.signInInputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={{flex:1,color:'#fff'}}
                    placeholder='First Name'
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={{flex:1,color:'#fff'}}
                    placeholder='Last Name'
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={{flex:1,color:'#fff'}}
                    placeholder='Email'
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View  style={styles.inputContainer}>
                    <TextInput 
                    style={{flex:1,color:'#fff'}}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View  style={styles.inputContainer}>
                    <TextInput 
                    style={{flex:1,color:'#fff'}}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    placeholderTextColor={'#fff'}
                    />
                </View>
                <View style={styles.genderWrapper}>
                <Text style={{color:"#fff",fontSize:18,marginTop:-20}}>Gender</Text>
                <View style={styles.RadioBTnWrapper}>
                     <View>
                     <RadioButton
                    value="Male"
                    status={ gender === 'Male' ? 'checked' : 'unchecked' }
                    onPress={() => setGender('Male')}
                    />
                    <Text style={{color:"#fff"}}>Male</Text>
                     </View>
                    <View>
                    <RadioButton
                    value="Female"
                    status={ gender === 'Female' ? 'checked' : 'unchecked' }
                    onPress={() => setGender('Female')}
                    />
                    <Text style={{color:"#fff"}}>Female</Text>
                    </View>
                </View>
                </View>
                <View>
                    <TouchableOpacity onPress={handleRegister} style={styles.signbtnWrapper}>
                        <Text style={{color:'#fff',fontSize:20}}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.signbtnWrapper,styles.loginWithWrapper]}>
                        <Text style={{color:'#000',fontSize:20}}>Register with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signInTextWrapper}>
                    <Text style={{color:'#fff',fontSize:18}}>Already have account? <TouchableOpacity onPress={handleToRegister}><Text style={{color:'#7a55e8'}}>sign in</Text></TouchableOpacity> </Text>
                </View>
            </View>
         </View>
        </KeyboardAvoidingView>
       </ScrollView>
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
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'auto',
    },
    genderWrapper:{
        flexDirection:'row',
        alignItems:'center' ,
        justifyContent:"flex-start",
        gap:40,
    },
    RadioBTnWrapper:{
        flexDirection:'row',
        alignItems:'center' ,
        gap:50
    }
})