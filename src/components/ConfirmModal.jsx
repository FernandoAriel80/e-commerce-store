import "../assets/confirmModal.css";

export default function ConfirmModal({ visible, message, onConfirm, onCancel }) {
  if (!visible) return null;

  return (
    <div className="confirm-overlay">
      <div className="confirm-box">

        <p className="confirm-message">{message}</p>

        <div className="confirm-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>

          <button className="btn-confirm" onClick={onConfirm}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
