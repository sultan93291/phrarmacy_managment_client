import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, useLocation } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./provider/AuthProvider/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider
      clientId={
        "578029591078-fv8sbuh4au2tjsvo8pf4k1m6aockqs9n.apps.googleusercontent.com"
      }
      redirectUri="https://phrarmacy-managment-client.vercel.app/auth/callback"
    >
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider
            router={router}
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          />
          <Toaster />
        </AuthProvider>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
