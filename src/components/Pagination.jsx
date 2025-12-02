import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import "../assets/pagination.css";

export default function Pagination() {
  const { currentpage, changePage, emtyPage } = useContext(ProductContext);

  return (
    <>
      <div className="pagination-container">
        <button
          key="prev"
          onClick={() => changePage(currentpage - 1)}
          disabled={currentpage === 1}
          className={`pagination-btn ${currentpage === 1}`}
        >
          ← Anterior
        </button>

        <button
          key="next"
          onClick={() => changePage(currentpage + 1)}
          disabled={emtyPage}
          className={`pagination-btn ${emtyPage}`}
        >
          Siguiente →
        </button>
      </div>
    </>
  );
}
