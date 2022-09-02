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
import { StackNavigator } from "react-navigation";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  // const { navigate } = this.props.navigation;
  // const navigation = this.props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/background-image.jpeg")}
        style={styles.backgroundImage}
      >
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Image
            source={require("../assets/logo.jpg")}
            style={{ height: 120, width: null }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </View>
        <View style={{ justifyContent: "center", flex: 1, padding: 30 }}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
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
