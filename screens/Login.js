import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { login, selectUser } from "../slice/userSlice";
import * as Google from "expo-google-app-auth";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import StyledText from "../components/StyledText";
import Icon from "react-native-vector-icons/AntDesign";
const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId:
          "907927980146-8ci23uc4l0sgpmf30lhnoig8jvor9mph.apps.googleusercontent.com",
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        console.log(user);
        dispatch(login(user));
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };
  return (
    <View
      style={{
        backgroundColor: "#121212",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ resizeMode: "contain", width: 400, height: 400 }}
        source={require("../components/images/loginVector.png")}
      />
      <View style={tw`py-4 items-center justify-center`}>
        <StyledText
          style={[{ fontSize: 50 }, tw`text-blue-300 italic font-bold`]}
        >
          Pro<StyledText style={tw`text-white`}>Watch</StyledText>
        </StyledText>
        <View style={tw`pt-6 pb-4`}>
          <StyledText style={tw`text-lg text-gray-300`}>
            all your shows at one place
          </StyledText>
        </View>
      </View>
      <TouchableOpacity
        style={tw`border-2 border-blue-300 rounded-lg py-3 flex-row items-center `}
        onPress={() => signInAsync()}
      >
        <StyledText style={tw`text-white pl-4`}>Continue with</StyledText>
        <Icon style={tw`px-4`} name="google" color="#fff" size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
