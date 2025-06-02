import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoggedInUserData } from "@/Redux/features/loggedInUserSlice";

export const AuthContext = createContext(null);
const SiteURl = import.meta.env.VITE_SITE_URL;

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState("user");

  const fetchData = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    axios({
      method: "GET",
      url: `${SiteURl}/api/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        dispatch(setLoggedInUserData(res?.data?.data));
        setRole(res?.data?.data?.role || "user");
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        localStorage.removeItem("token");
      });
  };

  useEffect(() => {
    fetchData();

    const onRouteChange = () => {
      fetchData();
    };

    window.addEventListener("popstate", onRouteChange);
    const originalPushState = window.history.pushState;
    window.history.pushState = (...args) => {
      originalPushState.apply(window.history, args);
      onRouteChange();
    };

    return () => {
      window.removeEventListener("popstate", onRouteChange);
      window.history.pushState = originalPushState;
    };
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRole("user");
    dispatch(setLoggedInUserData(null));
    window.location.href = "/";
  };

  const allValues = {
    role,
    setRole,
    isAuthenticated: localStorage.getItem("token"),
    handleLogout,
    fetchData, // ✅ Expose fetchData here
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
