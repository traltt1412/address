
import { FETCH_ADDRESS, FETCH_ADDRESS_BY_ID } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ADDRESS:
      return action.payload;
    case FETCH_ADDRESS_BY_ID:
      return action.payload;
    default:
      return state;
  }
};