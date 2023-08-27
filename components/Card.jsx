import * as React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

export default function CardContainer(props) {
  const { avatarImg, heading, subHeading } = props;
  return (
    <Card
      sx={{ display: "flex", borderRadius: "10px", color: "darkgrey" }}
      spacing={2}
      p={10}
      mt={2}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Avatar>{avatarImg}</Avatar>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography className="alignStart" component="div">
            {heading}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>{subHeading}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
