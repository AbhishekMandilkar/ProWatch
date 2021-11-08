import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import requests from "../utils/requests";
import StyledText from "../components/StyledText";

const Genre = () => {
  const navigation = useNavigation();
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(requests.fetchGenre)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={tw``}>
      <StyledText style={tw`text-xl text-white`}>Categories</StyledText>
      {isLoading ? (
        <View style={tw`h-72 flex-row items-center justify-center`}>
          <ActivityIndicator size="large" color="#93c5fd" />
        </View>
      ) : (
        <View style={tw`my-2 flex-row flex-wrap`}>
          {genres.map(({ name, id }, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("MoviesByGenre", { name, id })}
              key={index}
              style={tw`m-1 px-2 py-1 bg-blue-300 rounded-full border-2 border-blue-300 `}
            >
              <StyledText style={tw`text-sm text-black`}>{name}</StyledText>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Genre;
