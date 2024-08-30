import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const Cat=(props)=>{
    const [isHungry, SetIsHungry] = useState(true)
    return(
        <View style = {(myStyle.container)}>
            <Text>Hello, My name is {props.name}, I am {(isHungry)?"Hungry":"Full"}</Text>
            <Button 
                title="Pour me some milk" 
                onPress={()=> SetIsHungry(false)}
            />
        </View>
    )
}
const pi=3.14
const f1=(x)=>{
    return Math.sqrt(x)
}

export {pi, f1}
export default Cat

const myStyle=StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    }
})