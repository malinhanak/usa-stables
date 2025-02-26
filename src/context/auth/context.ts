import { createContext } from "react";
import type { AuthContextType } from "./types";

const defaultValue: AuthContextType = {
  currentUser: null,
  isLoggedIn: false,
  loading: true,
};

export const AuthContext = createContext<AuthContextType | undefined>(
  defaultValue
);
