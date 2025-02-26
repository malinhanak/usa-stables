import { useEffect, useMemo, useState } from "react";
import type { AuthProps } from "./types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../components/Firebase";
import { AuthContext } from "./context";

export function AuthProvider({ children }: AuthProps) {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  });

  async function initializeUser(user: any | null) {
    if (user) {
      setCurrentUser({ ...user });
      setIsLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsLoggedIn(false);
    }
    setLoading(false);
  }

  const value = useMemo(
    () => ({ currentUser, isLoggedIn, loading }),
    [currentUser, isLoggedIn, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
