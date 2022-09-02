import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TopNav from "../components/topnav";
import BottomNav from "../components/bottomNav";
import { Checkbox } from "react-native-paper";

const History = () => {
  const [checkedArth, setCheckedArth] = React.useState(false);
  const [checkedCan, setCheckedCan] = React.useState(false);
  const [checkedPox, setCheckedPox] = React.useState(false);
  const [checkedDeng, setCheckedDeng] = React.useState(false);
  const [checkedHeart, setCheckedHeart] = React.useState(false);
  const [checkedBP, setCheckedBP] = React.useState(false);
  const [checkedThy, setCheckedThy] = React.useState(false);

  return (
    <View style={styles.container}>
      <TopNav />
      <ScrollView>
        {/* title */}
        <Text style={styles.historyTitle}>History Records</Text>

        <View style={styles.formBox}>
          <Text style={styles.inputText}>Gender:</Text>
          <View style={styles.box}>
            <Text style={styles.inputText}>Female</Text>
          </View>

          <Text style={styles.inputText}>Allergy:</Text>
          <View style={styles.box}>
            <Text style={styles.inputText}>Dust, Dust mites</Text>
          </View>

          <Text style={styles.inputText}>Recent vaccination:</Text>
          <View style={styles.boxVaccination}>
            <Text style={styles.inputText}>
              06/01/2022- Pfizer/Comirnaty Covid-19 Booster
            </Text>
            <Text style={styles.inputText}>06/12/2021- Gardasil</Text>
            <Text style={styles.inputText}>06/06/2021- Gardasil</Text>
          </View>

          <Text style={styles.illnessText}>
            Have you suffered or suffering from any illness from the list below?
          </Text>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedArth ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedArth(!checkedArth);
              }}
            />

            <Text style={styles.inputText}>Arthritis</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedCan ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedCan(!checkedCan);
              }}
            />

            <Text style={styles.inputText}>Cancer</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedPox ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedPox(!checkedPox);
              }}
            />

            <Text style={styles.inputText}>Chicken pox</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedPox ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedPox(!checkedPox);
              }}
            />

            <Text style={styles.inputText}>Diabetes</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedDeng ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedDeng(!checkedDeng);
              }}
            />

            <Text style={styles.inputText}>Dengue fever</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedHeart ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedHeart(!checkedHeart);
              }}
            />

            <Text style={styles.inputText}>Heart Disease</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedBP ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedBP(!checkedBP);
              }}
            />

            <Text style={styles.inputText}>High blood pressure</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checkedThy ? "checked" : "unchecked"}
              onPress={() => {
                setCheckedThy(!checkedThy);
              }}
            />

            <Text style={styles.inputText}>Thyroid disorders</Text>
          </View>

          {/* Medication text and box */}
          <Text style={styles.inputText}>Medication followed:</Text>
          <View style={styles.box}>
            <Text style={styles.inputText}>Cetrizine</Text>
          </View>
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEA3AA",
  },
  historyTitle: {
    fontFamily: "Monospace",
    fontSize: 32,
    color: "#000000",
    marginLeft: 70,
    paddingTop: 30,
    paddingBottom: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignSelf: "center",
    margin: 15,
  },
  formBox: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "95%",
    height: "100%",
  },
  box: {
    borderWidth: 1,
    borderColor: "#000000",
    height: 50,
    width: "85%",
    padding: 8,
    margin: 10,
  },
  boxVaccination: {
    borderWidth: 1,
    borderColor: "#000000",
    height: 150,
    width: "85%",
    padding: 8,
    margin: 10,
  },
  checkBox: {
    width: "10%",
    height: 30,
  },
  inputText: {
    fontFamily: "Monospace",
    fontSize: 22,
    color: "#000000",
    margin: 0,
    paddingTop: 2,
  },
  illnessText: {
    fontFamily: "Monospace",
    fontSize: 22,
    color: "#000000",
    marginLeft: 30,
  },
});
export default History;
