import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers ({});

const presistConfig = {
    key: "root",
    storage,
}

const persitedRedurcer = persistReducer(presistConfig, reducers);

export const store = configureStore({
    reducer: persitedRedurcer,
});

export const persistor = persistStore(store)