import { useState } from "react";
import { User } from "../../interfaces/Authentication";

export const useLocalStorage = (keyName: string, defaultValue: User) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        const user: User = JSON.parse(value);
        return user;
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: User) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue] as const;
};
