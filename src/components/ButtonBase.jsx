import "../styles/ButtonBase.css";

export const ButtonBase=(
  {label, className, onClick=null, children=null}
)=>{
  const ButtonBase = {
    label: label,
    className: className,
    onClick: onClick,
    children: children
  };

  return (
    <button className={`button ${ButtonBase.className}`.trim()}
      onClick={ButtonBase.onClick}
      >
       {ButtonBase.children || ButtonBase.label }
    </button>
  );
}

export const PrimaryButton = (props) =>{
  return (<ButtonBase {...props} className="button-primary info" />);
}
export const SecondaryButton = (props) =>{
  return (<ButtonBase {...props} className="button-secondary" />);
}
export const DangerButton = (props) =>{
  return (<ButtonBase {...props} className="button-danger danger" />);
}
export const OutlinedButton = (props) =>{
  return (<ButtonBase {...props} className="button-outlined" />);
}
export const RoundedButton  = (props) =>{
  return (<ButtonBase {...props} className="button-rounded" />);
}
