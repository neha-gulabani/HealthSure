import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TopNav from "../components/topnav";
import BottomNav from "../components/bottomNav";

const OnlineConsultation = () => {
  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView>
        {/*Title Box*/}
        <View style={styles.homeBox}>
          <Text style={styles.title}>Find your doctor!</Text>
          <Image
            style={styles.charcterImage}
            source={require("../assets/blueBlob.png")}
          />
        </View>
        <Text style={styles.topDoctorsText}>Our Top Doctors</Text>
        <TouchableOpacity>
          <View style={styles.doctorBox}>
            <View style={styles.leftside}>
              <Text style={styles.doctorTitleText}>Natalie Jack</Text>
              <Text style={styles.doctorText}>General Doctor</Text>
              <Text style={styles.doctorText}>5 years of experience</Text>
            </View>
            <View style={styles.rightside}>
              <Image
                source={require("../assets/ocDoc-1.png")}
                style={styles.doctorImage}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.doctorBox}>
            <View style={styles.leftside}>
              <Text style={styles.doctorTitleText}>Jonanthan Andrews</Text>
              <Text style={styles.doctorText}>General Doctor</Text>
              <Text style={styles.doctorText}>7 years of experience</Text>
            </View>
            <View style={styles.rightside}>
              <Image
                source={require("../assets/ocDoc-2.png")}
                style={styles.doctorImage}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.doctorBox}>
            <View style={styles.leftside}>
              <Text style={styles.doctorTitleText}>Evangelin Keller</Text>
              <Text style={styles.doctorText}>Therapist</Text>
              <Text style={styles.doctorText}>10 years of experience</Text>
            </View>
            <View style={styles.rightside}>
              <Image
                source={require("../assets/ocDoc-1.png")}
                style={styles.doctorImage}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.doctorBox}>
            <View style={styles.leftside}>
              <Text style={styles.doctorTitleText}>Marliyn Connor</Text>
              <Text style={styles.doctorText}>Therapist</Text>
              <Text style={styles.doctorText}>3 years of experience</Text>
            </View>
            <View style={styles.rightside}>
              <Image
                source={require("../assets/ocDoc-1.png")}
                style={styles.doctorImage}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.doctorBox}>
            <View style={styles.leftside}>
              <Text style={styles.doctorTitleText}>Charles Perry</Text>
              <Text style={styles.doctorText}>Therapist</Text>
              <Text style={styles.doctorText}>8 years of experience</Text>
            </View>
            <View style={styles.rightside}>
              <Image
                source={require("../assets/ocDoc-2.png")}
                style={styles.doctorImage}
              />
            </View>
          </View>
        </TouchableOpacity>
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
  homeBox: {
    backgroundColor: "#FEA3AA",
    paddingLeft: 20,
    height: 300,
    borderBottomLeftRadius: 75,
  },
  title: {
    fontFamily: "Monospace",
    fontSize: 32,
    color: "#FFFFFF",
    marginLeft: 50,
    paddingBottom: 10,
    paddingTop: 10,
  },
  charcterImage: {
    width: "100%",
    height: 240,
    marginLeft: 120,
  },
  topDoctorsText: {
    fontFamily: "Monospace",
    fontSize: 24,
    color: "#000000",
    paddingTop: 10,
    alignSelf: "center",
  },
  doctorBox: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    width: "85%",
    height: 155,
    marginTop: 20,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  leftside: {
    width: "60%",
    paddingLeft: 10,
  },
  rightside: {
    width: "40%",
  },
  doctorTitleText: {
    paddingTop: 10,
    fontFamily: "Monospace",
    fontSize: 24,
    color: "#000000",
  },
  doctorText: {
    paddingTop: 8,
    fontFamily: "Monospace",
    fontSize: 18,
    color: "#000000",
  },
  doctorImage: {
    height: 150,
  },
});
export default OnlineConsultation;
