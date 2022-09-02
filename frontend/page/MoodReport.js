import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import TopNav from "../components/topnav";
import { Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { Calendar } from "react-native-calendars";

function* yLabel() {
  yield* ["Anger", "Fear", "Disgust", "Sad", "Surprise", "Happy"];
}

let Mood = new Array(6);
Mood[1] = "Anger";
Mood[2] = "Fear";
Mood[3] = "Disgust";
Mood[4] = "Sad";
Mood[5] = "Surprised";
Mood[6] = "Happy";

const MoodReport = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const { colors } = useTheme();
  const yLabelIterator = yLabel();
  const data = {
    labels: ["Mon", "Tue", "Wed", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [
          Mood.indexOf("Anger"),
          Mood.indexOf("Happy"),
          Mood.indexOf("Fear"),
          Mood.indexOf("Disgust"),
          Mood.indexOf("Sad"),
          Mood.indexOf("Surprised"),
        ],
      },
    ],
  };
  const data2 = {
    labels: ["Anger", "Surprise", "Happy", "Disgust", "Sad", "Fear"],
    data: [0.2, 0.6, 0.9, 0.2, 0.1, 0.3],
    colors: ["red", "orange", "yellow", "green", "blue", "purple"],
  };
  const chartConfig = {
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientToOpacity: 1,
    backgroundColor: "white",
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    propsForLabels: { fill: colors.text },
    decimalPlaces: 2,
    color: (opacity = 1, _index) => `rgba(255,255,255,${opacity})`,
  };
  const [current, setCurrent] = useState("2022-08-04");
  return (
    <View style={styles.container}>
      <TopNav />
      {/*Title Box*/}
      <ScrollView>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Your progress charts</Text>
        </View>
        {/*Line chart*/}
        <Text style={styles.subtitle}>Weekly Mood Chart</Text>
        <View>
          <LineChart
            data={data}
            segments={5}
            width={320}
            height={200}
            style={{ alignSelf: "center" }}
            formatYLabel={() => yLabelIterator.next().value}
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
          />
        </View>
        {/*Progress chart*/}
        <Text style={styles.subtitle}>Progress Chart</Text>
        <ProgressChart
          data={data2}
          width={Dimensions.get("screen").width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
          withCustomBarColorFromData={true}
        />
        <Text style={styles.subtitle}>Month in pixels</Text>
        <Calendar
          current={current}
          key={current}
          disableMonthChange={true}
          markedDates={{
            "2022-07-04": { selected: true, selectedColor: "orange" },
            "2022-08-01": { selected: true, selectedColor: "purple" },
            "2022-08-02": { selected: true, selectedColor: "blue" },
            "2022-08-03": { selected: true, selectedColor: "yellow" },
            "2022-08-04": { selected: true, selectedColor: "green" },
          }}
        />
      </ScrollView>
    </View>
  );
};

export default MoodReport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleBox: {
    backgroundColor: "#6698FF",
    height: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  title: {
    fontFamily: "Monospace",
    fontSize: 32,
    color: "#FFFFFF",
    marginLeft: 25,
    paddingBottom: 10,
    paddingTop: 10,
  },
  subtitle: {
    fontFamily: "Monospace",
    fontSize: 28,
    color: "#000000",
    alignSelf: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  titlemonth: {
    fontFamily: "Monospace",
    fontSize: 28,
    color: "#000000",
    alignSelf: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
});
