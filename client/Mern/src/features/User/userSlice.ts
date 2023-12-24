import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



type UserState = {
    value :{
        name:string|null
    }
}

const initialState:UserState = {
   
    value: {
        name: localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name") as string) : null
      }
      
      
   
}


export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
      loginUser : (state:UserState,action:PayloadAction<string>)=>{
          state.value  = {
            name:action.payload
          }
          localStorage.setItem("name",JSON.stringify(action.payload))
      },
      logout : (state:UserState)=>{
        state.value  = {
          name:null
        }
       
       localStorage.clear();
    }
    },
  })


  export const { loginUser,logout } = userSlice.actions
  export default userSlice.reducer