import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { imageBaseURL } from "../utils/requests";
import { useNavigation } from "@react-navigation/native";
const MovieCardVertical = ({ moviePoster, id }) => {
  const [loading, setLoading] = useState(!loading);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`h-52 w-32 rounded-lg mr-2 bg-gray-700 justify-center`}
      onPress={() => navigation.navigate("MovieDetail", { id })}
    >
      {loading && (
        <View
          style={tw`h-52 w-32 rounded-lg mr-2 bg-gray-700 justify-center absolute`}
        >
          <ActivityIndicator size="large" color="#93c5fd" />
        </View>
      )}
      <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={tw`h-52 w-32 rounded-lg mr-2`}
        source={{ uri: imageBaseURL + moviePoster }}
      />
    </TouchableOpacity>
  );
};

export default MovieCardVertical;
