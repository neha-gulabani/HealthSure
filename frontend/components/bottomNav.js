import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <View style={styles.home}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          hitSlop={{top:30, bottom:30, left:30,right:30}}
        >
          <Image
            source={require("../assets/homepic.png")}
            style={{ height: 31, width: null }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.bot}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Bot");
          }}
        >
          <Image
            source={require("../assets/chatbot.jpg")}
            style={{ height: 31, width: null }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image
            source={require("../assets/profilepic.png")}
            style={{ height: 35, width: null }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"8%",
    backgroundColor:"white",
    top:"5%",
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start'
  },

  profile: {
    flex:1,
    width:'33%',
  },

  bot: {
    flex:1,
    width:'33%',
  },
  home: {
    flex:1,
    width:'33%',
  },
});