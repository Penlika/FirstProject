import { useReducer, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { Button, HelperText, Text, TextInput } from "react-native-paper"

const CreateNewAccount=((navigation))=>{
    const [email, setEmail]=useState("thonguyen@gmail.com")
    const [password, setPassword]=useState("123")
    const [showPassword, setShowPassword]=useState(false)
    const checkEmail=()=>email.includes("@")
    const checkPassword = ()=>{
        let regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
        return regex.test(password)
    }
    const handleLogin=()=>{
        if(email==="thonguyen@gmail.com"&& password==="123")
            navigation.navigation("home",{userName:email})
        else
            alert("Wrong username or password")
    }
    const handleCreateNewAccount=()=>{
        navigation.navigation("createnewaccount")
    }
    const handleForgotPassword=()=>{
        navigation.navigation("forgotpassword")
    }
    return(
        <View style={myStyle.container}>
            <Image style={{alignSelf:"center",margin:10,width:130}} resizeMode="contain" source={require("../image/touchicon.png")}/>
            <Text style={{alignSelf:"center",marginBottom:20}} variant="displaySmall">Create New Account</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Nhap email"
                left={<TextInput.Icon icon="email"/>}
            />
            <HelperText type="error" visible={!checkEmail()}>
                Nhap sai dia chi email
            </HelperText>
            <TextInput
                value={email}
                onChangeText={setPassword}
                placeholder="Nhap email"
                left={<TextInput.Icon icon="key"/>}
                right={<TextInput.Icon icon={(showPassword)? "eye-off":"eye-outline"}
                onPress={()=>setShowPassword(!showPassword)}/>}
                secureTextEntry={!showPassword}
            />
            <HelperText type="error" visible={!checkPassword()}>
                Nhap sai password
            </HelperText>
            <Button>
                Login
            </Button>
        </View>
    )
}
export default CreateNewAccount

const myStyle=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        // alignItems:"center"
    }
})