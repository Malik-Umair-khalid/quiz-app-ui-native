import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";

function Result({ navigation, route }) {
  let obtMarks = route.params.Marks;
  let totalMarks = route.params
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "#ccdde7",
            margin: "auto",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{}}>Congrates</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22283e",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#fff",
  },
  para: {
    fontWeight: "300",
    fontSize: 14,
    color: "gray",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 40,
    width: 95 + "%",
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    color: "gray",
    marginTop: 20,
    maxHeight: 100,
    height: 70,
    borderColor: "#f2f2f2",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#32465e",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 5,
    marginTop: 15,
    margin: "auto",
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
  },
});

export default Result;
