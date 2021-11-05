import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    Option: "A",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    Option: "B",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    Option: "C",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7",
    title: "Third Item",
    Option: "D",
  },
];

import { auth, signOut } from "../config/Firebase";

const Item = ({ item, onPress, backgroundColor, textColor, color}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: backgroundColor}]}
    onPress={onPress}
  >
    <>
    <View style={styles.option}>
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>{item.Option}</Text>
    </View>
    <Text style={styles.optionText}>{item.title}</Text>
    </>
  </TouchableOpacity>
);

function Questions({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const logOut = () => {
    signOut(auth)
      .then(() => {
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
    const backgroundColor = item.id === selectedId ? "#1ec77f" : "#ccdde7"
    const color = item.id === selectedId ? "#ccdde7" : "#1ec77f";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor }
        textColor={color }
      />
    );
  };

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
        <View style={{ padding: 10 }}>
          <Text style={styles.heading}>
            <Text>1.</Text> It IS Question What Is Your Name XYZ?
          </Text>
        </View>
          <SafeAreaView style={[styles.container], {width:"100%"}}>
          <FlatList
          style={{width:"100%"}}
          contentContainerStyle={{}}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          />
          </SafeAreaView>
      
        {/* <TouchableOpacity style={styles.button}>
          <View style={styles.option}>
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              A
            </Text>
          </View>
          <Text style={styles.optionText}>Falananana</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.button}>
          <View style={styles.option}>
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              A
            </Text>
          </View>
          <Text style={styles.optionText}>Falananana</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.option}>
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              A
            </Text>
          </View>
          <Text style={styles.optionText}>Falananana</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.option}>
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
              A
            </Text>
          </View>
          <Text style={styles.optionText}>Falananana</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button2}>
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
    fontWeight: "600",
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
    // backgroundColor: "#ccdde7",
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
  button2: {
    alignItems: "center",
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    marginTop: 50,
    position: "absolute",
    bottom: 20,
  },
  option: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#1ec77f",
    position: "absolute",
    left: 10,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    color: "#fff",
    textAlign: "center",
    color: "#000",
    fontWeight: "500",
  },
});

export default Questions;
