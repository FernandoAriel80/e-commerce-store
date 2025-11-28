import'../assets/btnForm.css'
export default function BtnForm({name,disabled}) {
  return (
    <>
      <button type="submit" className="submit-btn" disabled={disabled}>
        {name}
      </button>
    </>
  );
}
