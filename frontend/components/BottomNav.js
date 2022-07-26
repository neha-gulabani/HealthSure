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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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

      <View style={styles.bot}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Bot");
          }}
        >
          <Image
            source={require("../assets/micpic.png")}
            style={{ height: 31, width: null }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.home}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../assets/homepic.png")}
            style={{ height: 31, width: null }}
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
    width: "100%",
    height: "8%",
    backgroundColor: "white",
    top: "92%",
    justifyContent: "flex-end",
  },

  profile: {
    paddingLeft: 280,
    flex: 1,
    paddingTop: 10,
  },

  bot: {
    flex: 1,
    paddingTop: 1.5,
  },
  home: {
    flex: 1,
    paddingRight: 280,
    paddingBottom: 50,
  },
});
