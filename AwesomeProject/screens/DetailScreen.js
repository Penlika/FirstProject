import { StyleSheet, Text, View } from "react-native"

 const DetailScreen=()=>{
    return(
        <View style={style.container}>
            <Text>Detail Screen</Text>
        </View>
    )
 }
 export default DetailScreen
 const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
 })