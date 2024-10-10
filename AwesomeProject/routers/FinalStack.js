import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CreateNewAccountScreen from "../screens/CreateNewAccountScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import TodoApp from "../screens/todoApp";
import FinalHome from "../screens/FinalHome";
import FinalLoginScreen from "../screens/FinalLoginScreen";
import FinalSignUpScreen from "../screens/FinalSignUpScreen";

const Stack=createStackNavigator()
const FinalStack=()=>{
    return(
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Login" component={FinalLoginScreen}/>
            <Stack.Screen name="Home" component={FinalHome}/>
            <Stack.Screen name="SignUp" component={FinalSignUpScreen}/>
        </Stack.Navigator>
    )
}
export default FinalStack