import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    userhiddenMenu: true,
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action)=>{
            return{
                ...state,
                currentUser: action.payload,
            };
        },
        toggleMenuUserHidden: (state) =>{
            return{
                ...state,
                userhiddenMenu: !state.userhiddenMenu
            };
        },
    },
})

export const {
    setCurrentUser,
    toggleMenuUserHidden,
} = userSlice.actions;

export default userSlice.reducer;