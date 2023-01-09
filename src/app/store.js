import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/nameTrainer.slice"

export const store = configureStore({
  reducer : {trainer}
})
