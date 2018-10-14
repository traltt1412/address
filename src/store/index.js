import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import address from './reducers/address'

export default createStore(
  combineReducers({
    address,
  }),
  applyMiddleware (thunk)
)