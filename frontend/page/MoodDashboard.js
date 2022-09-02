import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/topnav";
import BottomNav from "../components/bottomNav";

const MoodDashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("MoodQuiz");
          }}
        >
          <Text style={styles.loginText}>Mood Quiz</Text>
        </TouchableOpacity>

        <Text style={styles.text}>OR</Text>
        <Image
          source={require("../assets/blueBlob.png")}
          style={{ height: 250, width: "100%", marginLeft: 115 }}
        />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("MoodReport");
          }}
        >
          <Text style={styles.loginText}>Mood Report</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav />
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
    width: "90%",
    borderRadius: 25,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 40,
    backgroundColor: "#6698FF",
  },
  loginText: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 35,
  },
  charcterImage: {
    width: "100%",
    height: 250,
  },
});
