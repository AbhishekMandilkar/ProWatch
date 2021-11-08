import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

import StyledText from "../components/StyledText";

import MovieCardVertical from "./MovieCardVertical";

const Row = ({ title, fetchData }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch(fetchData)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.results);
      });
  }, [fetchData]);
  return (
    <View style={tw`my-3`}>
      <StyledText style={tw`text-xl text-white`}>{title}</StyledText>
      <ScrollView horizontal={true} style={tw`my-2`}>
        {movies.map(({ poster_path, id }, index) => (
          <MovieCardVertical key={index} moviePoster={poster_path} id={id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Row;
