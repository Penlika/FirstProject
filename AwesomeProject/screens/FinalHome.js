import { FlatList, View, Alert } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth"; // Import Firebase Auth

const cTodos = firestore().collection("Todos");

const FinalHome = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const userId = auth().currentUser.uid; // Get the current user's ID
    const userName = auth().currentUser.displayName; // Get the current user's email

    const addNewTodo = () => {
        cTodos.add({
            title: todo,
            complete: false,
            userId: userId, // Add user ID to the to-do
        })
        .then(doc => {
            doc.update({ id: doc.id });
            console.log("Add new todo!");
            setTodo(""); // Clear input after adding
        })
        .catch(e => console.log(e));
    };

    useEffect(() => {
        const unsubscribe = cTodos
            .where("userId", "==", userId) // Fetch todos for the current user only
            .onSnapshot((Todos) => {
                let result = [];
                Todos.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id }); // Include the ID in the result
                });
                setTodos(result);
                console.log(todos);
            });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [userId]); // Depend on userId

    const updateTodo = (item) => {
        cTodos.doc(item.id).update({
            complete: !item.complete,
        })
        .then(() => console.log("Update todo"))
        .catch(e => console.log(e));
    };

    const onPressSignOut = async () => {
        await auth().signOut();
        navigation.navigate("Login");
    };

    const renderItem = ({ item }) => {
        return (
            <Button
                icon={item.complete ? "check" : "star-outline"}
                style={{
                    justifyContent: "flex-start",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    paddingVertical: 10,
                }}
                labelStyle={{ color: "black", textAlign: "left" }}
                contentStyle={{ justifyContent: "flex-start" }}
                onPress={() => updateTodo(item)}
            >
                {item.title}
            </Button>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: "white" }}>
                <Appbar.Content
                    title={userName} // Change title to user's email
                    style={{ alignItems: "center" }}
                    color="black"
                />
                <Appbar.Action icon="logout" onPress={onPressSignOut} />
            </Appbar.Header>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <TextInput
                    value={todo}
                    placeholder="Add new entity"
                    onChangeText={setTodo}
                    style={{ flex: 1, marginRight: 10 }}
                />
                <Button mode="contained" onPress={addNewTodo} style={{ justifyContent: "center" }}>
                    Add
                </Button>
            </View>
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={{ padding: 20 }}
            />
        </View>
    );
};

export default FinalHome;
