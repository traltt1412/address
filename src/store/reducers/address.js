
import { FETCH_ADDRESS, FETCH_ADDRESS_BY_ID } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ADDRESS:
      state = { ...state, addressList: action.payload}
      break
    case FETCH_ADDRESS_BY_ID:
      state = { ...state, formData: action.payload}
      break
    default:
      break
  }
  console.log(state)
  return state
}