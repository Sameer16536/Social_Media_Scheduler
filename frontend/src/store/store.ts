import { configureStore, ThunkDispatch, StoreEnhancer, EnhancedStore } from "@reduxjs/toolkit";
import authReducer, { AuthState } from '../features/auth/authSlice';

const store: EnhancedStore<{
    auth: AuthState;
}, any, StoreEnhancer> = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
