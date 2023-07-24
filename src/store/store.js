import { configureStore } from "@reduxjs/toolkit";
import { addProduct,removeProduct } from "./productsSlice";
import { productReducer } from "./productsSlice";
const store=configureStore({
  reducer:{
    products:productReducer
  }
})

export{ store,addProduct,removeProduct}