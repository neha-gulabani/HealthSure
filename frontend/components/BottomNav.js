import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './Home';
import Bot from './Bot';
import Profile from './Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        inactiveTintColor: "#000000",
        activeTintColor: "#FEA3AA",
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" 
                    size={32} 
                    color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bot"
        component={Bot}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="microphone" 
                                    size={32} 
                                    color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" 
                                    size={32} 
                                    color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default BottomNav;