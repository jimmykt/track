import "./LoginPage.scss";

import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  return (
    <main className="Login">
      <form className="login__form" onSubmit={this.loginHandler}>
        <input
          className="login__username"
          type="text"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="login__password"
          type="password"
          name="passowrd"
          id="password"
          placeholder="password"
        />
        <button className="login__login-button">Login</button>

        {this.state.error && (
          <div className="login__message">{this.state.error}</div>
        )}

        {this.state.successLogin && <Redirect to="/" />}
      </form>
    </main>
  );
}

export default LoginPage;
