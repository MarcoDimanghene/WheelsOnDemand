import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    orders: [],
    loading: false,
    error: null,
};

const ordersSlice = createSlice({
    name: "orders",
    initialState: INITIAL_STATE,
    reducers: {
        createOrderFail: (state, action) => {
            state.error = action.payload; 
        },
        fetchOrdersSuccess: (state, action) => {
            state.loading = false;        
            state.error = null;           
            state.orders = action.payload;
        },
        fetchOrdersFail: (state, action) => {
            state.loading = false;        
            state.error = action.payload; 
        },
        fetchOrdersStart: (state) => {
            state.loading = true;         
        },
        clearError: (state) => {
            state.error = null;           
        },
        clearOrders: (state) => {
            state.orders = [];            
        },
    },
});


export const {
    createOrderFail,
    fetchOrdersSuccess,
    fetchOrdersFail,
    fetchOrdersStart,
    clearError,
    clearOrders,
} = ordersSlice.actions;

// Exportación del reducer
export default ordersSlice.reducer;
