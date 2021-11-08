import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./app/store";
import { Provider, useSelector } from "react-redux";
import { useFonts } from "expo-font";

import HomeScreen from "./screens/Home";
import MovieByGenreScreen from "./screens/MoviesByGenre";
import MovieDetailScreen from "./screens/MovieDetail";
import LoginScreen from "./screens/Login";
import { selectUser } from "./slice/userSlice";
import ProfileScreen from "./screens/Profile";

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerShadowVisible: false,
  headerTitleStyle: { color: "white", fontFamily: "Inter" },
  headerTintColor: "white",
};

function App() {
  const [loaded] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  if (!loaded) {
    return null;
  }
  StatusBar.setBarStyle("light-content", true);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

function NavigationStack() {
  const user = useSelector(selectUser);
  return <>{user ? <AuthenticatedStack /> : <NonAuthenticatedStack />}</>;
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={globalScreenOptions}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MoviesByGenre" component={MovieByGenreScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function NonAuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={globalScreenOptions}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
