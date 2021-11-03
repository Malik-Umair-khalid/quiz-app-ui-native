import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { auth, createUserWithEmailAndPassword, doc, setDoc, db } from "../config/Firebase";
function Signup({ navigation }) {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [cPass, setcPass] = useState();
  console.log(email)
  console.log(name)

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, pass)
      .then(async(userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          pass

        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading} heading>
          Sign Up
        </Text>
        <Text style={styles.para}>Add Your Sign Details</Text>
        <TextInput
          onChangeText={(e) => setname(e)}
          placeholder="Name"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Email"
          onChangeText={(e) => setemail(e)}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          onChangeText={(e) => setpass(e)}
          placeholder="Passward"
          style={styles.input}
        ></TextInput>
        <TextInput
          onChangeText={(e) => setcPass(e)}
          placeholder="Confirm Passward"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={{ color: "#fff" }}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>
          Already Have Signed Up?{" "}
          <Text
            onPress={() => navigation.navigate("login")}
            style={{ color: "#1ec77f" }}
          >
            Login
          </Text>{" "}
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 20,
    backgroundColor: "#22283e",
  
  },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#fff"
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
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 100,
  },
});

export default Signup;
