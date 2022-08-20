import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Firebase authentication
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  
  // Search for user in the backend database
  const logined = async () => {
    console.log(email);
    await Axios.post("http://192.168.18.6:3001/logined", {
      email: email,  
      password: password},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => {
        console.log(data);
        if (data == "True") {
          navigation.navigate("Home");
        }
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/background-image.jpeg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Image
              source={require("../assets/logo.jpg")}
              style={{ height: 120, width: null }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={{ paddingLeft: 30 }}>
            <TextInput
              style={styles.input}
              value={username}
              placeholder={"User name"}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize={"none"}
            />
            <TextInput
              style={styles.input}
              value={password}
              placeholder={"Password"}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              autoCapitalize={"none"}
            />
          </View>
          <View style={{ justifyContent: "center", flex: 1, padding: 30 }}>
            <TouchableOpacity 
              style={styles.loginBtn}
              onPress={() => {
                handleLogin();
                logined();
              }}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  input: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 10,
    paddingTop: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: "thistle",
    borderRadius: 10,
    width: 300,
  },

  loginBtn: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    backgroundColor: "#FEA3AA",
  },
  loginText: {
    color: "#FFFFFF",
  },
});
