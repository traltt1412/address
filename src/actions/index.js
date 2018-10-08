
import { addressRef, fireDB } from "../config/firebase";
import { FETCH_ADDRESS, FETCH_ADDRESS_BY_ID } from "./types";

export const addAddress = newAddress => async dispatch => {
  addressRef.push(newAddress.address);
};

export const fetchAddress = () => async dispatch => {
  addressRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ADDRESS,
      payload: snapshot.val()
    })
  })
}

export const fetchAddressById = (id) => async dispatch => {
  addressRef.child('/-LOJlA8elEjP13EImlBD').on("value", snapshot => {
    dispatch({
      type: FETCH_ADDRESS_BY_ID,
      payload: snapshot.val()
    })
  })
}