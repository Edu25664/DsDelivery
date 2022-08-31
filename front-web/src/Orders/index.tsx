import { useEffect, useState } from "react";
import { fechtProducts } from "./api";
import OrderLocation from "./OrderLocation";
import ProductList from "./ProductList";
import SteepsHeader from "./SteepsHeader";
import "./style.css";
import { OrderLocationData, Products } from "./types";

function Orders() {
  const [product, setProduct] = useState<Products[]>([]);
  const [orderlocation, setOrderLocation] = useState<OrderLocationData>();
  console.log(product);

  useEffect(() => {
    fechtProducts()
      .then((response) => setProduct(response.data))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <>
      <div className="orders-container">
        <SteepsHeader />
        <ProductList product={product} />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
      </div>
    </>
  );
}
export default Orders;
