import "../assets/inputSearch.css";
export default function InputSearch({ search, setSearch }) {
  const searchProducts = async (value) => {
    setSearch(value);
  };
  return (
    <>
      <div className="input-search-container">
        <input
        className="search-input"
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => searchProducts(e.target.value)}
        />
      </div>
    </>
  );
}
