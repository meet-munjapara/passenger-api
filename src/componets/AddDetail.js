import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../redux/action";

function AddDetail() {
  const history = useHistory();
  console.log("history: ", history);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    trips: "",
    airline: "",
  });
  const { name, trips, airline } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(state));
    history.push("/");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "90%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4">Add passenger</Typography>
      <TextField
        name="name"
        onChange={handleInputChange}
        value={name}
        label="Name"
        variant="outlined"
      />

      <TextField
        name="trips"
        onChange={handleInputChange}
        value={trips}
        label="Trips"
        variant="outlined"
      />
      <TextField
        type="number"
        name="airline"
        onChange={handleInputChange}
        value={airline}
        label="Airline"
        variant="outlined"
      />

      <Button
        onClick={() => history.push("/")}
        style={{ width: "20%" }}
        variant="contained"
      >
        Exit
      </Button>
      <Button
        onClick={handleSubmit}
        style={{ width: "20%" }}
        variant="contained"
        type="Submit"
      >
        Add
      </Button>
    </Box>
  );
}

export default AddDetail;
