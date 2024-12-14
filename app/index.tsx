import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";

const Index = () => {
  const { user, loading } = useAuth(); // Get user and loading state from AuthContext
  const router = useRouter();

  useEffect(() => {
    try {
      if (!loading) {
        if (user) {
          router.replace("/home");
        } else {
          router.replace("/auth");
        }
      }
    } catch (error) {
      console.error("Redirection error:", error);
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Index;
