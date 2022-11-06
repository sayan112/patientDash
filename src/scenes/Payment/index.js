import { CheckBox } from '@mui/icons-material';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from 'react'
import { Box } from '@mui/material';
 import './index.css';

const Payment = () => {
  return (
    <div>
      <Box m="18px" height="80vh">
        <Box
          m="30px"
          height="500"
          width="500"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <div class="card">
            <div class="card-details">
              <p class="text-title">Card title</p>
              <p class="text-body">Here are the details of the card</p>
            </div>
            <button class="card-button">More info</button>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Payment
