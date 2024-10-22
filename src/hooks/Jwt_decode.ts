import { jwtDecode } from "jwt-decode";

// Assuming you have the JWT stored in localStorage
const token = localStorage.getItem('accessToken');
if (token) {
  const decoded = jwtDecode(token);
}
import { useState } from 'react';

// Define a type-safe custom hook for localStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  // Retrieve stored value, or use initial value if not found
  const [storedValue, _setStoredValue] = useState<any>(() => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const decoded = jwtDecode(token);
        return decoded ? decoded : initialValue;

      }
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Function to set value in both state and localStorage
//   const setValue = (value: T | ((val: T) => T)) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to remove the key from localStorage
//   const removeItem = () => {
//     try {
//       window.localStorage.removeItem(key);
//       setStoredValue(initialValue); // Reset state to initial value after removal
//     } catch (error) {
//       console.error(error);
//     }
//   };

  return [storedValue] as const;
}

export default useLocalStorage;
