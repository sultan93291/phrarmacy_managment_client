import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import AuthProvider from './provider/AuthProvider/AuthContextProvider';
import { Toaster } from 'react-hot-toast';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />
    </AuthProvider>
  </StrictMode>
);
