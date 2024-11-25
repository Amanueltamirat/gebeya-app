import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({productId, quantity});
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }else{
                state.items = (state.items).filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
    removeItem(state, action) {
      const nextItem =  (state.items).filter( cartItem => cartItem.productId !== action.payload.productId);
        state.items = nextItem
        localStorage.setItem("carts", JSON.stringify(state.items));    
    },
       
       clearCart(state, action) {
      state.items = [];
      localStorage.setItem("carts", JSON.stringify(state.items));
    //   toast.error("Cart cleared", { position: "bottom-left" });
    },
    
    }
})
export const { addToCart, changeQuantity,clearCart,  removeItem} = cartSlice.actions;
export default cartSlice.reducer;