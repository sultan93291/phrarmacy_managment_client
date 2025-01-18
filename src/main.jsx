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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ClientId = import.meta.env.VITE_GOOGLE_AUTH_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider
      clientId={ClientId}
      redirectUri="https://phrarmacy-managment-client.vercel.app/auth/signup"
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
          <ToastContainer
            position="top-right" // Customize position
            autoClose={3000} // Auto close duration
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Toaster />
        </AuthProvider>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
