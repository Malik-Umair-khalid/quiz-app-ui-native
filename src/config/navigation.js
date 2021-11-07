import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../containers/home";
import Signup from "../containers/Signup";
import Login from "../containers/Login";
import { onAuthStateChanged, auth } from "../config/Firebase";
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import Questions from "../containers/Questions";
import Result from "../containers/Result";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../store";


function AppRouter() {
  const Drawer = createDrawerNavigator();
  const [userAuth, setuserAuth] = useState(false);

  const Stack = createNativeStackNavigator();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      setuserAuth(true);
      // ...
    } else {
      // User is signed out
      // ...
      setuserAuth(false);
      console.log("No USer");
    }
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Drawer.Navigator initialRouteName="signup">
            {userAuth ? (
              <>
                <Drawer.Screen
                  options={{
                    title: "Quiz App",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  name="home"
                  component={Home}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle:{
                      display: "none"
                    },
                    title: "Question",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  name="questions"
                  component={Questions}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle:{
                      // display: "none"
                    },
                    title: "Result",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  name="result"
                  component={Result}
                />
              </>
            ) : (
              <>
                <Drawer.Screen
                  name="signup"
                  options={{
                    title: "Register Your Self",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  component={Signup}
                />
                <Drawer.Screen
                  name="login"
                  options={{
                    title: "Register Your Self",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  component={Login}
                />
              </>
            )}
          </Drawer.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default AppRouter;
