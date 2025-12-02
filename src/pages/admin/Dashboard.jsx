import SideMenu from "./components/SideMenu";
import "./assets/dashboard.css";
import { useState } from "react";
import DashboardProducts from "./components/DashboardProducts";
import DashboardCategory from "./components/DashboardCategory";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboardProducts");

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const menuSide = (value) => {
    switch (value) {
      case "dashboardProducts":
        return <DashboardProducts />;
      case "dashboardCategory":
        return <DashboardCategory />;
      default:
        return <DashboardProducts />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="side-container">
        <SideMenu currentPage={currentPage} onChangePage={changePage} />
      </div>
      <div className="dashboard-main-container">{menuSide(currentPage)}</div>
    </div>
  );
}
