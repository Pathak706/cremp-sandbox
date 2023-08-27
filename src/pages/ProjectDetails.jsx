import React from "react";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputField from "../components/Input";
export default function ProjectDetails() {
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
    { icon: "", name: "RMC" },
  ];

  const formInput = [
    {
      title: "Project Name",
      helperText: "Supporting Text",
      type: "text",
      value: "John Doe",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Project Address",
      helperText: "Supporting Text",
      type: "text",
      value: "Doe industries",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "GST No",
      helperText: "Please upload your GST number",
      type: "file",
      value: "",
    },
    {
      title: "Pan No",
      helperText: "Please upload your PAN number",
      type: "file",
      value: "",
    },
    {
      title: "Total Construction Area",
      helperText: "Supporting Text",
      type: "text",
      value: "123445",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Commensment Certificate",
      helperText: "Please upload your Commencement Certificate (If applicable)",
      type: "file",
      value: "",
    },
    {
      title: "Project Status",
      helperText: "Supporting Text",
      type: "text",
      value: "",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Delivery Date",
      helperText: "Supporting Text",
      type: "text",
      value: "25 July 2024",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Rera Number",
      helperText: "Supporting Text",
      type: "text",
      value: "123445",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Construction Finance",
      helperText: "Please select",
      type: "text",
      value: "123445",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
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
                letterSpacing: "-0.56px",
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
                    borderRadius: "14.547px",
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
                        letterSpacing: "-0.291px",
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
          <Grid container spacing={5}>
            <Grid xs={8}>
              <Box m={5} ml={10}>
                <Typography
                  mt={10}
                  component="div"
                  sx={{
                    // color: "#84969F",
                    // fontFamily: Poppins;
                    fontSize: "18px",
                    fontStyle: "normal",
                    // fontWeight: 600,
                    lineHeight: "116%" /* 150% */,
                    letterSpacing: ".22px",
                  }}
                >
                  To add project, kindly fill in the below form
                </Typography>
              </Box>
              <Grid columnSpacing={2} ml={10} xs={12} container>
                {formInput.map((input, index) => {
                  return (
                    <Grid xs={4} mr={2}>
                      <InputField {...input} />
                    </Grid>
                  );
                })}
                <Grid xs={4} mr={2}>
                  <Button
                    sx={{
                      borderRadius: "30.8px",
                      border: "1px solid #84969F",
                      color: "#84969F",
                    }}
                    className="grey camelCase w100"
                  >
                    Save
                  </Button>
                </Grid>
                <Grid xs={4} mr={2}>
                  <Button
                    sx={{ borderRadius: "30.8px", border: "1px solid #84969F" }}
                    className="white camelCase bgGrey w100"
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
              <Box
                ml={10}
                sx={{
                  width: "450px",
                  height: "223px",
                  flexShrink: 0,
                  borderRadius: "14px",
                  background: "#84969F",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: "1rem",

                  paddingLeft: "10rem",
                }}
              >
                <Box ml={12}>
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
                </Box>
                <Typography
                  sx={{
                    color: " #FFF",
                    // font-family: Poppins;
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    letterSpacing: "0.2px",
                  }}
                >
                  You have got another project?
                </Typography>
                <Button
                  sx={{
                    width: " 243px",
                    height: "50px",
                    borderRadius: "30px",
                    marginLeft: "1rem",
                    background: "#fff",
                    marginTop: "1rem",
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
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {" "}
                    Start Adding
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid
              mt={10}
              xs={4}
              sx={{
                display: "flex",
                // justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box>
                <Card
                  sx={{
                    width: "300px",
                    height: "150px",
                    padding: "18px 43px 24px 18px",
                    borderRadius: "20px",
                    marginTop: "10px",
                    marginRight: "10px",
                  }}
                ></Card>
              </Box>

              {[1, 2].map((item) => {
                return (
                  <Card
                    sx={{
                      width: "300px",
                      height: "150px",
                      padding: "18px 43px 24px 18px",
                      borderRadius: "20px",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: "flex" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M22.7267 14.4083C20.895 9.64834 14.3734 9.39167 15.9484 2.47334C16.065 1.96001 15.5167 1.56334 15.0734 1.83167C10.8384 4.32834 7.79335 9.33334 10.3484 15.89C10.5584 16.4267 9.92835 16.9283 9.47335 16.5783C7.36169 14.98 7.14002 12.6817 7.32669 11.0367C7.39669 10.43 6.60335 10.1383 6.26502 10.64C5.47169 11.8533 4.66669 13.8133 4.66669 16.765C5.11002 23.2983 10.6284 25.305 12.6117 25.5617C15.4467 25.9233 18.515 25.3983 20.72 23.38C23.1467 21.1283 24.0334 17.535 22.7267 14.4083ZM11.9 20.2767C13.58 19.8683 14.4434 18.655 14.6767 17.5817C15.0617 15.9133 13.5567 14.28 14.5717 11.6433C14.9567 13.825 18.3867 15.19 18.3867 17.57C18.48 20.5217 15.2834 23.0533 11.9 20.2767Z"
                            fill="#84969F"
                          />
                        </svg>
                        <Typography>News</Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ width: "200px", fontSize: "10px" }}
                          mt={1}
                        >
                          Indian Primary Steel Market Remains Unchanged,
                          Secondary Sees Variations in July's Third Week
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
