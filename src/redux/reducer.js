const initialState = {
  airlines: [],
  passengers: [],
  allPassengers: [],
  passenger: {},
};

const passengersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AIRLINE":
      return {
        ...state,
        airlines: action.payload,
      };

    case "GET_ALL_PASSENGER":
      return {
        ...state,
        allPassengers: action.payload,
      };

    case "GET_PASSENGER":
      return {
        ...state,
        passengers: action.payload,
      };

    case "ADD_PASSENGER":
    case "DELETE_PASSENGER":
    case "UPDATE_PASSENGER":
      return {
        ...state,
      };

    case "GET_SINGLE_PASSENGER":
      return {
        ...state,
        passenger: action.payload,
      };
    default:
      return state;
  }
};

export default passengersReducer;
