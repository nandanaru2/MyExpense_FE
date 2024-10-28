import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import UseLocalStorage from '../hooks/UseLocal_hooks';
import { jwtdecode } from '../services/jwt';
import { UserJwtdetails } from './SignIn';

interface HomeProps {
  user?: User;
  onSignOut?: () => void;
}
export interface Tokentype{
  user:UserJwtdetails
}
export const Home: React.FC<HomeProps> = () => {
  const [Loading,setLoading] = useState<boolean>(false)
  const [userDetails,setuserDetails] = useState<UserJwtdetails|null|undefined>({ firstname:"",
    lastname: "",
    email:"",
    userId:""})
  const [user] = UseLocalStorage<string>('Token', "");
    useEffect(()=>{
      setLoading(false)
      let Userdetail :Tokentype|null  =jwtdecode(user);
      setuserDetails(Userdetail?.user)
      setLoading(true)

    },[])

  return (
    <div>
      {Loading ? (
        <h1>Welcome, {userDetails?.firstname}</h1>
      ) : (
        <h1>Loading user data...</h1>
      )}
    </div>
  );
}
