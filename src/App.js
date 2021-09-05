import { BrowserRouter, Route, Switch } from "react-router-dom";
import listOfArticles from "./data/list-of-articles";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticleDetail from "./pages/ArticleDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Articles from "./pages/Articles";
import AboutUs from "./pages/AboutUs";
import Newsletter from "./components/Newsletter";

function App() {
  const [filterText, setFilterText] = useState("");
  const [cart, setCart] = useState([]);
  const filteredArticles = listOfArticles.filter((item) =>
    item.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
  );

  const handleAddToCart = (article) => {
    setCart([...cart, article]);
  };

  return (
    <BrowserRouter basename="/enthec_planetExpress_app">
      <Header setFilterText={setFilterText} cart={cart} />
      <Switch>
        <Route path="/" exact>
          <Articles articles={filteredArticles} />
        </Route>
        <Route path="/article/:id">
          <ArticleDetail
            articles={listOfArticles}
            onAddToCart={handleAddToCart}
          />
        </Route>
        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
