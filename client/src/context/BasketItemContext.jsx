import useItems from "antd/es/menu/hooks/useItems";
import React, { createContext, useEffect, useState } from "react";
export const BasketItemContext = createContext("");
const BasketItemContextProvider = ({ children }) => {
  const [basketItem, setBasketItem] = useState(
    JSON.parse(localStorage.getItem("basketItem"))
      ? JSON.parse(localStorage.getItem("basketItem"))
      : []
  );

  const addBasket = async (product) => {
    console.log("product", product);
    const currentItem = basketItem.find((x) => x._id === product._id);
    if (currentItem) {
      currentItem.quantity++;
      setBasketItem([...basketItem]);
    } else {
      setBasketItem([...basketItem, { ...product, quantity: 1 }]);
    }
  };
  const handleIncrease = async (item) => {
    console.log("item", item);
    const updatedData = basketItem.find((x) => x._id === item._id);
    if (updatedData) {
      updatedData.quantity++;
      setBasketItem([...basketItem]);
      return;
    }
    setBasketItem(updatedData);
  };
  const handleDecrease = async (item) => {
    console.log("item", item);
    if (item.quantity > 1) {
      const updatedData = basketItem.find((x) => x._id === item._id);
      if (updatedData) {
        updatedData.quantity--;
        setBasketItem([...basketItem]);
        return;
      }
    }
    setBasketItem(updatedData);
  };

  useEffect(() => {
    localStorage.setItem("basketItem", JSON.stringify(basketItem));
  }, [basketItem]);

  return (
    <BasketItemContext.Provider
      value={{
        basketItem,
        setBasketItem,
        addBasket,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </BasketItemContext.Provider>
  );
};

export default BasketItemContextProvider;
