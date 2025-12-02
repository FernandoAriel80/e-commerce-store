import "../assets/sideMenu.css";
export default function SideMenu({ currentPage, onChangePage }) {
  return (
    <>
      <div className="menu-side-list">
        <div
          className={`btn-page ${
            currentPage == "dashboardProducts" ? "active" : ""
          }`}
          onClick={() => onChangePage("dashboardProducts")}
        >
          Productos
        </div>
        <div
          className={`btn-page ${
            currentPage == "dashboardCategory" ? "active" : ""
          }`}
          onClick={() => onChangePage("dashboardCategory")}
        >
          Categoría
        </div>
        <div className="btn-page">Algo</div>
        <div className="btn-page">Algo</div>
        <div className="btn-page">Algo</div>
      </div>
    </>
  );
}
