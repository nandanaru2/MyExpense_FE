// src/views/Home.tsx
import React from 'react';
import { User } from '../types/User';

interface HomeProps {
  user?: User;
  onSignOut?: () => void;
}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <h1>Welcome, Nandan!</h1>
      
    </div>
  );
};