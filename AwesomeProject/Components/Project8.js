import { FlatList, StyleSheet, Text, View } from "react-native";

const renderItem=({item})=>{
    console.log(item)
    return(
        <View style={{padding:10, backgroundColor:"gray",justifyContent:"center",borderTopWidth:0.5,borderBottomWidth:0.5}}>
            <Text>{item.name.firstName+" "+item.name.lastName}</Text>
        </View>
    )
}
const Project8 =()=>{
    return(
        <FlatList
            data={DATA}
            keyExtractor={item=>item.name.id}
            renderItem={renderItem}
        />
    )
}
const DATA=[
{
    name:{
        id:1,
        firstName:"Maeva",
        lastName:"Scott"
    }
},
{
    name:{
        id:2,
        firstName:"Maelle",
        lastName:"Henry"
    }
},
{   
    name:{
        id:3,
        firstName:"Mohamoud",
        lastName:"Faaij"
    }
},
{
    name: {
        id:4,
        firstName: "Malia",
        lastName: "Scott"
    }
},
{
    name: {
        id:5,
        firstName: "Marielle",
        lastName: "Henry"
    }
},
{
    name: {
        id:6,
        firstName: "Malik",
        lastName: "Faaij"
    }
},
{
    name: {
        id:7,
        firstName: "Mara",
        lastName: "Scott"
    }
},
{
    name: {
        id:8,
        firstName: "Mavis",
        lastName: "Henry"
    }
},
{
    name: {
        id:9,
        firstName: "Mohamed",
        lastName: "Faaij"
    }
},
{
    name: {
        id:10,
        firstName: "Maddox",
        lastName: "Faaij"
    }
}]
export default Project8