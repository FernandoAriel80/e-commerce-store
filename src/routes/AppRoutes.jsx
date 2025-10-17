import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
       {/*  <Route path="about" element={<About />} /> */}
       <Route path="*" element={ <><h1>404 Pagina no encontrada</h1></>} />
      </Route>
    </Routes>
  );
}
