import { createReducer } from "@reduxjs/toolkit";
import { simple } from "./actions";

export default createReducer(
  {},
  {
    [simple.type]: (state, action) => {
      console.log(state, action);
    }
  }
);
