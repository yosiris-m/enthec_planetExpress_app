import "./styles/App.scss";
import logo from "../src/images/logo.png";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Newsletter from "./components/Newsletter";
import Articles from "./components/Articles";
import listOfArticles from "./data/list-of-articles";
import { useState } from "react";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [filterText, setFilterText] = useState("");
  const filteredArticles = listOfArticles.filter((item) =>
    item.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
  );

  console.log(listOfArticles);

  return (
    <Router>
      <div>
        <Link to="/">
          <img src={logo} className="images" alt="imagen" />
        </Link>
      </div>

      <Switch>
        <Route path="/" exact>
          <Search onTextChange={(text) => setFilterText(text)} />
          <Articles articles={filteredArticles} />
          <Newsletter />
        </Route>
        <Route path="/article/:id">
          <ItemDetail articles={listOfArticles} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
