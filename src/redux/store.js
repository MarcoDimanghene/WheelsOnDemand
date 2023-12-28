import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recommendedReducer from './recommended/recommendedSlice';
import categoriesReducers from './categories/categoriesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import producsReducer from "./products/productsSlice";


const reducers = combineReducers ({
    recommended: recommendedReducer,
    products: producsReducer,
    categories: categoriesReducers,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
};

const persistedReducer  = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer ,
});

export const persistor = persistStore(store)

