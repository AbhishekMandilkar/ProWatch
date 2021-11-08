import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import StyledText from "../components/StyledText";
import requests, { imageBaseURL } from "../utils/requests";

import MovieCardHorizontal from "../components/MovieCardHorizontal";

const MoviesByGenre = ({ navigation, route }) => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: { backgroundColor: "#121212", elevation: 0 },
      headerTint: { color: "#fff" },
    });
  }, [navigation]);

  useEffect(() => {
    fetch(requests.fetchMoviesByGenre + route?.params?.id)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.results);
        setIsLoading(false);
      });
  }, [route.params.id]);
  return (
    <View style={{ backgroundColor: "#121212", flex: 1 }}>
      <View style={tw`px-6 py-2 flex-1`}>
        {isLoading ? (
          <View style={tw`w-full justify-center items-center flex-1`}>
            <ActivityIndicator size="large" color="#93c5fd" />
          </View>
        ) : (
          <>
            <Text style={tw`text-2xl font-bold italic text-white`}>
              {route?.params?.name}
            </Text>
            <ScrollView style={isLoading ? tw`flex-1` : tw`flex-1`}>
              <View style={tw`mt-6`}>
                {movies.map((movie, index) => (
                  <MovieCardHorizontal key={index} movie={movie} />
                ))}
              </View>
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
};

export default MoviesByGenre;
