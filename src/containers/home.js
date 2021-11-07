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
import { useSelector, useDispatch } from "react-redux";
import { auth, signOut } from "../config/Firebase";

let quizList = [
  {
    title: "General Knowledge",
    id: "0",
  },
  {
    title: "Sports",
    id: "1",
  },
  {
    title: "Web Development",
    id: "2",
  },
  {
    title: "World Affairs",
    id: "3",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, color }) => (
  <TouchableOpacity
    onPress={onPress}
    key="1"
    style={[styles.button, { backgroundColor: backgroundColor }]}
  >
    <Text style={{ color: textColor }}>{item.title}</Text>
  </TouchableOpacity>
);

function Home({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const startQuiz = () => {
    if (selectedId) {
      navigation.navigate("questions", { quiz: selectedId });
      setSelectedId(null)
    }
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

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#1ec77f" : "#ccdde7";
    const color = item.id === selectedId ? "#fff" : "#000";
    console.log(selectedId);
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Selet The Quiz!</Text>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <TouchableHighlight key="1" style={styles.button}>
            <Text style={{ color: "#fff" }}>Javascript</Text>
          </TouchableHighlight>
          <TouchableOpacity key="2" style={styles.button}>
            <Text style={{ color: "#fff" }}>Html</Text>
          </TouchableOpacity> */}
          <FlatList
            style={{ width: "100%" }}
            data={quizList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>

        <TouchableOpacity onPress={startQuiz} style={styles.button2}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              fontSize: 22,
            }}
          >
            Next
          </Text>
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

export default Home;
