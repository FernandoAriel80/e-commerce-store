import "../assets/btnTable.css";
export default function BtnTable({ children, color = "blue", text }) {
  return (
    <>
      <button className={`btn-table ${color}`} title={text}>{children}</button>
    </>
  );
}
