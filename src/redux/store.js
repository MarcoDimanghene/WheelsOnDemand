import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recommendedReducer from './recommended/recommendedSlice';
import categoriesReducers from './categories/categoriesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import producsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import modalnavReducer from "./navmodal/modalnavlink";




const reducers = combineReducers ({
    recommended: recommendedReducer,
    products: producsReducer,
    categories: categoriesReducers,
    cart: cartReducer,
    modalnav: modalnavReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart', ],
};

const persistedReducer  = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddelware) => getDefaultMiddelware({
        serializableCheck:false,
    }),
});

export const persistor = persistStore(store)

