import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: "1201273g1b1023192312312sdasfdfg",
    name: "John Doe",
  };

  if (!userData.token) {
    return <Redirect href="/(private)/home" />;
  }

  return <Redirect href="/login" />;
}
