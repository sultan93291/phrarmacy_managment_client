import { AuthContext } from "@/provider/AuthProvider/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
