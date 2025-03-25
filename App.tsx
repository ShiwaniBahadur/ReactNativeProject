import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

function App() {
  return <SafeAreaView style = {style.container}>
    <Text style = {style.text}>{"Shiwani"}</Text>
  </SafeAreaView>
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