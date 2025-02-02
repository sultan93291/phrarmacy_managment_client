import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoggedInUserData } from "@/Redux/features/loggedInUserSlice";
import { createContext } from "react";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState("user");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found. User not logged in.");
      return;
    }

    // Function to fetch data
    const fetchData = () => {
      axios({
        method: "GET",
        url: "https://aamairk.softvencefsd.xyz/api/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          console.log(res.data.data);
          dispatch(setLoggedInUserData(res?.data?.data));
          setRole(res?.data?.data?.role || "user");
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          localStorage.removeItem("token");
        });
    };

    // Initially fetch data
    fetchData();

    // Listen to route changes by checking window.location
    const onRouteChange = () => {
      fetchData();
    };

    // Listen for popstate (browser navigation) and pushState (programmatic navigation)
    window.addEventListener("popstate", onRouteChange);
    const originalPushState = window.history.pushState;
    window.history.pushState = (...args) => {
      originalPushState.apply(window.history, args);
      onRouteChange(); // Call on route change when pushState is triggered
    };

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("popstate", onRouteChange);
      window.history.pushState = originalPushState; // Restore original pushState method
    };
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRole("user");
    dispatch(setLoggedInUserData(null)); // Reset Redux state
    window.location.href = "/";
  };

  const allValues = {
    role,
    setRole,
    isAuthenticated: localStorage.getItem("token"),
    handleLogout,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
