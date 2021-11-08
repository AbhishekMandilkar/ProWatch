import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectUser } from "../slice/userSlice";

const ProfileScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: { backgroundColor: "#121212", elevation: 0 },
      headerTint: { color: "#fff" },
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={tw`mx-4 my-4`}></View>
    </View>
  );
};

export default ProfileScreen;
