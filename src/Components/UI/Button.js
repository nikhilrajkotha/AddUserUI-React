import "./Button.css";
function Button(props) {
  return (
    <button
      className="button"
      type={props.type || "Button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
