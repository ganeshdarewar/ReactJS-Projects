import { createContext, useContext } from "react";

export const ProductContext = createContext({
  cartProducts: [
    {
      id: 1,
      price: 12231,
      quantity: 2,
    },
  ],
  addProducts: () => {},
});

export const ProductContextProvider = ProductContext.Provider;

export const useProducts = () => {
  return useContext(ProductContext);
};
