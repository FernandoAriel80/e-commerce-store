import'../assets/btnForm.css'
export default function BtnForm({name}) {
  return (
    <>
      <button type="submit" className="submit-btn">
        {name}
      </button>
    </>
  );
}
