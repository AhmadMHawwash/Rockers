import { createAction } from "@reduxjs/toolkit";
import { FieldsNames } from "./../Form";

export interface SetFormFieldState {
  name: FieldsNames;
  value: any;
}

export const setFormFieldState = createAction<SetFormFieldState>(
  "Set Form Field Data"
);

export const submitFormState = createAction("submit form state");

export const clearFormState = createAction("clear form state");
