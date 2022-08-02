import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNav from "../components/topnav";
import BottomNav from "../components/BottomNav";

const MoodQuiz = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNav />

      <Text style={styles.text}>Choose your mood</Text>

      <View style={styles.right}>
        <TouchableOpacity>
          <ImageBackground
            source={require("../assets/anger.jpg")}
            style={{ height: 140, width: 110, marginBottom: 20 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imagetext}>Anger</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.emotionbtn}>
          <ImageBackground
            source={require("../assets/surprise.jpg")}
            style={{ height: 140, width: 110, marginBottom: 20 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imagetext}>Surprise</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.emotionbtn}>
          <ImageBackground
            source={require("../assets/sadness.jpg")}
            style={{ height: 140, width: 110, marginBottom: 20 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imagetext}>Sadness</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.left}>
        <TouchableOpacity>
          <ImageBackground
            source={require("../assets/Happiness.jpg")}
            style={{ height: 140, width: 110, marginBottom: 20 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imagetext}>Happiness</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity>
          <ImageBackground
            source={require("../assets/disgust.jpg")}
            style={{ height: 140, width: 110, marginBottom: 20 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imagetext}>Disgust</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity>
          <ImageBackground
            source={require("../assets/fear.jpg")}
            style={{ height: 140, width: 110, marginBottom: 20 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imagetext}>Fear</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <BottomNav />
    </View>
  );
};

export default MoodQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  text: {
    paddingTop: 50,
    paddingBottom: 50,
    fontWeight: "bold",
    fontSize: 30,
  },
  right: {
    width: "50%",
  },
  imagetext: {
    fontWeight: "bold",
    color: "black",
    fontSize: 13,
    position: "absolute",
    justifyContent: "center",
    top: 110,
    left: 33,
    right: 10,
    bottom: 10,
  },
});
