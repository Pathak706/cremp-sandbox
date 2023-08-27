import Grid from "@mui/material/Grid";
import React from "react";
export default function FullScreenImage(props) {
  const { source, alt } = props;
  return (
    <React.Fragment>
      <Grid className="image-container">
        <img
          className="fullscreen-image"
          src={source}
          alt={alt}
          loading="lazy"
          height="1080px"
        />
      </Grid>
    </React.Fragment>
  );
}
