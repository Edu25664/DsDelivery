import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../Footer";
import { fechtProducts, saveOrder } from "./api";
import { checkIsSelected } from "./helpers";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import ProductList from "./ProductList";
import SteepsHeader from "./SteepsHeader";
import "./style.css";
import { OrderLocationData, Products } from "./types";

function Orders() {
  const [product, setProduct] = useState<Products[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Products[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  useEffect(() => {
    fechtProducts()
      .then((response) => setProduct(response.data))
      .catch((erro) => toast.warning('Produtos estão carregando!'));
  }, []);

  const handleSelectProduct = (product: Products) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((response) => {
        toast.error(`Pedido enviado Nº ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }

  return (
    <>
      <div className="orders-container">
        <SteepsHeader />
        <ProductList
          product={product}
          onselectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
}
export default Orders;
