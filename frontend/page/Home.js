import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import TopNav from "../components/topnav";
import BottomNav from "../components/bottomNav";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView>
        <View style={styles.homeBox}>
          <Text style={styles.welcomeText}>Hello Blob!</Text>
          <View style={styles.character}>
            <Image
              style={styles.charcterImage}
              source={require("../assets/blobCharacter.png")}
            />
          </View>
        </View>

        {/*Classes*/}
        <Text style={styles.categoryTitle}>Category</Text>
        <View style={styles.topcategory}>
          <View style={styles.categoryCard}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Bot");
              }}
            >
              <Image
                source={require("../assets/chatbotIcon.jpg")}
                style={styles.categoryImages}
              />
              <Text style={styles.catergoryCardTitle}>Chatbot</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryCard}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MoodDashboard");
              }}
            >
              <Image
                source={require("../assets/moodtrackerIcon.png")}
                style={styles.categoryImages}
              />
              <Text style={styles.catergoryCardTitle}>Mood Tracker</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomcategory}>
          <View style={styles.categoryBottomCard}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OnlineConsultation");
              }}
            >
              <Image
                source={require("../assets/onlineConsultationIcon.png")}
                style={styles.categoryImages}
              />
              <Text style={styles.catergoryCardTitle}>Online Consulation</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoryBottomCard}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("History");
              }}
            >
              <Image
                source={require("../assets/history.png")}
                style={styles.categoryImages}
              />
              <Text style={styles.catergoryCardTitle}>History</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*News and information*/}
        <Text style={styles.informationtitle}>Quotes</Text>
        <View style={styles.informationcode}>
          <Text style={styles.informationText}>
            "Mental health... is not a destination, but a process. It's about
            how you drive,not where you're going." --Noam Sphancer{" "}
          </Text>
        </View>
        <View style={styles.informationcode1}>
          <Text style={styles.informationText}>
            "Not until we lost do we begin to understand ourselves." --Henry
            David Thoreau{" "}
          </Text>
        </View>
        <View style={styles.informationcode}>
          <Text style={styles.informationText}>
            "Happiness can be found even in the darkest of times, if one only
            remembers to turn on the light."--Albus Dumbledore
          </Text>
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  homeBox: {
    backgroundColor: "#6698FF",
    paddingTop: 0,
    paddingLeft: 20,
    height: 290,
    borderBottomLeftRadius: 75,
  },
  welcomeText: {
    fontFamily: "Monospace",
    fontSize: 32,
    color: "#FFFFFF",
    // clear: "right",
    marginLeft: 10,
    paddingLeft: 5,
    paddingTop: 30,
  },
  character: {
    marginLeft: 40,
  },
  charcterImage: {
    width: "100%",
    height: 230,
    alignItems: "flex-end",
    marginRight: "auto",
  },
  categoryTitle: {
    fontFamily: "Monospace",
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
    paddingLeft: 15,
    paddingTop: 30,
  },
  topcategory: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  categoryCard: {
    width: 165,
    backgroundColor: "#6698FF",
    paddingTop: 0,
    height: 230,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  bottomcategory: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  categoryBottomCard: {
    width: 165,
    backgroundColor: "#FEA3AA",
    paddingTop: 0,
    height: 230,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  categoryImages: {
    width: 150,
    height: 150,
    marginTop: 15,
    marginLeft: 10,
  },
  catergoryCardTitle: {
    fontFamily: "Monospace",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 25,
    paddingTop: 5,
  },
  informationtitle: {
    fontFamily: "Monospace",
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
    paddingLeft: 15,
    paddingTop: 30,
  },
  informationcode: {
    backgroundColor: "#6698FF",
    marginTop: 20,
    paddingLeft: 20,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  informationcode1: {
    backgroundColor: "#FEA3AA",
    marginTop: 20,
    paddingLeft: 20,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  informationText: {
    fontFamily: "Monospace",
    fontSize: 18,
    color: "#FFFFFF",
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 5,
  },
});
