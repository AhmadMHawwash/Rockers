import { CSSProperties, WithStyles } from "@material-ui/core/styles/withStyles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import cx from "classnames";
import { FontSizeProperty, TextAlignProperty } from "csstype";
import React, { FunctionComponent, useState } from "react";
import styles from "./styles";

export interface FormFieldProps {
  shouldShowError?: (value: FormFieldProps["value"]) => boolean;
  onChange?: (e: any) => void;
  value?: TextFieldProps["value"];
  width?: number;
  height?: number;
  textColor?: CSSProperties["color"];
  fontSize?: FontSizeProperty<1>;
  textAlign?: TextAlignProperty;
  isDisabled?: boolean;
  placeholder?: string;
  required?: boolean;
}

export const FormField: FunctionComponent<FormFieldProps &
  WithStyles<typeof styles>> = ({
  classes,
  shouldShowError = v => false,
  value,
  onChange,
  width,
  height,
  textColor,
  textAlign,
  fontSize,
  isDisabled,
  placeholder,
  required
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TextField
      placeholder={placeholder}
      disabled={isDisabled}
      InputProps={{
        style: { color: textColor, width, height, fontSize, paddingLeft: 5 }
      }}
      inputProps={{ style: { textAlign } }}
      margin="normal"
      error={shouldShowError(value)}
      className={cx(classes.textField, {
        [classes.isInactiveTextField]: !isActive
      })}
      value={value}
      variant="outlined"
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onChange={onChange}
      required={required}
    />
  );
};

FormField.defaultProps = {
  shouldShowError: value => false,
  width: 80,
  height: 30,
  textColor: "black",
  textAlign: "center",
  fontSize: "1rem"
};

export default FormField;
