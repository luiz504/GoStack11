import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; //eslint-disable-line

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      <ToastContainer />
    </AuthProvider>

    <GlobalStyles />
  </>
);

export default App;
