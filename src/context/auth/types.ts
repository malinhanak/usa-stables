import { ReactNode } from "react";

export interface AuthProps {
  children: ReactNode | ReactNode[];
}

export interface AuthContextType {
  currentUser: any | null;
  isLoggedIn: boolean;
  loading: boolean;
}

export const defaultValue: AuthContextType = {
  currentUser: null,
  isLoggedIn: false,
  loading: true,
};
