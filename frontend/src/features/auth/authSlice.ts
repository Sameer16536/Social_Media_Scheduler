import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface AuthState{
    id:string|null,
    email:string|null,
    token:string|null
}

const initialState:AuthState={
    id:null,
    email:null,
    token:null
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action:PayloadAction<{id:string;email:string}>){
            state.id = action.payload.id
            state.email = action.payload.email
        },
        logout(state){
            state.id = null,
            state.email = null,
            state.token = null
        }
    }
})

export const {login,logout} =authSlice.actions
export default authSlice.reducer