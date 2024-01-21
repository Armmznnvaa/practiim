// import './App.css'
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import { ROUTES } from './routers'

// function App() {

// const routes =createBrowserRouter(ROUTES)
//   return (
//   <RouterProvider router={routes}/>
//   )
// }

// export default App

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home";
import UserRoot from "./UserRoot";
import Basket from "./basket";
import BasketItemContextProvider from "./context/BasketItemContext";
import Add from "../src/pages/Add";
import Details from "./pages/Details";
import Wishlist from "./whishlist";
import WhishlistItemContextProvider from "./context/WhislistItemContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/addItem",
        element: <Add />,
      },
      {
        path: "/detail/:id",
        element: <Details />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <WhishlistItemContextProvider>
        <BasketItemContextProvider>
          <RouterProvider router={router} />
        </BasketItemContextProvider>
      </WhishlistItemContextProvider>
    </>
  );
};

export default App;
