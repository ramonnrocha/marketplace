import { router } from "expo-router";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
