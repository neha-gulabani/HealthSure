import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import TopNav from "../components/topnav";
import BottomNav from "../components/BottomNav";
import Axios from "axios";
import moment from "moment";

const MoodQuiz = () => {
  // set state
  const [mood, setMood] = useState("");
  const [colour, setColour] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  // fetch user's email from previous pages
  const route = useRoute();
  const userEmail = route.params.email;

  // set date format to Mon, Aug 15, 2022 9:00pm
  const Date = moment().format('llll');

  // function to call when planet is clicked
  const setMoods = (mood, colour, date, email) => {
    setMood(mood);
    setColour(colour);
    setDate(date);
    setEmail(email);
    console.log(mood);
  }

  // Store moods to backend database
  const mood_chosen = () => {
    Axios.post("http://192.168.18.6:3001/mood_chosen", {
      mood: mood,
      colour: colour,
      date: date,
      email: email
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNav/>
      <Text style={styles.text}>Choose your mood</Text>

      <View style={styles.right}>
        
        <TouchableOpacity
          style={styles.emotionbtn}
          onPress={() => {
            setMoods("Anger", "red", Date, userEmail);
            mood_chosen();
            // navigation.navigate("MoodReport");
          }}
         >
          <ImageBackground
                source={require("../assets/anger.jpg")}
                style={{height:140,width:110, marginBottom:20}}
                imageStyle={{borderRadius:10}}>
                <Text style={styles.imagetext}>Anger</Text>
           </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.emotionbtn}
          onPress={() => {
            setMoods("Surprise", "orange", Date, userEmail);
            mood_chosen();
            // navigation.navigate("MoodReport");
          }}
        >
          <ImageBackground
            source={require("../assets/surprise.jpg")}
            style={{height:140,width:110,marginBottom:20}}
            imageStyle={{borderRadius:10}}>
            <Text style={styles.imagetext}>Surprise</Text>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.emotionbtn}
          onPress={() => {
            setMoods("Sadness", "purple", Date, userEmail);
            mood_chosen();
            // navigation.navigate("MoodReport");
          }}
        >
          <ImageBackground
            source={require("../assets/sadness.jpg")}
            style={{height:140,width:110,marginBottom:20}}
            imageStyle={{borderRadius:10}}>
            <Text style={styles.imagetext}>Sadness</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>


      <View style={styles.left}>
        <TouchableOpacity
          style={styles.emotionbtn}
          onPress={() => {
            setMoods("Happiness", "yellow", Date, userEmail);
            mood_chosen();
            // navigation.navigate("MoodReport");
          }}
        >
          <ImageBackground
            source={require("../assets/Happiness.jpg")}
            style={{height:140,width:110,marginBottom:20}}
            imageStyle={{borderRadius:10}}>
            <Text style={styles.imagetext}>Happiness</Text>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.emotionbtn}
          onPress={() => {
            setMoods("Disgust", "dark green", Date, userEmail);
            mood_chosen();
            // navigation.navigate("MoodReport");
          }}
        >
          <ImageBackground
            source={require("../assets/disgust.jpg")}
            style={{height:140,width:110,marginBottom:20}}
            imageStyle={{borderRadius:10}}>
            <Text style={styles.imagetext}>Disgust</Text>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.emotionbtn}
          onPress={() => {
            setMoods("Fear", "turquoise", Date, userEmail);
            mood_chosen();
            // navigation.navigate("MoodReport");
          }}
        >
          <ImageBackground
            source={require("../assets/fear.jpg")}
            style={{height:140,width:110,marginBottom:20}}
            imageStyle={{borderRadius:10}}>
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
    fontFamily:'Monospace',
    color: "black",
    fontSize: 13,
    position: "absolute",
    alignSelf:'center',
    top: 110,
    left: 33,
    right: 10,
    bottom: 10,
  },
});
