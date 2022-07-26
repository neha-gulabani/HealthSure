import React, { useEffect } from "react";
import SignUp from "./page/signUp";
import Login from "./page/login";
import Main from "./page/mainPage";
import Settings from "./page/settings";
import Home from "./page/Home";
import Bot from "./page/Bot";
import Profile from "./page/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import TopNav from "./components/topnav";
import BottomNav from "./components/BottomNav";

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
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
