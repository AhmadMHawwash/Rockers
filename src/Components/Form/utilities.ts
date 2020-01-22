import { defaultCountry } from "./Form";

//SSN is valid if the number is (10 || 12) digits
const validSSNPatterns = [/^\d{10}$/, /^\d{12}$/];

export const isValidSocialSecurityNumber = (SSN: string = "") => {
  return validSSNPatterns.some(pattern => pattern.test(SSN));
};

export const isValidSwedishTelephoneNumber = (telephone: string) => {
  if (!telephone) return false;

  const [leading, ...rest] = telephone.split("");
  const isLeadingZero = leading === "0";

  const isValidRestLength = rest.length === 11;

  return isLeadingZero && isValidRestLength;
};

export const isValidEmailAddress = (email: string = "") => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const isValidCountry = (selectedCountry: string) =>
  selectedCountry !== defaultCountry.name;

export const isNumber = (n: any) => !isNaN(n);
