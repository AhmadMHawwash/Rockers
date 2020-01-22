import { createAction } from "@reduxjs/toolkit";
import { FieldsNames } from "./../Form";

export interface SetFormFieldState {
  name: FieldsNames;
  value: any;
}
export interface SetFormData {
  payload: any;
}

export const setFormData = createAction<SetFormData>("Set Form Data to LocalStorage");

export const setFormFieldState = createAction<SetFormFieldState>(
  "Set Form Field Data"
);

export const submitFormState = createAction("submit form state");
