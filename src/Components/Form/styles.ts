import { createStyles, makeStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles = (theme: any) =>
  createStyles({
    card: {
      maxWidth: 345,
      marginTop: 20
    },
    cardActions: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      marginRight: 10,
      marginBottom: 10
    }
  });

export default styles;


export const useTextBelowDefaultStyles = makeStyles(theme => ({
  typography: {
    fontSize: 10,
    marginLeft: 18,
    color: "red"
  }
}));

export const useOutlinedInputStyles = (textColor: CSSProperties["color"]) =>
  makeStyles(theme => ({
    root: {
      "& $notchedOutline": {
        borderColor: "transparent"
      },
      "&:hover $notchedOutline": {
        borderColor: "grey"
      },
      "&$focused $notchedOutline": {
        borderColor: "navyblue"
      },
      width: 300,
      color: textColor,
      marginTop: 5
    },
    focused: {},
    notchedOutline: {}
  }));