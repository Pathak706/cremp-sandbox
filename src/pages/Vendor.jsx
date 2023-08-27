import React from "react";
import { Grid, Button, FormControl, Box } from "@mui/material";
import BackCremp from "../components/BackCremp";
import PageHeading from "../components/PageHeading";
import FullScreenImage from "../components/FullScreenImage";
import InputField from "../components/Input";
import BuyerImage from "../Images/BuyerImage";
import CustomSelect from "../components/CustomSelect";

const Vendor = () => {
  const inputFields = [
    [
      {
        title: "Owner Name",
        helperText: "Supporting Text",
        type: "text",
        value: "John Doe",
        required: true,
        error: false,
        otp: false,
        clearField: true
      },
      {
        title: "Trade Name",
        helperText: "Supporting Text",
        type: "text",
        value: "Doe Industries",
        required: true,
        error: false,
        otp: false,
        clearField: true
      }
    ],
    {
      title: "Contact Number",
      helperText: "Verify via OTP",
      type: "number",
      value: "8919999999",
      required: true,
      error: false,
      otp: true,
      clearField: false
    },
    {
      title: "Email Id",
      helperText: "Verify via OTP",
      type: "email",
      value: "abc@gmail.com",
      required: true,
      error: false,
      otp: true,
      clearField: false
    },

    [
      {
        title: "Shop Act",
        helperText: "Please upload your shop act license",
        type: "file",
        value: ""
      },
      {
        title: "GST No",
        helperText: "Please upload your GST number",
        type: "file",
        value: ""
      }
    ],
    [
      {
        title: "Pan No",
        helperText: "Please upload your PAN number",
        type: "file",
        value: ""
      },
      {
        title: "Bank Details",
        helperText: "Please upload your Bank Details",
        type: "file",
        value: ""
      }
    ]
  ];
  const selectFields = [
    {
      title: "Categories",
      value: "",
      helperText: "Please select from different categories",
      options: [
        { key: 1, value: "Ambuja", label: "Ambuja", selected: "selected" },
        { key: 2, value: "Cement", label: "Cement" }
      ]
    },
    {
      title: "Brands",
      value: "",
      helperText: "Please select from different brands",
      options: [
        { key: 1, value: "Ambuja", label: "Ambuja" },
        { key: 2, value: "Cement", label: "Cement", selected: "selected" }
      ]
    }
  ];
  return (
    <React.Fragment>
      <Grid
        container
        className="gs-container-center"
        mt={0}
        sx={{ background: "#F4F7FE", marginTop: "-5rem" }}
      >
        <Grid className="gs-content-center" xs={4}>
          <BackCremp />
          <PageHeading
            heading="Create your account as a vendor"
            subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           "
          />
          <FormControl className="gs-content-center">
            <Grid container spacing={2} ml={10}>
              {inputFields.map((row, rowIndex) => (
                <Grid item xs={12} md={10} key={rowIndex}>
                  <Grid container spacing={2}>
                    {Array.isArray(row) ? (
                      row.map((input, colIndex) => (
                        <Grid item xs={6} md={5} key={colIndex}>
                          <InputField {...input} />
                        </Grid>
                      ))
                    ) : (
                      <Grid item xs={12} md={10}>
                        <InputField {...row} />
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              ))}

              {selectFields.map((item) => {
                return (
                  <Grid xs={12} md={10}>
                    <CustomSelect {...item} />
                  </Grid>
                );
              })}
            </Grid>
            <Box>
              <Button className="white camelCase bgGrey w60">Continue</Button>
            </Box>
          </FormControl>
        </Grid>
        <Grid xs={8}>
          <FullScreenImage source={BuyerImage} alt="Buyer" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Vendor;
