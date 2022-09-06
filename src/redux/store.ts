import { configureStore } from "@reduxjs/toolkit";

import FormSlice from "./FormSlice";

const store = configureStore({
    reducer: {
        formRedux: FormSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;