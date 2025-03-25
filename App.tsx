import { Button } from "@react-navigation/elements";
import { createStaticNavigation, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Login: LoginScreen
  },
})

const Navigation = createStaticNavigation(RootStack);

function App() {
  return <Navigation />
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});