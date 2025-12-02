import "../assets/overlay.css"
export default function Overlay({ children }) {
  return (
    <>
      <div className="overlay">{children}</div>
    </>
  );
}
