import React, { useState } from "react";
import { signUp, signIn, logOut } from "../firebase/authFunctions";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert("Sign-Up Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      alert("Sign-In Successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      alert("Logged Out!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Firebase Authentication</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Auth;
