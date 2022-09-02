import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

Feather.loadFont();

const Settings = () => {
  const [isClicked, isnotClicked] = useState(false);
  const toggleSwitch = () => isnotClicked((previousState) => !previousState);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.settingTitleBox}>
        <Text style={styles.settingTitle}>Settings</Text>
        <View style={styles.settingBox}>
          <View style={styles.leftparts}>
            <Text style={styles.accountText}>Change Password</Text>
          </View>
          <View style={styles.rightparts}>
            <TouchableOpacity>
              <Feather
                name="chevron-right"
                size={25}
                style={{ width: 100, width: 100 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.leftparts}>
            <Text style={styles.accountText}>Notifications</Text>
          </View>
          <View style={styles.rightparts}>
            <Switch
              trackColor={{ false: "#767577", true: "#20b2aa" }}
              thumbColor={isClicked ? "#20b2aa" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isClicked}
            />
          </View>
          <View style={styles.leftparts}>
            <Text style={styles.accountText}>Change Language</Text>
          </View>
          <View style={styles.rightparts}>
            <TouchableOpacity>
              <Feather
                name="chevron-right"
                size={25}
                style={{ width: 100, width: 100 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.leftparts}>
            <Text style={styles.accountText}>Terms and Conditions</Text>
          </View>
          <View style={styles.rightparts}>
            <TouchableOpacity>
              <Feather
                name="chevron-right"
                size={25}
                style={{ width: 100, width: 100 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.leftparts}>
            <Text style={styles.accountText}>Logout</Text>
          </View>
          <View style={styles.rightparts}>
            <TouchableOpacity
              onPress={() => {
                console.log("z");
                navigation.navigate("Main");
              }}
              hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
            >
              <Feather
                name="chevron-right"
                size={25}
                style={{ width: 100, width: 100 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image
        style={styles.charcterImage}
        source={require("../assets/blobCharacter.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  settingTitleBox: {
    backgroundColor: "#6698FF",
    height: 200,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    alignItems: "center",
  },
  settingTitle: {
    fontSize: 32,
    color: "#FFFFFF",
    paddingTop: 50,
  },
  settingBox: {
    height: 500,
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#808080",
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  accountText: {
    fontSize: 22,
    color: "#000000",
    paddingLeft: 22,
  },
  leftparts: {
    width: "80%",
    paddingTop: 30,
  },
  rightparts: {
    width: "20%",
    paddingTop: 30,
  },
  charcterImage: {
    width: "100%",
    height: 250,
    marginTop: 350,
  },
});
export default Settings;
