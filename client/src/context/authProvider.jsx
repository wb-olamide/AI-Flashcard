import { useState } from "react";
import API from "../services/api";
import AuthContext from "./authContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await API.post("/auth/login", {
      email,
      password,
    });
    const { token, user: loggedInUser } = response.data;
    console.log(response.data);
    localStorage.setItem("token", token);
    console.log("Signing in");
    setUser(loggedInUser);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
