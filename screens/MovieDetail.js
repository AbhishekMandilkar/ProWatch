import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";
import StyledText from "../components/StyledText";

import requests, { API_KEY, imageBaseURL } from "../utils/requests";

const MovieDetailScreen = ({ navigation, route }) => {
  const [movieData, setMovieData] = useState({});
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
    });
  }, [navigation]);
  useEffect(() => {
    fetch(requests.fetchMovieDetails + route.params.id + "?api_key=" + API_KEY)
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [route.params.id]);
  console.log(movieData);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      {movieData?.success ? (
        <View style={tw`p-6 flex-1 justify-center items-center`}>
          <StyledText
            style={{
              fontSize: 100,
              color: "#93c5fd",
              paddingVertical: 40,
            }}
          >
            404
          </StyledText>
          <StyledText style={tw`text-white text-2xl font-bold text-center`}>
            OOPS,
          </StyledText>
          <StyledText style={tw`text-white text-lg  text-center`}>
            the page you are looking for is not available.
          </StyledText>
        </View>
      ) : (
        <ImageBackground
          style={{
            width: "100%",
            height: "100%",
          }}
          source={{ uri: imageBaseURL + movieData.backdrop_path }}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
            style={tw`w-full h-full`}
          >
            <View
              style={tw`flex-1 inset-x-0 bottom-0 w-full absolute rounded-t-3xl px-6 py-24 `}
            >
              <StyledText style={tw`text-4xl text-white font-bold`}>
                {movieData.title}
              </StyledText>
              <View style={tw`flex-row my-2 flex-wrap`}>
                {movieData?.genres?.map(({ name }, index) => (
                  <View
                    key={index}
                    style={tw`rounded-full bg-blue-300 px-2 py-1 mr-3 my-2`}
                  >
                    <StyledText style={tw`text-xs`}>{name}</StyledText>
                  </View>
                ))}
              </View>
              <StyledText style={tw`text-white text-lg`}>
                {truncate(`${movieData.overview}`, 120)}
              </StyledText>
              {movieData.runtime < 1 ? null : (
                <StyledText style={tw`text-white text-lg py-1`}>
                  <StyledText>🕒 </StyledText>: {movieData.runtime} mins
                </StyledText>
              )}
              <StyledText style={tw`text-white text-lg py-1`}>
                <StyledText>⭐ </StyledText>: {movieData.vote_average}
              </StyledText>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
};

export default MovieDetailScreen;
