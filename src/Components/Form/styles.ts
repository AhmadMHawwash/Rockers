import { createStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

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
