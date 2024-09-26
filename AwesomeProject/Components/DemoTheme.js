import { View } from "react-native"
import { Text, useTheme } from "react-native-paper"

const DemoTheme=()=>{
    const theme=useTheme()
    return(
        <View style={{
            backgroundColor:theme.colors.secondaryContainer,
            justifyContent:"center",
            alignItems:"center",
            flex:1
        }}>
            <Text style={{color:theme.colors.onSecondaryContainer}}>Hello</Text>
        </View>
    )
}
export default DemoTheme