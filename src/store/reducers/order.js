import { PURCHASE_INIT, PURCHASE_BURGER_START, PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAILED } from '../actions/actionTypes'

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      }
    case PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }
    case PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.id
      }
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
      }
    case PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default ordersReducer
