//import "../assets/inputForm.css";

export default function SelectForm({
  data,
  error,
  title,
  id,
  options = [],
  handleChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>

      <select name={id} id={id} value={data} onChange={handleChange}>
        <option value="">Seleccione una opción</option>
        {options.map((op, i) => (
          <option key={i} value={op}>
            {op}
          </option>
        ))}
      </select>

      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
