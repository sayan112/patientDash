import { Box, Button, ListSubheader, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { mockDataDoctorAppoint } from "../../data/mockData";

const Doctor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 const [age, setAge] = React.useState("");
 const [specialization, setSpecialization] = React.useState("");
 const handleChange = (event) => {
   setAge(event.target.value);
 };
  const handleChangespecialization = (event) => {
    setSpecialization(event.target.value);
  };


    const columns = [
      { field: "id", headerName: "ID", flex: 1 },
      { field: "registerId", headerName: "Register ID", flex: 1 },
      {
        field: "name",
        headerName: "Doctor Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      { field: "availableTime", headerName: "Available Time", flex: 1},
      {
        field: "specialization",
        headerName: "Specialization",
        flex: 1,
      },
    
    ];

  return (
    <div>
      <Box m="18px">
        <Header
          title="Doctors"
          subtitle="List of Doctor who are avalaible ..."
        />
        <Box display="flex" justifyContent="space-around">
          <TextField id="filled-basic" label="TDM ID" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Doctor Name / Doctor ID"
            variant="outlined"
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="grouped-select">Select Time</InputLabel>
              <Select
                value={age}
                id="grouped-select"
                label="Select TImeing"
                onChange={handleChange}
              >
                <ListSubheader>Morning</ListSubheader>
                <MenuItem value={1}>11.00 AM</MenuItem>
                <MenuItem value={2}>12.00 AM</MenuItem>
                {/* <MenuItem value={2}>1.00 AM</MenuItem>
                <MenuItem value={2}>2.00 AM</MenuItem> */}
                <ListSubheader>Evening</ListSubheader>
                <MenuItem value={3}>6.00 PM</MenuItem>
                <MenuItem value={4}>6.30 PM</MenuItem>
                {/* <MenuItem value={4}>7.00 PM</MenuItem>
                <MenuItem value={4}>7.30 PM</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Specialization
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={specialization}
                label="Specialization"
                onChange={handleChangespecialization}
              >
                <MenuItem value={10}>Cardio</MenuItem>
                <MenuItem value={20}>Orthopedics</MenuItem>
                <MenuItem value={30}>Heart Surgen</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            color="secondary"
            size="large"
            endIcon={<SendIcon color="secondary" />}
          >
            gooooooo
          </Button>
        </Box>
        <Box
          m="30px 0 0 0"
          height="60vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[500],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={mockDataDoctorAppoint}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
        <Box m="20px 0 0 0" display="flex" justifyContent="space-between">
          <Box>
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: 50, height: 30 }}
            >
              Back
            </Button>
          </Box>
          <Box
            display="flex"
            sx={{ width: "15%" }}
            justifyContent="space-between"
          >
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: 50, height: 30 }}
            >
              Refresh
            </Button>
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: 50, height: 30 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Doctor;
