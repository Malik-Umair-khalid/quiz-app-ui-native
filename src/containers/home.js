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
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { auth, signOut } from "../config/Firebase";

function Home({ navigation }) {
  const [press, setpress] = useState(true);
  let store = useSelector((state) => state);
  const increment = useDispatch();
  const StartQiz = (asd) => {
    increment({
      type: "startQuiz",
      name: asd
    });
    console.log(store)
    navigation.navigate("questions")
  };

  const handlePress = (e) => {
    setpress(e.target.children[0].innerText);
  };

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
        <View>
          <Text style={styles.heading}>Selet The Quiz!</Text>
        </View>
        <TouchableHighlight
          onPress={(e) => {
            handlePress(e);
            setpress(e.target.children[0].innerText);
            StartQiz("Javascript")
          }}
          key="1"
          style={styles.button}
        >
          <Text style={{ color: "#fff" }}>Javascript</Text>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={(e) => {
            handlePress(e);
            setpress(e.target.children[0].innerText);
            StartQiz("Html")
          }}
          key="2"
          style={styles.button}
        >
          <Text style={{ color: "#fff" }}>Html</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={(e) => {
            handlePress(e);
          }}
          key="3"
          style={styles.button}
        >
          <Text style={{ color: "#fff" }}>CSS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff" }}>React</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => {
            handlePress(e);
          }}
          key="5"
          style={styles.button}
        >
          <Text style={{ color: "#fff" }}>React Native</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22283e",
    alignItems: "center",
    justifyContent: "space-around",
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
  },
});

export default Home;
