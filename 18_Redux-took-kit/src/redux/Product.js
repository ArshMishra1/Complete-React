import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

 export const fetchproduct=createAsyncThunk(
    'poduct/fetchproduct',
   async ()=>{
          const response=await axios.get("https://dummyjson.com/products");
             return response.data
    }
)

let intialState={
    products:[],
    loading:false,
    error:null
}
export const Apifeature=createSlice({
    name:"prodcut",
    initialState :intialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.pending,(state)=>{
            state.loading=true

        }),
        builder.addCase(fetchproduct.fulfilled,(state ,action)=>{
            state.loading=false,
            state.products=action.payload.products
        }),
        builder.addCase(fetchproduct.rejected,(state, action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
    
})

export default Apifeature.reducer;