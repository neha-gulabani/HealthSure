import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TopNav from "../components/topnav";
import BottomNav from "../components/bottomNav";

const Profile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView>
        <View style={styles.profileTitleBox}>
          <Text style={styles.profileTitle}>Profile</Text>
          <View style={styles.profileBox}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#000000"
              onChangeText={(firstname) => setFirstname(firstname)}
            />

            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#000000"
              onChangeText={(lastname) => setLastname(lastname)}
            />

            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#000000"
              onChangeText={(username) => setUsername(username)}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#000000"
              onChangeText={(password) => setPassword(password)}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000000"
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              style={styles.input}
              placeholder="Contact"
              placeholderTextColor="#000000"
              onChangeText={(contact) => setContact(contact)}
            />
          </View>
        </View>
        <Image
          style={styles.charcterImage}
          source={require("../assets/blueBlob.png")}
        />
      </ScrollView>
      <BottomNav />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profileTitleBox: {
    backgroundColor: "#FEA3AA",
    height: 200,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    alignItems: "center",
  },
  profileTitle: {
    fontSize: 32,
    color: "#FFFFFF",
    paddingTop: 50,
  },
  profileBox: {
    height: 500,
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#808080",
    marginTop: 10,
    // flexDirection: "row",
    // // flexWrap: "wrap",
    // alignItems: "flex-start",
    // flex:1,
    flexDirection: "column",
  },
  input: {
    height: 20,
    flex: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#808080",
  },
  charcterImage: {
    width: "100%",
    height: 250,
    marginTop: 350,
    marginLeft: 118,
  },
});
export default Profile;
