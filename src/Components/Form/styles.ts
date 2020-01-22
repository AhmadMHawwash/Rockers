import { createStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const styles = (theme: any) =>
  createStyles({
    card: {
      maxWidth: 345,
      marginTop: 20
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
      backgroundColor: red[500]
    },
    formControl: {
      minWidth: 120
    },
    focused: {
      borderBlockColor: "black"
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
