import axios from "axios";

export const fetchAirlineData = () => {
  return async function (dispatch) {
    const response = await axios.get(`${process.env.REACT_APP_API}/airlines`);
    dispatch({
      type: "GET_AIRLINE",
      payload: response.data,
    });
  };
};

export const fetchAllData = () => {
  return async function (dispatch) {
    const response = await axios.get(`${process.env.REACT_APP_API}/passenger`);
    dispatch({
      type: "GET_ALL_PASSENGER",
      payload: response.data.data,
    });
  };
};

export const fetchData = (page) => {
  return async function (dispatch) {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/passenger?page=${page}&size=5`
    );
    dispatch({
      type: "GET_PASSENGER",
      payload: response.data.data,
    });
  };
};

export const addData = (data) => {
  return async function (dispatch) {
    await axios.post(`${process.env.REACT_APP_API}/passenger`, data);
    dispatch({
      type: "ADD_PASSENGER",
    });
  };
};

export const deleteData = (id) => {
  return async function (dispatch) {
    await axios
      .delete(`${process.env.REACT_APP_API}/passenger/${id}`)
      .then((res) => {
        dispatch({
          type: "DELETE_PASSENGER",
        });
        dispatch(fetchData());
      });
  };
};

export const getSinglePassenger = (id) => {
  return async function (dispatch) {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/passenger/${id}`
    );
    dispatch({
      type: "GET_SINGLE_PASSENGER",
      payload: response.data,
    });
  };
};

export const updatePassenger = (id, data) => {
  return async function (dispatch) {
    await axios.put(`${process.env.REACT_APP_API}/passenger/${id}`, data);
    dispatch({
      type: "UPDATE_PASSENGER",
    });
    dispatch(fetchData());
  };
};
