import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import TrackPage from "./pages/TrackPage/TrackPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/track" component={TrackPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
