import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "@/store/slices/authSlice";
import {apiSlice} from "@/store/apis/apiSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authReducer,
            [apiSlice.reducerPath]: apiSlice.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']