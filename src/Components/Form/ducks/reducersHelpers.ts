import { FormState } from "../Form";
import {
  isValidCountry,
  isValidEmailAddress,
  isValidSocialSecurityNumber,
  isValidSwedishTelephoneNumber
} from "../utilities";

export function getFormErrors(fields: FormState["fields"]) {
  const hasEmailError = !isValidEmailAddress(fields.email);
  const hasPhoneNumberError = !isValidSwedishTelephoneNumber(fields.phone);
  const hasSSNError = !isValidSocialSecurityNumber(fields.ssn);
  const hasCounteryError = !isValidCountry(fields.country);

  return {
    country: hasCounteryError,
    phone: hasPhoneNumberError,
    ssn: hasSSNError,
    email: hasEmailError
  };
}
