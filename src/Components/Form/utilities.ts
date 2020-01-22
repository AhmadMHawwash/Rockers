import { defaultCountry } from "./Form";

//SSN is valid if the number is (10 || 12) digits
const validSSNPatterns = [/^\d{10}$/, /^\d{12}$/];

//checks for valid SSNs base on validSSNPatterns
export const isValidSocialSecurityNumber = (SSN: string = "") => {
  return validSSNPatterns.some(pattern => pattern.test(SSN));
};

//checks for valid Swedish phones
export const isValidSwedishTelephoneNumber = (telephone: string) => {
  if (!telephone) return false;

  const [leading, ...rest] = telephone.split("");
  const isLeadingZero = leading === "0";

  const isValidRestLength = rest.length === 11;

  return isLeadingZero && isValidRestLength;
};

//checks for valid email addresses
export const isValidEmailAddress = (email: string = "") => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

// checks for valid country
export const isValidCountry = (selectedCountry: string) =>
  selectedCountry !== defaultCountry.name;

//check if given value is number
export const isNumber = (n: any) => !isNaN(n);
