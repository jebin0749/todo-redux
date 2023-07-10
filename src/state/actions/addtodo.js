import { ADD_TODO } from "./actionTypes";
export const addTodo=(title,desc)=>{
    // console.log(title,desc);
    return{
        type:ADD_TODO,
        payload:{
            title,
            desc,
        },
    };
};