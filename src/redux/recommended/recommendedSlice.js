import { createSlice } from "@reduxjs/toolkit";
import { pickRandomCars } from "../../utils/pickRandomProducs";


const INITIAL_STATE = {
    recommended: pickRandomCars(4),
};

export const recommendedSlice = createSlice ({
    name: "recommended",
    initialState: INITIAL_STATE,
    reducers: {
        randomRecommended: state => {
            return state;
        },
    },
    
});

export const {randomRecommended} = recommendedSlice.actions;

export default recommendedSlice.reducer;