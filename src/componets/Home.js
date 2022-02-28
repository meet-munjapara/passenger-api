import React, { useEffect, useState } from "react";
import {
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TableCell,
  tableCellClasses,
  Pagination,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteData,
  fetchAirlineData,
  fetchData,
  fetchAllData,
} from "../redux/action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  const { allPassengers } = useSelector((state) => state);
  const { passengers } = useSelector((state) => state);

  let pageCount = Math.ceil(allPassengers.length / 5);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchAirlineData());
  }, [dispatch]);

  const handleDelete = (id) => {
    window.confirm(`are you sure you want to delete ${id} ?`);
    dispatch(deleteData(id));
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Button
          style={{ marginBottom: "10px" }}
          variant="contained"
          onClick={() => history.push("/add")}
        >
          ADD
        </Button>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Trips</StyledTableCell>
              <StyledTableCell align="center">id</StyledTableCell>
              <StyledTableCell align="center">Airline id</StyledTableCell>
              <StyledTableCell align="center">Airline Name</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passengers.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">{row.trips}</StyledTableCell>
                <StyledTableCell align="center">{row._id}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.airline[0].id || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.airline[0].name || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    onClick={() => {
                      handleDelete(row._id);
                    }}
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      history.push(`/edit/${row._id}`);
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        onChange={(e, value) => {
          // handleChange(e.target.textContent)
          setPage(value);
        }}
        style={{ display: "flex", justifyContent: "center" }}
        count={pageCount && pageCount}
        color="primary"
      />
    </React.Fragment>
  );
}
export default Home;
