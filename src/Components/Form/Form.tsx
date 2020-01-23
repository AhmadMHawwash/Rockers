import { Button, MenuItem, Select, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { makeStyles, WithStyles } from "@material-ui/core/styles";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../store/rootReducer";
import { FormFieldWithTextBelow } from "../FormField";
import { clearFormState, setFormFieldState, submitFormState } from "./ducks/actions";
import { fetchCountries } from "./ducks/api";
import { getFormErrors } from "./ducks/reducersHelpers";
import styles, { useOutlinedInputStyles, useTextBelowDefaultStyles } from "./styles";
import { isNumber } from "./utilities";

export const defaultCountry = {
  name: "Choose a country"
};

export interface FormState {
  fields: Record<FieldsNames, any>;
  hasError: Record<FieldsNames, boolean>;
}

interface FormProps {
  formState: FormState;
  setFormFieldState: typeof setFormFieldState;
  submitFormState: typeof submitFormState;
  clearFormState: typeof clearFormState;
}

export type FieldsNames = "email" | "phone" | "ssn" | "country";

export const Form: FC<FormProps & WithStyles<typeof styles>> = ({
  classes,
  formState: {
    fields: { country, email, phone, ssn },
    hasError
  },
  setFormFieldState,
  submitFormState,
  clearFormState
}) => {
  const blackContentOutlinedInputClasses = useOutlinedInputStyles("black")();
  const greyContentOutlinedInputClasses = useOutlinedInputStyles(
    "rgb(148,148,148)"
  )();
  const textBelowClasses = useTextBelowDefaultStyles();

  const [counteries, setCounteries] = useState<any>([defaultCountry]);

  useEffect(() => {
    fetchCountries().then(newCounteries => {
      setCounteries([defaultCountry, ...newCounteries]);
    });
  }, []);

  const handleSocialSecurityNumberChange = (e: any) => {
    if (isNumber(e.target.value)) {
      setFormFieldState({ name: "ssn", value: e.target.value });
    }
  };

  const handlePhoneChange = (e: any) => {
    if (isNumber(e.target.value)) {
      setFormFieldState({ name: "phone", value: e.target.value });
    }
  };

  const handleEmailChange = (e: any) => {
    setFormFieldState({ name: "email", value: e.target.value });
  };

  const handleCountrySelect = (e: any) => {
    setFormFieldState({ name: "country", value: e.target.value });
  };

  const handleSubmitForm = () => {
    const errors = getFormErrors({ country, ssn, phone, email });
    const hasError = Object.values(errors).some(Boolean);

    submitFormState();

    if (!hasError) {
      console.log("Success");
      clearFormState()
    } 
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="Ahmad Hawwash's form" subheader="22nd, Jan 2020" />
      <CardContent>
        <FormFieldWithTextBelow
          width={300}
          height={60}
          textAlign={"left"}
          placeholder="Social security number"
          value={ssn}
          onChange={handleSocialSecurityNumberChange}
          textBelow={hasError.ssn ? "Wrong social security number" : undefined}
          textBelowClass={textBelowClasses.typography}
          required
        />
        <FormFieldWithTextBelow
          width={300}
          height={60}
          textAlign={"left"}
          placeholder="Phone number"
          value={phone}
          onChange={handlePhoneChange}
          textBelow={hasError.phone ? "Wrong phone number" : undefined}
          textBelowClass={textBelowClasses.typography}
          required
        />
        <FormFieldWithTextBelow
          width={300}
          height={60}
          textAlign={"left"}
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          textBelow={hasError.email ? "Wrong email address" : undefined}
          textBelowClass={textBelowClasses.typography}
          required
        />
        <Select
          required
          input={
            <OutlinedInput
              notched={false}
              labelWidth={300}
              color="primary"
              classes={
                country === defaultCountry.name
                  ? greyContentOutlinedInputClasses
                  : blackContentOutlinedInputClasses
              }
            />
          }
          value={country}
          onChange={handleCountrySelect}
        >
          {counteries.map((country: any) => (
            <MenuItem key={country.name} value={country.name}>
              <Typography noWrap>{country.name}</Typography>
            </MenuItem>
          ))}
        </Select>
        {hasError.country && (
          <Typography className={textBelowClasses.typography}>
            You have to choose a country
          </Typography>
        )}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant="contained" onClick={handleSubmitForm}>
          <Typography>Submit</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state: RootState) => ({
  formState: state.formReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setFormFieldState,
      submitFormState,
      clearFormState
    },
    dispatch
  );
};

const styled = withStyles(styles)(Form);

export default connect(mapStateToProps, mapDispatchToProps)(styled);
