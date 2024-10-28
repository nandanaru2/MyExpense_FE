import {jwtDecode} from 'jwt-decode';
import { Tokentype } from '../views/Home';

export const jwtdecode = (token: string) => {
  if (token) {
    const decodedToken:Tokentype  = jwtDecode(token);  // Decode the token  // Log the decoded payload
    return decodedToken;
  }
  return null;  // Return null if token is not provided
};
