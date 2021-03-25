import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";

export default function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
