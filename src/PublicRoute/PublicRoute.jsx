import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If authenticated, redirect to dashboard or another default page
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
