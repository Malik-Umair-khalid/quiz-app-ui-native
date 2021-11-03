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
import { auth, signOut } from "../config/Firebase";

function Result({ navigation }) {
  const [press, setpress] = useState(true);

 const handlePress = (e) => {
 setpress(e.target.children[0].innerText)
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
        <View style={styles.container2}>
            <img src="https://www.pngfind.com/pngs/m/57-578363_trophy-trophy-vector-png-transparent-png.png" height="100" width="100" alt="" />
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
  container2:{
    width: 80+"%",
    height: 80+"%",
    backgroundColor: "#ccdde7",
    margin: "auto",
    borderRadius: 30,
  }
});

export default Result;
