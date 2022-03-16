import "./SignUpModel.scss";

function SignUpModel(props) {
  const signUpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-model">
      <div className="signup-model__content">
        <p className="signup-model__close" onClick={props.toggle}>
          X
        </p>

        <form className="signup-model__form" onSubmit={signUpHandler}>
          <input
            className="signup-model__input"
            type={"text"}
            name={"first-name"}
            id={"first-name"}
            placeholder="First Name"
          />
          <input
            className="signup-model__input"
            type={"text"}
            name={"last-name"}
            id={"last-name"}
            placeholder="Last Name"
          />
          <input
            className="signup-model__input"
            type={"text"}
            name={"email"}
            id={"email"}
            placeholder="email"
          />
          <input
            className="signup-model__input"
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder="Password"
          />
          <input
            className="signup-model__input"
            type={"password"}
            name={"password-confirm"}
            id={"password-confirm"}
            placeholder="Confirm Password"
          />
          <button className="signup-model__button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpModel;
