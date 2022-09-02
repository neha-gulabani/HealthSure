import React, { useEffect } from "react";
import SignUp from "./page/signUp";
import Login from "./page/login";
import Main from "./page/mainPage";
import Settings from "./page/Settings";
import Home from "./page/Home";
import Bot from "./page/Bot";
import Profile from "./page/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import MoodDashboard from "./page/MoodDashboard";
import MoodQuiz from "./page/MoodQuiz";
import MoodReport from "./page/MoodReport";
import OnlineConsultation from "./page/OnlineConsultation";
import History from "./page/History";

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: "Main" }}
          />
          <Stack.Screen
            name="MoodDashboard"
            component={MoodDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MoodQuiz"
            component={MoodQuiz}
            options={{ title: "Mood Quiz" }}
          />
          <Stack.Screen
            name="MoodReport"
            component={MoodReport}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "SignUp" }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ title: "Settings" }}
          />
          <Stack.Screen name="Bot" component={Bot} options={{ title: "Bot" }} />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="OnlineConsultation"
            component={OnlineConsultation}
            options={{ title: "Online Consultation" }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{ title: "History" }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
