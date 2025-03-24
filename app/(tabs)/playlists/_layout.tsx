
import StackScreenWithSearchBar from "@/app/constansts/layout";
import { defaultStyles } from "@/app/styles";
import { Stack } from "expo-router";
import { View } from "react-native";
const Playlists = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Playlists",
          }}
        />
      </Stack>
    </View>
  );
};

export default Playlists;
