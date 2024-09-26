import { Text, View } from "react-native"
import firestore, { query } from "@react-native-firebase/firestore"
import { useEffect, useState } from "react"

const cUSERS=firestore().collection("USERS")
const cPRODUCTS=firestore().collection("PRODUCTS")
const DemoFireStore=()=>{
    cPRODUCTS.add({
        name:"Mi goi",
        price:1000000
    })
    .then(
        d=>
        {
            d.update({id: d.id})
        }
    )
    const [user, setUser]=useState({})
    useEffect(()=>{
        cUSERS.doc("penlika@gmail.com")
        .onSnapshot(u=>{
            setUser(u.data())
        })
    },[cUSERS])
    cUSERS.where("age",">=",20)
    .get()
    .then(
        query=>{
            query.forEach(d=>console.log(d.data()))
        }
    )
    return(
        <View style={{flex:1,justifyContent:"center"}}>
            <Text>{user.fullName}</Text>
        </View>
    )
}
export default DemoFireStore