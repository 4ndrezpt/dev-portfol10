import { PrimaryButton, OutlinedButton, DangerButton, RoundedButton } from "./ButtonBase";
import "../styles/Modal.css";

export const Modal=({children, title,
  className,
  ctaOutlined ,
  ctaPrimary,
  onConfirm,
  content,
  onCancel})=>{

    return (
    <div>
      <div className={`Modal__container`}>
        <div className={`Modal__header ${className}`}>
          <h4>{ title }</h4>
          <RoundedButton onClick={onCancel} label="X">Close</RoundedButton>
        </div>
        <div className="Modal__body">
          {content}
        </div>
        <div className="Modal__footer">
          <OutlinedButton
          label={ctaOutlined}
          onClick={onCancel} />
          { className == "danger" ? <DangerButton className="button-danger"
          label={ctaPrimary}
          onClick={onConfirm}
          ></DangerButton> : <PrimaryButton
          className="button-danger"
          label={ctaPrimary}
          onClick={onConfirm}/>}

        </div>
      </div>
    </div>
  );
}
export const ErrorModal = (
  {
  children,
  title,
  className = "",
  content,
  onCancel})=>{
  return (
    <div>
      <div className={`Modal__container`}>
        <div className={`Modal__header ${className}`}>
          <h4>{ title }</h4>
          <RoundedButton onClick={onCancel} label="X">Close</RoundedButton>
        </div>
        <div className="Modal__body">
          Error: {content}
        </div>
        <div className="Modal__footer">
          <DangerButton className={className}
            >Close</DangerButton>
        </div>
      </div>
    </div>
  );
}
