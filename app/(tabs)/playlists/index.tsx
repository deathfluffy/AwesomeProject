import StackScreenWithSearchBar from "@/app/constansts/layout";
import { defaultStyles } from "@/app/styles";
import { Stack } from "expo-router";
import { View, Text } from "react-native";

const PlaylistsLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Playlist Screen</Text>
    </View>
  );
};

export default PlaylistsLayout;
