import { configureStore } from "@reduxjs/toolkit";
import { Todoslice } from "../Features/Todo/TodoSlice";

 export let store=configureStore({
    reducer:Todoslice
})

