import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice(
  {
    name:"products",
    initialState:{
      data:[],
      dropdown:false
      
    },
    reducers:{
      addProduct(state,action){
         const productIndex= state.data.findIndex((product)=> product.id === action.payload.id)
        if(productIndex>= 0){
          state.data[productIndex].qty +=1
        }else{
          state.data.push({
            title:action.payload.title,
            price:action.payload.price,
            id:action.payload.id,
            qty:action.payload.qty,
            image: action.payload.image
          })
        }
        }
        
      ,
      removeProduct(state,action){
        const updated =state.data.filter((product)=>{
          return product.id !== action.payload
        })
        state.data=updated


      },     
     
      isCartOpen(state,action){
        state.dropdown=action.payload

      },increment(state,action){
        const productIndex= state.data.findIndex((product)=> product.id === action.payload)
        if(productIndex>= 0){
          state.data[productIndex].qty +=1

      }
    
    
    }
    ,decrement(state,action){
      const productIndex= state.data.findIndex((product)=> product.id === action.payload)
      if( state.data[productIndex].qty > 1){

        state.data[productIndex].qty -=1

    }else{
      const updated =state.data.filter((product)=>{
        return product.id !== action.payload
      })
      state.data=updated        
    }}}})
    

  

  

export const{addProduct,removeProduct,isCartOpen,increment,decrement}=productSlice.actions
export const productReducer=productSlice.reducer
