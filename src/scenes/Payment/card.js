import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

import dayjs from "dayjs";

import LockIcon from "@mui/icons-material/Lock";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormControl from "@mui/material/FormControl";


import { useState } from "react";
const Card = () => {
    const [values, setValues] = useState({
      amount: "",
      password: "",
      CardNumber: "",
      weightRange: "",
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
    const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

    const handleTimeChange = (newValue) => {
      setValue(newValue);
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box
      width="35vw"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      sx={{
        border: "2px solid #d5d5d5",
        borderRadius: "5px",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <FormControl sx={{ m: 1, width: "63ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Card Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={"text"}
              value={values.CardNumber}
              onChange={handleChange("CardNumber")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <CreditCardTwoToneIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          justifyContent="space-between"
          width="40%"
          sx={{ m: 1, width: "63ch" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="MM/YY"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleTimeChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box display="flex" justifyContent="space-between" width="40%">
          <FormControl sx={{ m: 1, width: "63ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">CVV</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <LockIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          color="secondary"
          variant="contained"
          sx={{ width: 130, height: 40 }}
        >
          Pay
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
