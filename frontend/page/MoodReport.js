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
  Touchable,
  ScrollView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import TopNav from "../components/topnav";
import BottomNav from "../components/BottomNav";
import { Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const MoodReport = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const { colors } = useTheme();
  const data = {
    labels: ["Happy", "Sad", "Anger", "Surprised", "Disgust", "Fear"],
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 6, 7],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Your emotions on each day"], // optional
  };
  const data2 = {
    labels: ["Happy", "Sad", "Anger", "Surprised", "Disgust", "Fear"], // optional
    data: [0.4, 0.6, 0.8, 0.2, 0.5, 0.8],
    colors: ["red", "yellow", "blue", "green", "pink", "darkorange"],
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
  const commitsData = [
    { date: "2022-08-02", count: 5 },
    { date: "2022-08-03", count: 10 },
    { date: "2022-08-09", count: 14 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 },
  ];
  return (
    <View style={styles.moodreprt}>
      <TopNav />
      <View style={styles.scroll}>
        <ScrollView>
          <View
            style={{
              paddingTop: 0,
              zIndex: 10,
            }}
          >
            <View style={styles.lingraph}>
              <View style={styles.toppart}>
                <Text style={styles.title}>Your weekly report</Text>
                <View style={styles.image}>
                  <Image source={require("../assets/quizicon.png")}></Image>
                </View>
              </View>
              <LineChart
                data={data}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="Day "
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: "white",
                  backgroundGradientFrom: "white",
                  backgroundGradientTo: "white",
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(0, 64, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 64, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#4000ff",
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 10,
                  paddingBottom: 10,
                }}
              />
              <ProgressChart
                data={data2}
                width={screenWidth}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
                style={{}}
                withCustomBarColorFromData={true}
              />
              <Text style={styles.titlemonth}>
                Month in pixels : {new Date().getMonth() + 1}
              </Text>
              <ContributionGraph
                values={commitsData}
                endDate={new Date("2022-09-01")}
                numDays={32}
                width={screenWidth}
                height={220}
                showMonthLabels={false}
                gutterSize={23}
                horizontal={false}
                // getMonthLabel={new Date().getMonth() + 1}
                chartConfig={{
                  backgroundGradientFrom: "white",
                  backgroundGradientFromOpacity: 0.5,
                  backgroundGradientTo: "white",
                  backgroundGradientToOpacity: 1,
                  color: (opacity = 1) => `rgba(100, 100, 26, ${opacity})`,
                  strokeWidth: 2, // optional, default 3
                  barPercentage: 0.5,

                  propsForLabels: { fill: colors.text },
                }}
              />
            </View>
          </View>
        </ScrollView>
        <BottomNav />
      </View>
    </View>
  );
};

export default MoodReport;

const styles = StyleSheet.create({
  moodreprt: {
    paddingTop: 15,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "stretch",
    fontSize: 25,
    backgroundColor: "white",
    paddingTop: 34,
    paddingLeft: 20,
    width: "50%",
  },
  titlemonth: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 25,
    backgroundColor: "white",
    paddingTop: 10,
  },
  toppart: {
    backgroundColor: "transparent",
    height: "19%",
  },
  image: {
    height: "50%",
    width: "40%",
  },
  lingraph: {
    paddingBottom: 150,
  },
  scroll: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // flex:1,
    // flexBasis:570,
    // flexGrow:0
  },
});
