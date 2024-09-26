import { useState } from "react"
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"

const App=()=>{
  const[username, setUserName]= useState("sadasdadas")
  const[count, setCount]=useState(0)
  const onPress=()=>{
    setCount(count+1)
  }
  return(
    <View style={myStyle.container}>
      {/* <View style={{...myStyle.box,backgroundColor:"red"}}>

      </View>
      <View style={{...myStyle.box,backgroundColor:"green"}}>

      </View>
      <View style={{...myStyle.box,backgroundColor:"blue"}}>

      </View> */}

      {/* <TextInput
        style={{height:50,width:"100%",borderColor:"blue",borderWidth:1}}
        onChangeText={setUserName}
        //<=>onChangeText={(text)=>setUserName(text)}
        value={username}
        keyboardType="default"
        placeholder="Gà"
        secureTextEntry={true}
      /> */}

      {/* <Image
        //source={require("./image/Screenshop.png")}
        source={{uri:"https://www.drlsdirect.com/cdn/shop/files/BMW3SeriesF30-YellowHeadlight_DRLsDirect.com.png?v=1685722748&width=750"}}
        style={{flex:1,width: 400, height: 400}}
      /> */}

      {/* <ImageBackground
      source={require("./image/Screenshop.png")}
      style={{flex:1}}>
        <Text style={{fontSize:30, color:"red"}}>
        Hello
        </Text>

      </ImageBackground> */}

      <Text>Count: {count}</Text>
      <TouchableHighlight
      style={myStyle.button}
      onPress={onPress}>
        <Text style={myStyle.buttonText}>Press me</Text>
      </TouchableHighlight>
    </View>
  )
}

export default App

const myStyle=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"yellow",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  box:{
    height:100,
    width:100
  },
  button:{
    height:50,
    width:"90%",
    borderRadius:95,
    backgroundColor:"aqua",
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    fontSize:20,
    fontWeight:"bold"
  }
})