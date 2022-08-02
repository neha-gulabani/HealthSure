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
import { StackNavigator } from "react-navigation";
import { useNavigation } from "@react-navigation/native";

const TopNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ paddingRight: 280, flex: 1, paddingTop: 30 }}>
        <Image
          source={require("../assets/logo.jpg")}
          style={{ height: 50, width: null, borderRadius: 80 }}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>

      <View style={styles.setting}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Image
            source={require("../assets/settingspic.png")}
            style={{ height: 35, width: null }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    top: 0,
    width: "100%",
    height: "12%",
    backgroundColor: "white",
    zIndex:10,
    display:"flex"
  },

  setting: {
    paddingLeft: 280,
    flex: 1,
    paddingBottom: 45,
  },
});
