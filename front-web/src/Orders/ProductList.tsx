import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Products } from "./types";
type Props = {
  product: Products[];
  selectedProducts: Products[];
  onselectProduct: (product: Products) => void;
};
function ProductList({ product, onselectProduct, selectedProducts }: Props) {
  return (
    <>
      <div className="orders-list-container">
        <div className="orders-list-items">
          {product.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onselectProduct={onselectProduct}
              isSelected={checkIsSelected(selectedProducts, product)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductList;
