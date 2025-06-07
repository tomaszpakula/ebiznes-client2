import axios from "axios";
import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

export default function useCarts() {
  const { items, setItems } = useContext(ProductContext);
  const { setCartChange } = useContext(ProductContext);
  const clearCart = () => {
    axios(`https://tomaszpakula-server-c9ebbge6ajhjfwhp.polandcentral-01.azurewebsites.net/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setItems([]);
    });
  };

  const addToCart = (productId, quantity) => {
    axios("https://tomaszpakula-server-c9ebbge6ajhjfwhp.polandcentral-01.azurewebsites.net/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        productId: productId,
        quantity: quantity,
      },
    }).then((response) => {
      setCartChange((prev) => !prev);
      return response;
    });
  };
  const removeItem = (id) => {
    axios(`https://tomaszpakula-server-c9ebbge6ajhjfwhp.polandcentral-01.azurewebsites.net/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      const filteredItems = items.filter((item) => item.productId !== id);
      setItems(filteredItems);
    });
  };

  return { clearCart, removeItem, addToCart };
}
