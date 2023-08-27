import React from "react";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
export default function Dashboard() {
  const categoryData = [
    { icon: "", name: "Steel" },
    { icon: "", name: "Cement" },
    { icon: "", name: "Plumbing" },
    { icon: "", name: "Cp+Sanitary" },
    { icon: "", name: "Doors" },
    { icon: "", name: "AAABlocks" },
    { icon: "", name: "Chemicals" },
    { icon: "", name: "Electrical Materials" },
    { icon: "", name: "Stones and Tiles" },
    { icon: "", name: "RMC" }
  ];

  const overviewData = [
    {
      icon: "",
      title: "Total revenue",
      value: "$53,00989",
      status: "12% increase from last month"
    },
    {
      icon: "",
      title: "Projects",
      value: "95 /100",
      status: "10% decrease from last month"
    },
    {
      icon: "",
      title: "Time spent",
      value: "1022 /1300 Hrs",
      status: "8% increase from last month"
    },
    {
      icon: "",
      title: "Resources",
      value: "101 /120",
      status: "2% increase from last month"
    }
  ];
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={10} sx={{ background: "#F4F7FE" }}>
          <Box m={5} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              mt={3}
              component="div"
              sx={{
                color: "#84969F",
                // fontFamily: Poppins;
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "42px" /* 150% */,
                letterSpacing: "-0.56px"
              }}
            >
              Category
            </Typography>
            <TextField />
          </Box>
          <Grid container spacing={2} ml={5}>
            {categoryData.map((item, index) => {
              return (
                <Grid
                  xs={1}
                  mr={1}
                  sx={{
                    background: "#fff",
                    borderRadius: "14.547px"
                  }}
                >
                  <Box style={{ display: "flex" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="41"
                      viewBox="0 0 42 41"
                      fill="none"
                    >
                      <circle
                        cx="21.2022"
                        cy="20.549"
                        r="20.366"
                        fill="#F4F7FE"
                      />
                      <path
                        d="M11.3062 21.5832C11.3371 21.7983 11.5075 21.9666 11.723 21.9947L14.8704 22.4052C15.1363 22.44 15.3789 22.2529 15.4134 21.9876C15.4481 21.7224 15.2611 21.4792 14.9957 21.4446L12.2129 21.0816L11.391 15.3546L15.5153 13.5383L16.061 17.3407L16.7722 22.2963L16.7723 22.2965L16.9054 23.2233C16.9236 23.3505 16.9916 23.4652 17.0945 23.5423C17.1788 23.6054 17.2808 23.639 17.3849 23.639C17.4077 23.639 17.4307 23.6373 17.4537 23.634L19.7757 23.3008C20.0406 23.2627 20.2244 23.0172 20.1864 22.7525L20.1056 22.1895L24.814 20.116C25.0129 20.0284 25.1291 19.8189 25.0982 19.6038L24.4408 15.023C24.4028 14.7582 24.1571 14.5747 23.8925 14.6124C23.6277 14.6504 23.4438 14.8959 23.4818 15.1607L24.087 19.3775L19.9627 21.1938L19.141 15.4681L18.7965 13.0676L23.6297 13.6981C23.8953 13.7333 24.1381 13.5458 24.1727 13.2805C24.2074 13.0152 24.0204 12.7721 23.755 12.7375L18.6535 12.0719L18.5727 11.5088C18.5544 11.3816 18.4865 11.2669 18.3836 11.1898C18.2807 11.1128 18.1515 11.08 18.0244 11.0981L15.7023 11.4313C15.4375 11.4694 15.2536 11.7149 15.2916 11.9796L15.3724 12.5426L10.664 14.6161C10.465 14.7037 10.3489 14.9132 10.3797 15.1283L11.3062 21.5832ZM17.6825 12.1258L18.2393 16.0052L19.0944 21.963L19.0945 21.9633L19.1587 22.4104L17.7956 22.6061L17.0575 17.4637L16.3836 12.769L16.3836 12.7688L16.3194 12.3214L17.6825 12.1258Z"
                        fill="#84969F"
                      />
                      <path
                        d="M29.518 15.7288H26.0021C25.7346 15.7288 25.5177 15.9456 25.5177 16.2132V24.3193C25.5177 24.3193 25.5177 24.3201 25.5177 24.3206C25.5177 24.5881 25.7345 24.805 26.0021 24.805H26.0021H31.8085C31.6188 25.489 31.0185 26.004 30.2911 26.0672C29.9169 25.404 29.2059 24.955 28.3917 24.955C27.5747 24.955 26.8617 25.4071 26.4885 26.0738H16.1986C15.8254 25.407 15.1124 24.955 14.2954 24.955C13.4784 24.955 12.7654 25.4071 12.3922 26.0738H10.5333V24.8049H23.3659C23.6334 24.8049 23.8503 24.5881 23.8503 24.3205C23.8503 24.0529 23.6334 23.8361 23.3659 23.8361H10.0489C9.78137 23.8361 9.56448 24.0529 9.56448 24.3205V26.5582C9.56448 26.8258 9.78137 27.0426 10.0489 27.0426H12.1179C12.1166 27.0733 12.1156 27.1039 12.1156 27.1349C12.1156 28.3368 13.0935 29.3147 14.2955 29.3147C15.4975 29.3147 16.4753 28.3368 16.4753 27.1349C16.4753 27.1039 16.4743 27.0733 16.473 27.0426H26.2141C26.2128 27.0733 26.2118 27.1039 26.2118 27.1349C26.2118 28.3368 27.1897 29.3147 28.3917 29.3147C29.5936 29.3147 30.5715 28.3368 30.5715 27.1349C30.5715 27.0924 30.57 27.0503 30.5676 27.0085C31.8538 26.8029 32.8399 25.6861 32.8399 24.3429V24.3205V19.0506C32.8399 17.219 31.3497 15.7288 29.518 15.7288ZM14.2955 28.3459C13.6277 28.3459 13.0844 27.8026 13.0844 27.1349C13.0844 26.4671 13.6277 25.9238 14.2955 25.9238C14.9632 25.9238 15.5065 26.4671 15.5065 27.1349C15.5065 27.8026 14.9632 28.3459 14.2955 28.3459ZM28.3917 28.3459C27.7239 28.3459 27.1806 27.8026 27.1806 27.1349C27.1806 26.4671 27.7239 25.9238 28.3917 25.9238C29.0594 25.9238 29.6027 26.4671 29.6027 27.1349C29.6027 27.8026 29.0594 28.3459 28.3917 28.3459ZM31.871 19.0507V19.7875H28.3165V16.6976H29.518C30.8155 16.6976 31.871 17.7532 31.871 19.0507ZM26.4866 23.8361V16.6976H27.3477V20.2719C27.3477 20.5395 27.5646 20.7564 27.8321 20.7564H31.871V23.8361H26.4866Z"
                        fill="#84969F"
                      />
                    </svg>
                    <Typography
                      m={1}
                      sx={{
                        color: "#84969F",
                        // fontFamily: "Poppins",
                        fontSize: "14.547px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "23.275px" /* 160% */,
                        letterSpacing: "-0.291px"
                      }}
                      component="div"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box m={5}>
            <Typography
              mt={3}
              component="div"
              sx={{
                color: "#84969F",
                // fontFamily: Poppins;
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal" /* 150% */,
                letterSpacing: ".22px"
              }}
            >
              Overview
            </Typography>
          </Box>
          <Grid container spacing={2} ml={5}>
            {overviewData.map((item, idnex) => {
              return (
                <Card
                  sx={{
                    width: "250px",
                    height: "196px",
                    padding: "18px 43px 24px 18px",
                    marginRight: "10px"
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "20px"
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#797979",
                        // font-family: Poppins;
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal"
                      }}
                      gutterBottom
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 20.75C0 20.3358 0.335786 20 0.75 20H18.75C19.1642 20 19.5 20.3358 19.5 20.75C19.5 21.1642 19.1642 21.5 18.75 21.5H0.75C0.335786 21.5 0 21.1642 0 20.75Z"
                          fill="#84969F"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 8.13086C0 7.16665 0.785786 6.38086 1.75 6.38086H3.34998C4.31419 6.38086 5.09998 7.16665 5.09998 8.13086V16.7509C5.09998 17.7151 4.31419 18.5009 3.34998 18.5009H1.75C0.785786 18.5009 0 17.7151 0 16.7509V8.13086ZM1.75 7.88086C1.61421 7.88086 1.5 7.99507 1.5 8.13086V16.7509C1.5 16.8866 1.61421 17.0009 1.75 17.0009H3.34998C3.48576 17.0009 3.59998 16.8866 3.59998 16.7509V8.13086C3.59998 7.99507 3.48576 7.88086 3.34998 7.88086H1.75Z"
                          fill="#84969F"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.19922 4.93945C7.19922 3.97524 7.98501 3.18945 8.94922 3.18945H10.5492C11.5134 3.18945 12.2992 3.97524 12.2992 4.93945V16.7495C12.2992 17.7137 11.5134 18.4995 10.5492 18.4995H8.94922C7.98501 18.4995 7.19922 17.7137 7.19922 16.7495V4.93945ZM8.94922 4.68945C8.81343 4.68945 8.69922 4.80367 8.69922 4.93945V16.7495C8.69922 16.8852 8.81343 16.9995 8.94922 16.9995H10.5492C10.685 16.9995 10.7992 16.8852 10.7992 16.7495V4.93945C10.7992 4.80367 10.685 4.68945 10.5492 4.68945H8.94922Z"
                          fill="#84969F"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.3984 1.75C14.3984 0.785786 15.1842 0 16.1484 0H17.7484C18.7126 0 19.4984 0.785786 19.4984 1.75V16.75C19.4984 17.7142 18.7126 18.5 17.7484 18.5H16.1484C15.1842 18.5 14.3984 17.7142 14.3984 16.75V1.75ZM16.1484 1.5C16.0127 1.5 15.8984 1.61421 15.8984 1.75V16.75C15.8984 16.8858 16.0127 17 16.1484 17H17.7484C17.8842 17 17.9984 16.8858 17.9984 16.75V1.75C17.9984 1.61421 17.8842 1.5 17.7484 1.5H16.1484Z"
                          fill="#84969F"
                        />
                      </svg>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#797979",
                        // font-family: Poppins;
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal"
                      }}
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="h5" component="div"></Typography>
                    <Typography
                      sx={{
                        color: "#060606",
                        // font-family: Poppins;
                        fontSize: "28px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "0.28px"
                      }}
                      color="text.secondary"
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#060606",
                        // font-family: Poppins;
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "12px" /* 120% */,
                        letterSpacing: "0.2px"
                      }}
                      variant="body2"
                    >
                      {item.status}
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              );
            })}
            <Box
              sx={{
                width: "568px",
                height: "223px",
                flexShrink: 0,
                borderRadius: "14px",
                background: "#84969F",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "1rem",
                paddingLeft: "5rem"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 3.22001L42 13.6123V26H38V18.0002L26 24.9283V43.6345L24 44.7892L6 34.3969V13.6123L24 3.22001ZM38 28L38 34H44V38L38 38L38 44H34L33.9999 38L28 38V34H33.9999L34 28H38ZM9.99994 18.0001L10 32.0875L21.9999 39.0156V24.9283L9.99994 18.0001ZM24 7.83882L12.2 14.6515L24 21.4643L35.8 14.6515L24 7.83882Z"
                  fill="white"
                />
              </svg>
              <Typography
                sx={{
                  color: " #FFF",
                  // font-family: Poppins;
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: "0.2px"
                }}
              >
                Start adding your projects
              </Typography>
              <Button
                sx={{
                  width: " 243px",
                  height: "50px",
                  borderRadius: "30px",
                  marginLeft: "1rem",
                  background: "#fff",
                  marginTop: "1rem"
                }}
              >
                <Typography
                  sx={{
                    flexShrink: 0,
                    textAlign: "center",
                    color: "#84969F",
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
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
