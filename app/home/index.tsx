import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { logOut } from "../../firebase/authFunctions";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const { user } = useAuth(); // Access the logged-in user
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await logOut(); // Log the user out
      router.push("/auth"); // Redirect to the auth screen
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.email || "Guest"}!</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default HomeScreen;
