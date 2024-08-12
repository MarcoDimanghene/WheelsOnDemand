import { createSlice } from "@reduxjs/toolkit";
import { carsdata } from "../../Data/data";

const INITIAL_STATE = {
    products: carsdata,
    selctid: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => state,

        selectProductById: (state, action) => {
            state.selctid = action.payload;
        },
    }
});


export const { getProducts, selectProductById } = productsSlice.actions;


export default productsSlice.reducer;
