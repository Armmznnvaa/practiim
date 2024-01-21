import React, { createContext, useEffect, useState } from "react";


export const WhishlistItemContext = createContext("");


const WhishlistItemContextProvider = ({ children }) => {
  const [whishlistItem, setWhishlistItem] = useState(
    JSON.parse(localStorage.getItem("whishlistItem"))
      ? JSON.parse(localStorage.getItem("whishlistItem"))
      : []
  );


  useEffect(() => {
    localStorage.setItem("whishlistItem", JSON.stringify(whishlistItem));
  }, [whishlistItem]);

  return (
    <WhishlistItemContext.Provider
      value={{
        whishlistItem,
        setWhishlistItem
      }}
    >
      {children}
    </WhishlistItemContext.Provider>
  );
};

export default WhishlistItemContextProvider;
