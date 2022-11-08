import { Box, Typography, useTheme } from "@mui/material";
import React from 'react'
import { tokens } from "../../theme";

const Cash = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        width="35vw"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          border: "2px solid #d5d5d5",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h5"
          color={colors.grey[100]}
          sx={{ m: "0 0 5px 0" }}
        >
         The TDM guy will collect the Cash from You , No worries 😊
        </Typography>
      </Box>
    </>
  );
}

export default Cash
