import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebaseConfig"; // Adjust the path if necessary

/**
 * Function to sign up a new user
 * @param email - User's email address
 * @param password - User's password
 */
export const signUp = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed up:", userCredential.user);
  } catch (error: any) {
    console.error("Error during sign-up:", error.message);
    throw new Error(error.message);
  }
};

/**
 * Function to sign in an existing user
 * @param email - User's email address
 * @param password - User's password
 */
export const signIn = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed in:", userCredential.user);
  } catch (error: any) {
    console.error("Error during sign-in:", error.message);
    throw new Error(error.message);
  }
};

/**
 * Function to log out the currently signed-in user
 */
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User logged out.");
  } catch (error: any) {
    console.error("Error during sign-out:", error.message);
    throw new Error(error.message);
  }
};

/**
 * Function to sign in with Google
 */
export const googleSignIn = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Google user signed in:", result.user);
  } catch (error: any) {
    console.error("Error during Google sign-in:", error.message);
    throw new Error(error.message);
  }
};
