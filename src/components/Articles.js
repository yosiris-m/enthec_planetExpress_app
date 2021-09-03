import { Link } from "react-router-dom";
import "../styles/articles.scss";

function Articles({ articles }) {
  return (
    <div>
      <h2>Nuestras ofertas Flash!!</h2>
      <div className="articles">
        {articles.map((item) => (
          <Link to={`/article/${item.id}`} key={item.id}>
            <div>
              <img
                src={item.image}
                className="articles_severalArticles"
                alt="imagen"
              />
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Articles;
