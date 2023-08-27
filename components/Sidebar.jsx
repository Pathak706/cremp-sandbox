import React from "react";
import Box from "@mui/material/Box";
import FullScreenImage from "../components/FullScreenImage";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <React.Fragment>
      <Box
        component="div"
        sx={{
          width: "290px",
          height: "1152px",
          flexShrink: 0
        }}
      >
        <Box ml={7} mt={7} mb={-7}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="155"
            height="34"
            viewBox="0 0 155 34"
            fill="none"
          >
            <path
              d="M12.1523 3.7662H4.01728V19.0319H15.5167V22.6474H0V0H15.9185V3.95032H12.1523V3.7662Z"
              fill="#84969F"
            />
            <path
              d="M42.2651 3.71598L36.7414 3.7662V22.6474H32.7241V0H46.0815V8.23542H42.2651V3.71598Z"
              fill="#84969F"
            />
            <path
              d="M65.8499 13.4077V19.0319H77.7511V22.6474H61.8326V0H77.6507V13.4077H65.8499ZM65.8499 9.69168H73.9849V3.71598H65.8499V9.69168Z"
              fill="#84969F"
            />
            <path
              d="M110.475 22.6474H106.357V3.61555H98.3731V22.6474H94.5567V0H122.326V22.6474H118.309V3.61555H110.475V22.6474Z"
              fill="#84969F"
            />
            <path
              d="M142.898 22.6474V33.946H139.082V0H155V22.6474H142.898ZM142.898 3.71598V19.0319H150.983V3.7662L142.898 3.71598Z"
              fill="#84969F"
            />
          </svg>
        </Box>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          aria-label="Vertical tabs example"
          sx={{ marginTop: "8rem" }}
        >
          <Tab label="Dashboard"></Tab>
          <Tab label="Dashboard"></Tab>
          <Tab label="Inquiries">Inquiries</Tab>
          <Tab label="Ongoing Orders">Ongoing Orders</Tab>
          <Tab label="Completed">Completed Orders</Tab>
          <Tab label="Drafts">Drafts</Tab>
        </Tabs>
        <Button
          sx={{
            background: "#84969F",
            width: " 243px",
            height: "50px",
            borderRadius: "30px",
            marginLeft: "1rem"
          }}
        >
          <Typography
            sx={{
              flexShrink: 0,
              textAlign: "center",
              color: "#fff",
              // font-family: Poppins
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "-0.4px"
            }}
          >
            {" "}
            Request for Quote
          </Typography>
        </Button>

        {/* <FullScreenImage source={} alt="Buyer" /> */}
      </Box>
    </React.Fragment>
  );
}
