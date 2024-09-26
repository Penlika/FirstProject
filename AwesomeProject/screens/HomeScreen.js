import { useLayoutEffect } from "react"
import { StyleSheet, View } from "react-native"
import { Avatar, Button, Text } from "react-native-paper"
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar"

const HomeScreen=({navigation})=>{
    return(
        <View style={style.container}>
            <Text>Home Screen</Text>
            <Button mode="contained" onPress={()=>navigation.navigate("Detail")}>
                Go to details
            </Button>
        </View>
    )
}
export default HomeScreen
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})