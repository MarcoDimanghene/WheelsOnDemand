import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING_COST } from "../../utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    shippingCost: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addTocart: (state, action) =>{
            return {
                ...state,
                shippingCost: SHIPPING_COST,
                cartItems: 
            }
        }
    }
})