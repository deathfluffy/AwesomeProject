
import StackScreenWithSearchBar from "@/app/constansts/layout";
import { defaultStyles } from "@/app/styles";
import { Stack } from "expo-router";
import { View } from "react-native";
const Artists = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Artists",
          }}
        />
      </Stack>
    </View>
  );
};

export default Artists;
