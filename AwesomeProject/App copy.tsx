import { Text, View } from "react-native"

 const App = ()=>{
    const f1=(arr:any)=>{
      return Math.max(...arr);
    }
    const a=[2,1,3,5]
    const b=[...a, 82, 3]
    console.log(b)
    return (
      <View style={{flex:1, backgroundColor:"red", justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:20, fontWeight:"bold"}}> Hello</Text>

      </View>
    )
 }
 export default App;