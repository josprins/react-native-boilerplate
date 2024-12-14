import { Stack } from "expo-router";
import AuthContextProvider from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <Stack />
    </AuthContextProvider>
  );
}
