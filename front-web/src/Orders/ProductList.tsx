import ProductCard from "./ProductCard";
import { Products } from "./types";
type Props = {
  product: Products[];
};
function ProductList({product} : Props) {
  return (
    <>
      <div className="orders-list-container">
        <div className="orders-list-items">
          {product.map(product => (<ProductCard key={product.id} product ={product}/>))}
        </div>
      </div>
    </>
  );
}
export default ProductList;
