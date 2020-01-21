import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./../Components/Form/ducks/reducer";

const rootReducer = combineReducers({
  formReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
