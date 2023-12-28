import { createSlice } from "@reduxjs/toolkit";
import { carsdata } from "../../Data/data";

const INITIAL_STATE = {
    products: carsdata,
};

export const productsSlice = createSlice({
    name: "carsdata",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state  => {
        return state ;
        },
    }
});




export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;