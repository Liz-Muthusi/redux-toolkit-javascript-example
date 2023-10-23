import { createSlice } from "@reduxjs/toolkit"

const initialState= {
  numberOfCakes:20
}

const cakeSlice = createSlice(
  {
    initialState,
    name:'cakes',
    reducers:{
      orderCake:(state)=>{
        state.numberOfCakes--
      },
      stockCakes:(state, action)=>{
        state.numberOfCakes+=action.payload
      }
    }
  }
)
export default cakeSlice.reducer
export const {orderCake, stockCakes}= cakeSlice.actions