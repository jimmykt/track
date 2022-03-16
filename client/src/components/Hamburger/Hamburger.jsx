import "./Hamburger.scss";

function Hamburger(props) {
  return (
    <div className="hamburger" onClick={props.onClick}>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
    </div>
  );
}

export default Hamburger;
