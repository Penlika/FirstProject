import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { firebase } from "@react-native-firebase/auth"; // Import Firebase Authentication

const FinalLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onPressLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Home");
      setEmail("");
      setPassword("");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image source={require("../image/firebase.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <Text style={styles.signUpText} onPress={onPressSignUp}>
          Sign up
        </Text>
      </View>
    </View>
  );
};

export default FinalLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 130,
    height: 190,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#4285F4",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
