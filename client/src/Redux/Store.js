import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from "./User/userSlice.js"
import {persistReducer as pr, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: userReducer})

const persistConfig =  {
    key: 'root',
    storage,
    version: 1,
};

const persistReducer = pr(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducer,
    middleware:(getDefaultMiddleware)=> {
        return getDefaultMiddleware({
            serializableCheck:false,
        })
    }
})

export const persistor = persistStore(store);