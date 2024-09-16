import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.ts";
import FilterReducer from "./FilterSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filteredData: FilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
