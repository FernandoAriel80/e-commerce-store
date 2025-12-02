//import "../assets/inputForm.css";
import { IoIosInformationCircle } from "react-icons/io";

export default function ImageForm({ data, error, id, title, handleChange }) {
  return (
    <>
    <div className="form-group">
      <div className="form-title"  style={{display: "flex"}}>
        <label htmlFor={id}>{title}</label>
        <IoIosInformationCircle
          title="No carga imagenes reales, solo lo simula."
        />
      </div>
      <input
        type="file"
        id={id}
        name={id}
        accept="image/*"
        onChange={(e) => handleChange(e, true)}
      />

      {data && (
        <img
          src={typeof data === "string" ? data : URL.createObjectURL(data)}
          alt="preview"
          className="image-preview"
          width={40}
          height={40}
        />
      )}

      {error && <span className="error-message">{error}</span>}
    </div></>
  );
}
