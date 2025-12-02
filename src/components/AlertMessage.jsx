import { useEffect } from "react";
import "../assets/alertMessage.css";

export default function AlertMessage({
  type = "info",
  message = "",
  visible = false,
  autoClose = true,
  closeTime = 3000,
  onClose,
}) {
  useEffect(() => {
    if (visible && autoClose && onClose) {
      const timer = setTimeout(() => onClose(), closeTime);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`alert-box alert-${type}`}>
      <span>{message}</span>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
}
