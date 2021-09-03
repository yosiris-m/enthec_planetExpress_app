import { useParams } from "react-router-dom";
import "../styles/itemDetail.scss";

function ItemDetail({ articles }) {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id);

  return (
    <div>
      <div>
        <img src={article.image} alt="tShirt" />
      </div>
      <p>{article.name}</p>
      <p>color: {article.color}</p>
      <p>Material: {article.description}</p>
      <p>Precio: {article.price}</p>
    </div>
  );
}

export default ItemDetail;
