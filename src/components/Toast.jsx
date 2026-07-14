import "../styles/Toast.css";
import { PrimaryButton, RoundedButton } from "./ButtonBase";

export const Toast = ({title, message, type, onClose})=> {

  return (
    <div className={`toast-container`} >
      <div className={`toast__header ${type ? type : "toast-info"}`}>
        <h4>{title}</h4>
        <RoundedButton label="close"><span>&times;</span></RoundedButton>
      </div>
      <div className="toast__body">
        {message}
      </div>
      <div className="toast__footer">
        <PrimaryButton
          label="Close Toast"
          onClick={onClose}
        ></PrimaryButton>
      </div>
    </div>
  );
}
