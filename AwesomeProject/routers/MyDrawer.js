import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawerBar from "../Components/CustomDrawerBar"
import Home from "../screens/Home"
import Setting from "../screens/Setting"
import Profile from "../screens/Profile"


const Drawer=createDrawerNavigator()
const MyDrawer=()=>{
    return(
        <Drawer.Navigator
            drawerContent={(props)=>
                <CustomDrawerBar {...props}/>
            }
        >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Setting" component={Setting}/>
        </Drawer.Navigator>
    )
}
export default MyDrawer