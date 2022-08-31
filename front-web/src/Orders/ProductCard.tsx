import { FormatPrice } from "./helpers";
import { Products } from "./types";

type Props = {
  product: Products;
  onselectProduct: (product: Products) => void;
  isSelected:boolean
};

function ProductCard({ product, onselectProduct, isSelected }: Props) {
  return (
    <>
      <div className={`order-card-container ${isSelected ? 'selected':''}`} onClick={() => onselectProduct(product)}>
        <h3 className="order-card-title">{product.name}</h3>
        <img
          src={product.imageUri}
          className="order-card-image"
          alt={product.name}
        />
        <h3 className="order-card-price">{FormatPrice(product.price)}</h3>
        <div className="order-card-description">
          <h3>Descrição</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
