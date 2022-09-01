export type Products = {
  id : number
  name : string
  price : number
  description : string
  imageUri : string
};

export type OrderLocationData ={
    address: string,
    latitude: number,
    longitude: number,
}
type productId ={
  id:number;
}

export type OrderPayLoad={

  products: productId[];
} & OrderLocationData;