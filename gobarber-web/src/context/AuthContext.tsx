import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface Icredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(creadentials: Icredentials): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    console.log('response', response); //eslint-disable-line
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'luiz', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
