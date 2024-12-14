import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// adjust config
const firebaseConfig = {
  apiKey: "AIzaSyA4WbbJrqSQVqrqcvQ_EjUC0BzPyhQw3dc",
  authDomain: "new-app-35bba.firebaseapp.com",
  projectId: "new-app-35bba",
  storageBucket: "new-app-35bba.firebasestorage.app",
  messagingSenderId: "927940132501",
  appId: "1:927940132501:web:7c37e82a30e78917a4a59c",
  measurementId: "G-CN43BHXR0D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with React Native Persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
