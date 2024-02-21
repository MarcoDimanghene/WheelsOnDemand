import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    hidden: true, 
};

export const navmodalSlice = createSlice({
    name: 'modalnav',
    initialState: INITIAL_STATE,
    reducers: {
        toggleMenuHidden: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            };
        },
    },
});

export const { toggleMenuHidden } = navmodalSlice.actions;

export default navmodalSlice.reducer;