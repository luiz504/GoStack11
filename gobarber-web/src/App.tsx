import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; //eslint-disable-line

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyles />
  </>
);

export default App;
