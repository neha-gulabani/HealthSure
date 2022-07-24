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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            <TouchableOpacity style={styles.loginBtn}>
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
