import React from "react";
import { Grid, Button, FormControl } from "@mui/material";
import BackCremp from "../components/BackCremp";
import PageHeading from "../components/PageHeading";
import FullScreenImage from "../components/FullScreenImage";
import Input from "../components/Input";
import BuyerImage from "../Images/BuyerImage";

export default function Buyer() {
  const inputFields = [
    {
      title: "Name of the User",
      helperText: "Supporting Text",
      type: "text",
      value: "John Doe",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Registered Trade Name",
      helperText: "Supporting Text",
      type: "text",
      value: "Doe Industries",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Registered Office Address",
      helperText: "Supporting Text",
      type: "text",
      value: "Koregaon Park,Pune",
      required: true,
      error: false,
      otp: false,
      clearField: true,
    },
    {
      title: "Contact Number",
      helperText: "Verify via OTP",
      type: "number",
      value: "8919999999",
      required: true,
      error: false,
      otp: true,
      clearField: false,
    },
    {
      title: "Email Id",
      helperText: "Verify via OTP",
      type: "email",
      value: "abc@gmail.com",
      required: true,
      error: false,
      otp: true,
      clearField: false,
    },
  ];
  return (
    <React.Fragment>
      <Grid container className="gs-container-center" spacing={0}>
        <Grid className="gs-content-center" xs={4}>
          <BackCremp />
          <PageHeading
            heading="Create your account as a buyer"
            subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit.
             "
          />
          <FormControl>
            {inputFields.map((item) => {
              return <Input {...item} />;
            })}
            <Button className="white camelCase bgGrey w100">Continue</Button>
          </FormControl>
        </Grid>
        <Grid xs={8}>
          <FullScreenImage source={BuyerImage} alt="Buyer" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
