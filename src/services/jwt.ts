import {jwtDecode} from 'jwt-decode';

interface JwtPayload {
  token: string; // You can add other properties that are part of your token payload, e.g., userId, email, etc.
}

export const jwtValidate = (token: string): JwtPayload | null => {
  if (token) {
    const decodedToken: JwtPayload = jwtDecode<JwtPayload>(token);  // Decode the token
    console.log(decodedToken);  // Log the decoded payload
    return decodedToken;
  }
  return null;  // Return null if token is not provided
};
