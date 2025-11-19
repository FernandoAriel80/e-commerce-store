import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function AdminMiddleware({ children }) {
  const { auth } = useContext(AuthContext);
  if (auth && auth.role != "admin") {
    return <h1>usted no tiene los permisos de usar esta ruta!</h1>;
  }
  return children;
}
