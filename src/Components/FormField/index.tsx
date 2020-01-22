import withStyles from "@material-ui/core/styles/withStyles";
import withTextBelow, { WithTextBelowProps } from "../../HoCs/withTextBelow";
import FormField, { FormFieldProps } from "./FormField";
import styles from "./styles";

const stylesHoc = withStyles(styles);
const StyledFormField = stylesHoc(FormField);

//FormField with Text Below!
export const FormFieldWithTextBelow = withTextBelow<
  FormFieldProps & WithTextBelowProps
>(StyledFormField);

export default StyledFormField;
