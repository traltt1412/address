
import { addressRef } from "../config/firebase";
import { FETCH_ADDRESS, FETCH_ADDRESS_BY_ID } from "./types";

export const addAddress = newAddress => async dispatch => {
  addressRef.push(newAddress.address);
}

export const updateAddress = (id, address )=> async dispatch => {
  addressRef.child('/' + id).update(address.address)
}

export const fetchAddress = () => async dispatch => {
  addressRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ADDRESS,
      payload: snapshot.val()
    })
  })
}

export const fetchAddressById = (id) => async dispatch => {
  addressRef.child('/' + id).on("value", snapshot => {
    dispatch({
      type: FETCH_ADDRESS_BY_ID,
      payload: snapshot.val()
    })
  })
}