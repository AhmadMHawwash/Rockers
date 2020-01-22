import { createReducer } from "@reduxjs/toolkit";
import { defaultCountry, FormState } from "../Form";
import { setFormFieldState, submitFormState } from "./actions";
import { getFormErrors } from "./reducersHelpers";

const initialState: FormState = {
  fields: {
    country: defaultCountry.name,
    phone: "",
    ssn: "",
    email: ""
  },
  hasError: {
    country: false,
    phone: false,
    ssn: false,
    email: false
  }
};

export default createReducer(initialState, {
  [setFormFieldState.type]: (
    state,
    action: ReturnType<typeof setFormFieldState>
  ) => {
    return {
      ...state,
      fields: {
        ...state.fields,
        [action.payload.name]: action.payload.value
      }
    };
  },
  [submitFormState.type]: (state, action) => {
    const errors: FormState["hasError"] = getFormErrors(state.fields);
    return {
      ...state,
      hasError: errors
    };
  }
});
