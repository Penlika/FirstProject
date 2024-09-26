import { useState } from "react"
import { Banner } from "react-native-paper"

const DemoBanner=()=>{
    const [visible, setVisible]=useState(true)
    return(
        <Banner visible={visible}
        actions={[
            {
                label:"OK",
                onPress:()=>setVisible(false),
                icon:"home"
            },
            {
                label:"Cancle",
                onPress:()=>setVisible(true),
                icon:"exit-to-app"
            }
        ]} icon={"star"}>
            Wrong username or password
        </Banner>
    )
}
export default DemoBanner