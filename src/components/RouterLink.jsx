import { NavLink } from "react-router-dom";

function RouterLink({ route, name }) {
  return (
    <>
      <div className="router-link">
        <NavLink to={route} className={({ isActive }) => isActive ? "active" : "normal"} onClick={() => window.scrollTo(0, 0)}>
          {name}
        </NavLink>
      </div>
    </>
  );
}

export default RouterLink;
