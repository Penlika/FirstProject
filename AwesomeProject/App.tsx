import React, { useEffect } from "react"; // Import React and useEffect for side effects
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import firestore, { firebase, getFirestore } from "@react-native-firebase/firestore";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; 

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import CustomDrawerBar from "./Components/CustomDrawerBar"; 
import CustomNavigationBar from "./Components/CustomNavigationBar";
import MyStack from "./routers/MyStack"; // If you need to use MyStack
import FinalStack from "./routers/FinalStack"; // If you need to use FinalStack
import { initializeApp } from "@react-native-firebase/app";

const Stack = createStackNavigator();
const DrawerNav = createDrawerNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAaK_2739wqm928C0f7rIq5-6zdLmO2-b8",
  authDomain: "reacttest-26675.firebaseapp.com",
  projectId: "reacttest-26675",
  storageBucket: "reacttest-26675.appspot.com",
  messagingSenderId: "583761591180",
  appId: "1:583761591180:android:34dc2bd8ad767877e834a9",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); // Initialize Firebase
}


const App = () => {
  // Use useEffect to add a new user only once when the app starts
  useEffect(() => {
    const tbUsers = firestore().collection("USERS");

    // Set a new user; you might want to check if the user already exists
    tbUsers
      .doc("penlika@gmail.com")
      .set({
        fullname: "Nguyen Huu Tho",
        userName: "penlika@gmail.com",
        password: "123", // Avoid storing passwords in plaintext
      })
      .then(() => console.log("Add new user!"))
      .catch((error) => console.error("Error adding user: ", error));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <NavigationContainer>
      <PaperProvider>
        {/* Uncomment your desired navigation structure */}
        {/* <MyStack/> */}
        <FinalStack/>
        {/* Example of Drawer Navigation */}
        {/* <DrawerNav.Navigator
          drawerContent={(props) => <CustomDrawerBar {...props} />}
          initialRouteName="Home"
        >
          <DrawerNav.Screen name="Home" component={HomeScreen} />
          <DrawerNav.Screen name="Detail" component={DetailScreen}/>
        </DrawerNav.Navigator> */}
        
        {/* Example of Stack Navigation */}
        {/* <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator> */}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
