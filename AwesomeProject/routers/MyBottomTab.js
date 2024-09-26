import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Setting from "../screens/Setting"


const Tab=createMaterialBottomTabNavigator

const MyBottomTab=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon:"home",
                    tabBarBadge:4,
                    title:"Trang Chu"
                }}
            />
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Setting" component={Setting}/>
        </Tab.Navigator>
    )
}
export default MyBottomTab