/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState('user');

  const allValues = { role, setRole };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
