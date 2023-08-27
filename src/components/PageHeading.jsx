import Typography from "@mui/material/Typography";
import React from "react";
export default function PageHeading(props) {
  const { heading, subHeading } = props;
  return (
    <React.Fragment>
      <Typography variant="h5" component="h5">
        {heading}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {subHeading}
      </Typography>
    </React.Fragment>
  );
}
