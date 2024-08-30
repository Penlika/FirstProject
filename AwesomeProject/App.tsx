//Project 1

// import { View } from "react-native";
// import Cat1, {f1,pi} from "./Components/Cat";
// import Project1 from "./Components/Project1";

// const App= ()=>{
//   console.log(pi)
//   console.log(f1(25))
//   return(
//     <View>
//       <Project1></Project1>
//     </View>
//   )
// }
//  export default App;

//Project 2

import { StyleSheet, View } from "react-native"
import Project1 from "./Components/Project1";
import Project2 from "./Components/Project2"
import Project3 from "./Components/PRoject3";
import Project4 from "./Components/Project4";
import Project5 from "./Components/Project5";
import Project6 from "./Components/Project6";
import Project7 from "./Components/Project7";
import Project8 from "./Components/Project8";

const App= ()=>{
    return(
        <View style={myStyle.container}>
          {/* <Project1></Project1> */}
          {/* <Project2></Project2> */}
          {/* <Project3></Project3> */}
          {/* <Project4></Project4> */}
          {/* <Project5></Project5> */}
          {/* <Project6></Project6> */}
          {/* <Project7></Project7> */}
          <Project8></Project8>
        </View>
    )
}
export default App;

const myStyle = StyleSheet.create(
  {
    container:{
      flex:1
    }
  }
)