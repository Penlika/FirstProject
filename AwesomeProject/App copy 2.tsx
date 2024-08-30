import { View } from "react-native";
import Cat1, {f1,pi} from "./Components/Cat";

const App= ()=>{
  console.log(pi)
  console.log(f1(25))
  return(
    <View style={{backgroundColor:"limegreen", flex:1}}>
      <Cat1 name="Tho"/>
      <Cat1 name="Long"/>
      <Cat1 name="Dat"/>
    </View>
  )
}
 export default App;