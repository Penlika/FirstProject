import { Appbar } from "react-native-paper"

const DemoAppbar=()=>{
    const handleGoBack=()=>alert("Go Home")
    const handleSearch=()=> alert("handleSearch")
    const handleShowMenu=()=> alert("handleShowMenu")
    return(
        <Appbar.Header>
            <Appbar.BackAction onPress={handleGoBack}/>
            <Appbar.Content title="Home"/>
            <Appbar.Action icon={"magnify"} onPress={handleSearch}/>
            <Appbar.Action icon={"dots-vertical"} onPress={handleShowMenu}/>
        </Appbar.Header>
    )
}
export default DemoAppbar