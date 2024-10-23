import React from 'react';
import { User } from '../types/User';
import UseLocalStorage from '../hooks/UseLocal_hooks';

interface HomeProps {
  user?: User;
  onSignOut?: () => void;
}

export const Home: React.FC<HomeProps> = () => {
  const [userdata] = UseLocalStorage<any>('Token', '');
  return (
    <div>
      {userdata ? (
        <h1>Welcome, {userdata.firstname}</h1>
      ) : (
        <h1>Loading user data...</h1>
      )}
    </div>
  );
};
