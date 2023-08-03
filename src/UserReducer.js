import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Data";
import { act } from "react-dom/test-utils";

export const UserReducer = createSlice({
    name:'user',
    initialState:Data,
    reducers:{
        addUser : (state,action) =>{
            // console.log(action);
            state.push(action.payload)
        },
        updateUser : (state,action) =>{
            const{id,name,email} = action.payload
            const updateUser = state.find((UpdUser) =>UpdUser.id == id)
            if(updateUser){
                updateUser.name = name
                updateUser.email = email
            }
        },
        deleteuser: (state,action) =>{
            const{id} = action.payload
            const deleteUser = state.find((delUser) => delUser.id == id)
            if(deleteUser){
                return state.filter(delUser => delUser.id !== id)
            }
        }
    }
})
export const {addUser,updateUser,deleteuser} = UserReducer.actions
export default UserReducer.reducer