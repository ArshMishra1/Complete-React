import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import Product from "../Product";
import { Apifeature } from "./Product";

export const store = configureStore({
     reducer:{
        counter :counterSlice.reducer,
        products:Apifeature.reducer
     }
})

