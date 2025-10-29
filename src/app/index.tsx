import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text className="text_colo">Welcome to the Marketplace App!</Text>
      </TouchableOpacity>
    </View>
  );
}
