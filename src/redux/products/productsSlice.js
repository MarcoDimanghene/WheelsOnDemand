import { createSlice } from "@reduxjs/toolkit";
import { carsdata } from "../../Data/data";

const INITIAL_STATE = {
    products: carsdata,
    selctid: null,
};

export const productsSlice = createSlice({
    name: "carsdata",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state  => {
        return state ;
        },
        selectProductById: (state, action) => {
            const selectedId = action.payload;
            state.selctid = selectedId;
        },
    }
});




export const { getProducts, selectProductById } = productsSlice.actions;

export default productsSlice.reducer;