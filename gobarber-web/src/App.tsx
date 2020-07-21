import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; //eslint-disable-line

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyles />
  </>
);

export default App;
