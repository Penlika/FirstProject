import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateNewAccountScreen from "../screens/CreateNewAccountScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack=createStackNavigator()
const MyStack=()=>{
    return(
        <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="home" component={HomeScreen}/>
            <Stack.Screen name="createnewaccount" component={CreateNewAccountScreen}/>
            <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen}/>
        </Stack.Navigator>
    )
}
export default MyStack