import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePassenger, updatePassenger } from "./../redux/action";

function EditDetail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { airlines } = useSelector((state) => state);
  const { passenger } = useSelector((state) => state);

  let data = {
    name: passenger.name,
    trips: passenger.trips,
    airline: passenger.airline && passenger.airline[0].id,
  };

  const [state, setState] = useState({});

  useEffect(() => {
    dispatch(getSinglePassenger(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (passenger) {
      setState({ ...data });
    }
  }, [passenger]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", state);
    dispatch(updatePassenger(id, state));
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
      <Typography variant="h4">Edit passenger</Typography>
      <TextField
        name="name"
        onChange={(e) => setState({ ...state, name: e.target.value })}
        value={state.name || ""}
        label="Name"
        variant="outlined"
      />

      <TextField
        name="trips"
        onChange={(e) => setState({ ...state, trips: e.target.value })}
        value={state.trips || ""}
        label="Trips"
        variant="outlined"
      />
      <FormControl fullWidth>
        <InputLabel shrink id="demo-simple-select-label">
          Airline
        </InputLabel>
        <Select
          displayEmpty
          name="airline"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.airline || ""}
          label="Airline"
          style={{
            textAlign: "left",
          }}
          onChange={(e) => setState({ ...state, airline: e.target.value })}
        >
          {airlines &&
            airlines.map((currency, index) => (
              <MenuItem key={index} value={currency.id}>
                {currency.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <Button
        onClick={() => history.push("/")}
        style={{ width: "20%" }}
        variant="contained"
        type="Submit"
      >
        Exit
      </Button>
      <Button
        onClick={handleSubmit}
        style={{ width: "20%" }}
        variant="contained"
        type="Submit"
      >
        Update
      </Button>
    </Box>
  );
}

export default EditDetail;
