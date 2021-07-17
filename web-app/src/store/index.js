import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import snippet from "./snippet";

const reducer = combineReducers({
    snippet
});

const store = configureStore({
    reducer
});

export default store;