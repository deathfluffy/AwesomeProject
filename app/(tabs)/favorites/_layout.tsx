
import StackScreenWithSearchBar from "@/app/constansts/layout";
import { defaultStyles } from "@/app/styles";
import { Stack } from "expo-router";
import { View } from "react-native";
const Favorites = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Favorites",
          }}
        />
      </Stack>
    </View>
  );
};

export default Favorites;
