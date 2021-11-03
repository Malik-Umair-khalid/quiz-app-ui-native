import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { auth, signOut } from "../config/Firebase";

function Questions({ navigation }) {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("signup");
      })
      .catch((error) => {});
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button color="#1ec77f" onPress={logOut} title="Logout" />
      ),
    });
  });
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: 90 + "%",
            justifyContent: "space-between",
            padding: 0,
            marginTop: 30,
          }}
        >
          <Text style={styles.heading}>Quiz Name</Text>
          <Text style={styles.heading}>3:00 min</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{ padding: "10px" }}>
          <Text style={styles.heading}>
            <Text>1.</Text> It IS Question What Is Your Name XYZ?
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: "#1ec77f",
              position: "absolute",
              left: 10,
              top: 10,
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            A
          </View>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              color: "#000",
              fontWeight: 500,
            }}
          >
            Falananana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: "#1ec77f",
              position: "absolute",
              left: 10,
              top: 10,
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            B
          </View>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              color: "#000",
              fontWeight: 500,
            }}
          >
            Falananana
          </Text>
        </TouchableOpacity>{" "}
        <TouchableOpacity style={styles.button}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: "#1ec77f",
              position: "absolute",
              left: 10,
              top: 10,
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            C
          </View>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              color: "#000",
              fontWeight: 500,
            }}
          >
            Falananana
          </Text>
        </TouchableOpacity>{" "}
        <TouchableOpacity style={styles.button}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: "#1ec77f",
              position: "absolute",
              left: 10,
              top: 10,
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            D
          </View>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              color: "#000",
              fontWeight: 500,
            }}
          >
            Falananana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              color: "#000",
              fontWeight: 500,
            }}
          >
          Next
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22283e",
    alignItems: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  heading: {
    fontWeight: 300,
    fontSize: 18,
    color: "#ccdae7",
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
    backgroundColor: "#ccdde7",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 100,
    marginTop: 10,
    position: "relative",
  },
  line: {
    height: 2,
    width: "90%",
    backgroundColor: "#fff",
  },
  button2:{
    alignItems: "center",
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    marginTop: 50,
    position: "absolute",
    bottom: 20
  }
});

export default Questions;
