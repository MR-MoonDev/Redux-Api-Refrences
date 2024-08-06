import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./TodoSlicer"
export const store = configureStore({
    reducer:{
        todo:todoReducer

    }
 })  