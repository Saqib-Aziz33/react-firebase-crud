import { createContext, useReducer } from "react";
import userReducer from "./userReducer";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    error: null,
    loading: false,
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
