

import React from 'react'
import { Box, Button, Typography, useTheme } from "@mui/material";
 import master from './Images/master.png'
  import visa from "./Images/visa.png";
   import upi from "./Images/UPI.png";
     import PhonePay from "./Images/PhonePay.png";
      import Paytm from "./Images/paytm.png";
       import gpay from "./Images/Google_Pay.png";
           import ruppe from "./Images/Ruppe.png";
               import  money from "./Images/Money.png";
               import dayjs from "dayjs";
import { tokens } from '../../theme';
import LockIcon from "@mui/icons-material/Lock"; 
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Payment = () => {
  const [values, setValues] = React.useState({
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
const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

const handleTimeChange = (newValue) => {
  setValue(newValue);
};
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Box
        m="18px"
        height="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          m="30px"
          height="50vh"
          color="blueviolet"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            height="50vh"
            width="80vw"
          >
            <Box
              width="35vw"
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid #d5d5d5",
                  borderRadius: "5px",
                  height: "50px",
                  p: "0 3px 0 3px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#DADADA",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Debit / Credit Card
                  </Typography>
                </Box>
                <Box display="flex" width={250} justifyContent="flex-end">
                  <img src={master} width={60} alt={"img"} />
                  <img src={visa} width={60} alt={"img"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid #d5d5d5",
                  borderRadius: "5px",
                  height: "50px",
                  p: "0 3px 0 3px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#DADADA",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Online Payment
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  sx={{ fontSize: "2rem" }}
                  width={250}
                  alignItems="center"
                >
                  <img src={upi} width={60} alt={"img"} />
                  <img src={PhonePay} width={30} alt={"img"} />
                  <img src={Paytm} width={30} alt={"img"} />
                  <img src={gpay} width={100} alt={"img"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid #d5d5d5",
                  borderRadius: "5px",
                  height: "50px",
                  p: "0 3px 0 3px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#DADADA",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Cash Only
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  width={250}
                  alignItems="center"
                >
                  <Box mr={2}>
                    <img src={money} width={50} alt={"img"} />
                  </Box>
                  <img src={ruppe} width={35} alt={"img"} />
                </Box>
              </Box>
            </Box>
            <Box
              width="35vw"
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              sx={{
                border: "2px solid black",
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
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <Box display="flex" justifyContent="space-between" width="40%">
                  <FormControl sx={{ m: 1, width: "63ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      CVV
                    </InputLabel>
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
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Payment
