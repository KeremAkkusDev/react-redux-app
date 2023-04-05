import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import SiteReducer from "./SiteSlice";
export default configureStore({
  reducer: {
    CounterReducer,
    SiteReducer,
  },
});
