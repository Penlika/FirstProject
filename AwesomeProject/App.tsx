import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Add Drawer navigator

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import CustomDrawerBar from "./Components/CustomDrawerBar"; // Assuming this is custom drawer content
import CustomNavigationBar from "./Components/CustomNavigationBar";

const tbUsers = firestore().collection("USERS");
const Stack = createStackNavigator();
const DrawerNav = createDrawerNavigator();

const App = () => {
  tbUsers
    .doc("penlika@gmail.com")
    .set({
      fullname: "Nguyen Huu Tho",
      userName: "penlika@gmail.com",
      password: "123",
    })
    .then(() => console.log("Add new user!"));

  return (
    <NavigationContainer>
      <PaperProvider>
        <DrawerNav.Navigator
          drawerContent={(props) => <CustomDrawerBar {...props} />}
          initialRouteName="Home"
        >
          <DrawerNav.Screen name="Home" component={HomeScreen} />
          <DrawerNav.Screen name="Detail" component={DetailScreen}/>
        </DrawerNav.Navigator>
        {/* <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header:(props)=><CustomNavigationBar {...props}/>,
          }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator> */}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;