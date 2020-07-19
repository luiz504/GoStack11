import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn'; //eslint-disable-line
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyles />
  </>
);

export default App;
