import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice(
  {
    name:"products",
    initialState:{
      data:[]
    },
    reducers:{
      addProduct(state,action){
         state.data.filter((product)=>{
          if (action.payload.id ===product.id){
            product.qty+=1
          }
          else{
          state.data.push({
            name:action.payload.name,
            cost:action.payload.cost,
            id:action.payload.id,
            qty:action.payload.qty
          })
        }
        })
        
      },
      removeProduct(state,action){
        const updated =state.data.filter((product)=>{
          return product.id !== action.payload
        })
        state.data=updated


      }
    }
  }
)
export const{addProduct,removeProduct}=productSlice.actions
export const productReducer=productSlice.reducer
