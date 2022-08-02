import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/topnav";
import BottomNav from "../components/BottomNav";

const MoodDashboard = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <TopNav />
        <View style={{ justifyContent: "center", flex: 1, padding: 30 }}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate("MoodQuiz");
            }}
          >
            <Text style={styles.loginText}>Mood quiz</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Catchhhhh phrassssse</Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate("MoodReport");
            }}
          >
            <Text style={styles.loginText}>Mood Report</Text>
          </TouchableOpacity>
          <BottomNav />
        </View>
      </View>

  );
};

export default MoodDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  loginBtn: {
    width: "100%",
    borderRadius: 25,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    backgroundColor: "#6698FF",
  },
  loginText: {
    color: "white",
    fontSize: 25,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },

  text: {
    justifyContent: "center",
    fontSize: 26,
    paddingBottom: 50,
    paddingLeft: 30,
  },
});
