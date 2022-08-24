import ProductList from "./ProductList";
import SteepsHeader from "./SteepsHeader";
import "./style.css";

function Orders() {
  return (
    <>
      <div className="orders-container">
        <SteepsHeader />
        <ProductList/>
      </div>
    </>
  );
}
export default Orders;
