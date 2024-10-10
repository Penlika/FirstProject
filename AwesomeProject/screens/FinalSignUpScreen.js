import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

const FinalSignUpScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const validatePassword = (password) => {
      const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      return re.test(password);
    };
  
    const onPressCreateAccount = async () => {
      if (!fullName.trim()) {
        Alert.alert("Error", "Full name cannot be empty.");
        return;
      }
      if (!validateEmail(email)) {
        Alert.alert("Error", "Email must be a valid email address.");
        return;
      }
      if (!validatePassword(password)) {
        Alert.alert("Error", "Password must contain at least 8 characters, including 1 uppercase letter, 1 number, and 1 special character.");
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match.");
        return;
      }
  
      try {
        // Create user with email and password
        await auth().createUserWithEmailAndPassword(email, password);
        const user = auth().currentUser;
  
        if (user) {
          // Update profile to set display name (username)
          await user.updateProfile({
            displayName: fullName,
          });
  
          // Refresh user object to get updated information
          await auth().currentUser.reload();
          const updatedUser = auth().currentUser;
  
          // You can log the displayName here if needed
          console.log("Username (displayName):", updatedUser.displayName);
        }
  
        Alert.alert("Success", "Account created successfully!");
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    };
  const onPressLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require('../image/firebase.png')} style={styles.logo} />
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="#aaa"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={onPressCreateAccount}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
        <Text style={styles.switchText}>
          Already got an account?{" "}
          <Text style={styles.linkText} onPress={onPressLogin}>
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  logo: {
    width: 130,
    height: 190,
    alignSelf: "center",
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#4285F4",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  switchText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
    color: "#888",
  },
  linkText: {
    color: "#4285F4",
    fontWeight: "bold",
  },
});

export default FinalSignUpScreen;
