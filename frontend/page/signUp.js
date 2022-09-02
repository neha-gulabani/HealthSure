import React, { FC, ReactElement, useState } from "react";
import {
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import { auth } from "../";
import Axios from "axios";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  let checked;
  const [check, setChecked] = React.useState(false);

  // Firebase authentication
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  // Store user to backend database
  const signed = async () => {
    console.log(firstname);
    await Axios.post(
      "http://192.168.18.6:3001/signed",
      {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        email: email,
        contact: contact,
      },
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
    <ScrollView>
      <View>
        <ImageBackground
          resizeMode="cover"
          source={require("../assets/background-image.jpeg")}
          style={styles.backgroundImage}
        >
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              paddingTop: 55,
            }}
          >
            <Image
              source={require("../assets/logo.jpg")}
              style={{ height: 120, width: null }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              value={firstname}
              placeholder={"First name"}
              onChangeText={(text) => setFirstname(text)}
            />
            <TextInput
              style={styles.input}
              value={lastname}
              placeholder={"Last name"}
              onChangeText={(text) => setLastname(text)}
            />

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

            <TextInput
              style={styles.input}
              value={email}
              placeholder={"Email"}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={"none"}
            />
            <TextInput
              style={styles.input}
              value={contact}
              placeholder={"Contact No."}
              onChangeText={(text) => setContact(text)}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={check ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!check);
              }}
            />
            <Text style={styles.label}>
              I agree with the terms and conditions.
            </Text>
          </View>
          <View style={{ justifyContent: "center", flex: 1, padding: 30 }}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                handleSignUp();
                signed();
              }}
            >
              <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
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
  title: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "monospace",
    paddingBottom: 40,
  },

  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
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
    backgroundColor: "#FEA3AA",
  },
  loginText: {
    color: "#FFFFFF",
  },
});
