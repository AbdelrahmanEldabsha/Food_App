import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import DataContextProvider from "./dataContext/DataContextProvider";
function App() {
  const [previewCart, setPreviewCart] = useState(false);
  const previewCartHandler = (event) => {
    setPreviewCart(true);
  };
  const hideCartHandler = (event) => {
    setPreviewCart(false);
  };
  return (
      <DataContextProvider>
      {previewCart && (<Cart onClose={hideCartHandler} ></Cart>)}
      <Header onClick={previewCartHandler}></Header>
      <Meals></Meals>
      </DataContextProvider>
  );
}

export default App;
