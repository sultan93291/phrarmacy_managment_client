/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
"use client";
import { setLoggedInUserData } from "@/Redux/features/loggedInUserSlice";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const dispatch = useDispatch(); // 
  const [role, setRole] = useState("user");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "http://aamairk.softvencefsd.xyz/api/me",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res.data.data); // Access response data
        dispatch(setLoggedInUserData(res?.data?.data));
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const allValues = { role, setRole };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
