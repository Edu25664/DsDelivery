import { Products } from "./types";

export function checkIsSelected( selectedProducts: Products[], product: Products){
    return selectedProducts.some(item => item.id === product.id);
}

export function FormatPrice(price: number) {
    const formatter = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return formatter.format(price);
  }
