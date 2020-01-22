import { Typography } from "@material-ui/core";
import React from "react";

export interface WithTextBelowProps {
  textBelow: string | undefined;
  textBelowClass?: string;
}

export function withTextBelow<T extends WithTextBelowProps>(
  Comp: React.ReactType
) {
  return ({ textBelow, textBelowClass, ...rest }: T) => (
    <>
      <Comp {...rest} />
      {textBelow && (
        <Typography className={textBelowClass}>{textBelow}</Typography>
      )}
    </>
  );
}

export default withTextBelow;
