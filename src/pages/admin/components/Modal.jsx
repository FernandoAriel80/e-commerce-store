import "../assets/modal.css";
export default function Modal({ children, closeModal, isOpen }) {
  return (
    <>
      <div id="modal" className={`modal ${isOpen}`}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-container">{children}</div>
      </div>
    </>
  );
}
