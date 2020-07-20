import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; //eslint-disable-line

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Luiz' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyles />
  </>
);

export default App;
