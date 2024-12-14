import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { signIn, signUp, googleSignIn } from "../../firebase/authFunctions"; // Adjust path based on your folder structure
import { useRouter } from "expo-router";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-in and sign-up
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isSignUp) {
        await signUp(email, password); // Call Firebase sign-up function
        alert("Sign-Up Successful! You can now log in.");
        setIsSignUp(false); // Switch back to sign-in mode
      } else {
        await signIn(email, password); // Call Firebase sign-in function
        router.replace("/home"); // Navigate to home on successful login
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      console.log("Google login successful");
    } catch (error: any) {
      alert(`Error during Google sign-in: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={isSignUp ? "Sign Up" : "Sign In"}
        onPress={handleAuth}
        disabled={loading}
      />
      <Button title="Sign in with Google" onPress={handleGoogleLogin} />

      <Text
        style={styles.toggleText}
        onPress={() => setIsSignUp((prev) => !prev)}
      >
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toggleText: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default AuthScreen;
