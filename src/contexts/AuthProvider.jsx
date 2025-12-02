import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import StorageService from "../services/storage-service";

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = StorageService.getUser();
    if (user?.id) {
      setAuth(user);
    }
    setLoading(false);
  }, []);

  const addUser = (user) => {
    StorageService.saveUser(user);
    setAuth(user);
  };

  const logout = () => {
    StorageService.logout();
    setAuth(null);
  };
  
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        addUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
