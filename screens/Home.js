import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import StyledText from "../components/StyledText";
import Genre from "../components/Genre";
import Row from "../components/HomeScreenRow";
import Icon from "react-native-vector-icons/Feather";
import requests from "../utils/requests";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";

function HomeScreen({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const user = useSelector(selectUser);
  return (
    <View style={{ backgroundColor: "#121212", flex: 1, paddingTop: 25 }}>
      <View style={tw`px-4 flex-row justify-between items-center pt-6`}>
        <StyledText style={tw`text-4xl text-blue-300 italic font-bold`}>
          Pro<StyledText style={tw`text-white`}>Watch</StyledText>
        </StyledText>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={tw`rounded-full bg-blue-300 p-2 flex-row items-center justify-center`}
        >
          <Icon name="user" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={tw`px-4 py-4`}>
        <StyledText style={tw`text-white text-2xl pt-4 `}>
          Hi {user.givenName}!👋
        </StyledText>
      </View>
      <ScrollView style={tw`px-4`}>
        <Genre />
        <Row title="Trending" fetchData={requests.fetchTrending} />
        <Row title="Top Rated" fetchData={requests.fetchTopRated} />
        <Row title="Comedy" fetchData={requests.fetchComedyMovies} />
        <Row title="Horror" fetchData={requests.fetchHorrorMovies} />
        <Row
          title="Netflix Originals"
          fetchData={requests.fetchNetflixOriginals}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
