import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(({

    name: 'counter',         //slice ka name


    initialState: {        //starting value just like usestate(0) karte hai 
        count: 0
    },


    reducers: {              //ek object inside reducers function jo ki
        increment: (state) => {
            //initialstate k value change kart
            state.count += 1
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
        setvaluecoutner:(state,action)=>{
            state.count=action.payload
        }
    }
}))
export const { increment, decrement ,setvaluecoutner } = counterSlice.actions;

// createSlice() ne hamare reducers ke basis par actions automatically bana diye. taaki Counter component mein use kar sakein.

export default counterSlice    // Iska use hum store.js mein kar rahe hain:

