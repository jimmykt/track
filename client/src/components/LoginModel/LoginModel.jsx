import "./LoginModel.scss";
import SignUpModel from "../SignUpModel/SignUpModel";

function LoginModel(props) {
  return (
    <div className="loginModel">
      <div className="loginModel__content">
        <p className="loginModel__close" onClick={props.onClick}>
          X
        </p>
        <form className="loginModel__form">
          <input
            className="input loginModel__username"
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="input loginModel__password"
            type="password"
            name="passowrd"
            id="password"
            placeholder="password"
          />
          <button className="loginModel__login-button">Login</button>
          <p className="loginModel__signup" onClick={props.signUp}>
            SignUp
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModel;
