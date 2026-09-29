import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState={
   todos:[{
    id:1,
    text:"Hello words"
   }]
}

export let Todoslice=createSlice({
    name:"Todo",

    initialState,

    reducers:{
        addTodo:(state,action)=>{
            const todo={
                 todo:{ id:nanoid(),
                     text:action.payload
                    }
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action)=>{
            state.todos=state.todos.filter((todo)=> todo.id !==action.payload)
        }
    }
})

export const{addTodo,removeTodo} =Todoslice.actions
export default Todoslice.reducer