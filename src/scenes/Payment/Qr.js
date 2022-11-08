


import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Qrcodeimng from "./Images/QRcode.png"
import { tokens } from "../../theme";

const Qrcode = () => {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="35vw"
      height="50vh"
      sx={{
        border: "2px solid #d5d5d5",
        borderRadius: "5px",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        sx={{ margin: "20px 20px 20px 20px", height: "45vh" }}
      >
        <Box
          sx={{ height: "30vh" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={Qrcodeimng} alt="img" width={200} height={200} />
        </Box>
        <Box>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="h5"
              color={colors.grey[100]}
              sx={{ m: "0 0 5px 0" }}
            >
              Scan the QR to Pay
            </Typography>
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
  );
}

export default Qrcode