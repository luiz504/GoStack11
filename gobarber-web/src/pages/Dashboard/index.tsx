import React from 'react';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <button type="button" onClick={signOut} style={{ background: 'pink' }}>
      SignOut
    </button>
  );
};

export default Dashboard;
