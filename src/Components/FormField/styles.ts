import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    textField: {
      "& input": {
        padding: "14.8px 10px"
      },
      color: "rgba(0,0,0,0.6)",
      fontWeight: 400,
      marginBottom: 0,
      marginTop: 0,
      fontSize: "0.75rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    isInactiveTextField: {
      "& fieldset": {
        border: "none"
      }
    }
  });

export default styles;
