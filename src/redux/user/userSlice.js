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
        logout: (state) => {  
            return {
                ...state,
                currentUser: null, 
            };
        },
    },
})

export const {
    setCurrentUser,
    toggleMenuUserHidden,
    logout,
} = userSlice.actions;

export default userSlice.reducer;