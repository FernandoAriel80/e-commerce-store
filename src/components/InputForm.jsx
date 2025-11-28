import "../assets/inputForm.css";
export default function InputForm({
  data,
  error,
  title,
  type,
  id,
  handleChange,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">{title}</label>
        <input
          type={type}
          id={id}
          name={id}
          value={data}
          onChange={handleChange}
          placeholder={title}
          //required
        />
        {error && <span className="error-message">{error}</span>}
      </div>
    </>
  );
}
