// import logo from "./logo.svg";
import "./styles/App.scss";
import logo from "../src/images/logo.png";

import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Search from "./components/Search";
import Users from "./components/Users";
import Articles from "./components/Articles";

function App() {
  return (
    <Router>
      <div>
        <div>
          <img src={logo} className="images" alt="imagen" />
        </div>
        <Search />
        <Link to="/newsletter" className="newsletter">
          Subscribe to the newsletter!
        </Link>
        <Switch>
          <Route path="/newsletter">
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Articles />
    </Router>
  );
}

export default App;
