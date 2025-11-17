import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function RutaProtegida({ children }) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  if (auth.name === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
