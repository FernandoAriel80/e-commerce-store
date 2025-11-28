//import "../assets/inputForm.css";

export default function TextAreaForm({
  data,
  error,
  title,
  id,
  handleChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <textarea
        id={id}
        name={id}
        value={data}
        onChange={handleChange}
        placeholder={title}
        rows="4"
      ></textarea>

      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
