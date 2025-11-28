import "../assets/modal.css";
export default function Modal({ children, closeModal, isOpen, title = "" }) {
  return (
    <>
      <div id="modal" className={`modal ${isOpen}`}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div>
          <h1 className="modal-title">{title}</h1>
          <div className="modal-container">{children}</div>
        </div>
      </div>
    </>
  );
}
