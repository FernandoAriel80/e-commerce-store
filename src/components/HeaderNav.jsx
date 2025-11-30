import RouterLink from "./RouterLink";
import "../assets/headerNav.css";
export default function HeaderNav({ auth }) {

  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <RouterLink route="/" name="Inicio" />
          </li>
          <li>
            <RouterLink route="/productos" name="Productos" />
          </li>
          <li>
            <a href="#footer">Información</a>
          </li>
          <li>
            <RouterLink route="/payment" name="Pagar" />
          </li>
          <li>
            {auth?.role == "admin" ? (
              <RouterLink route="/dashboard" name="Admin" />
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
