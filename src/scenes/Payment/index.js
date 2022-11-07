

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
              
import { tokens } from '../../theme';

import Card from './card';

import { useState } from 'react';
import Qrcode from './Qr';

const Payment = () => {
  const [active, setActive] = useState("two");
  
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
                onClick={() => {
                  setActive("one");
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
                onClick={() => {
                  setActive("two");
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
            
              {active === "one" && 
           <Card/>
              }
              {active === "two" && 
               <Qrcode/>
              }
           
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Payment
