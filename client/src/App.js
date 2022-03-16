import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
