import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recommendedReducer from"./recommended/recommendedSlice";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import producsReducer from "./products/productsSlice";


const reducers = combineReducers ({
    recommended: recommendedReducer,
    products: producsReducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer  = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer ,
});

export const persistor = persistStore(store)

