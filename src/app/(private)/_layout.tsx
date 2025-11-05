import { Stack } from "expo-router";

export default function PrivateLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" />
    </Stack>
  );
}
