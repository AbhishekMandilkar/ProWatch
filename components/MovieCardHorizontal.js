import React, { useState } from "react";
import { View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { imageBaseURL } from "../utils/requests";
import StyledText from "../components/StyledText";
import tw from "tailwind-react-native-classnames";
const MovieCardHorizontal = ({
  movie: { backdrop_path, title, release_date, vote_average, id },
}) => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`my-2 rounded-lg bg-white`}
      onPress={() => navigation.navigate("MovieDetail", { id })}
    >
      <View style={tw`h-48 w-full flex-row items-center justify-center`}>
        <Image
          style={tw`h-48 w-full rounded-lg`}
          source={{ uri: imageBaseURL + backdrop_path }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
        {loading && (
          <View style={tw`absolute`}>
            <ActivityIndicator size="large" color="#93c5fd" />
          </View>
        )}
      </View>
      <LinearGradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.6)",
          "rgba(0,0,0,0.8)",
          "rgba(0,0,0,1)",
        ]}
        style={tw`w-full h-1/2 absolute bottom-0 flex flex-row items-center justify-between p-4 rounded-b-lg`}
      >
        <View style={tw`w-56`}>
          <StyledText style={tw`text-white text-lg font-bold`}>
            {title}
          </StyledText>
          <StyledText style={tw`text-white italic`}>{release_date}</StyledText>
        </View>
        <View
          style={tw`flex flex-row items-center justify-center rounded-full  bg-blue-300 w-8 h-8`}
        >
          <StyledText style={tw`text-black`}>{vote_average}</StyledText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MovieCardHorizontal;
