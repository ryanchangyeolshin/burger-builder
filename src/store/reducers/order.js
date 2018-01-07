import {
  PURCHASE_INIT,
  PURCHASE_BURGER_START,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAILED,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL
} from '../actions/actionTypes'

const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

const purchaseInit = (state, action) => {
  return {
    ...state,
    purchased: false
  }
}

const purchaseBurgerStart = (state, action) => {
  return {
    ...state,
    loading: true
  }
}

const purchaseBurgerSuccess = (state, action) => {
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
}

const purchaseBurgerFailed = (state, action) => {
  return {
    ...state,
    loading: false
  }
}

const fetchOrdersStart = (state, action) => {
  return {
    ...state,
    loading: true
  }
}

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  }
}

const fetchOrdersFail = (state, action) => {
  return {
    ...state,
    loading: false
  }
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return purchaseInit(state, action)
    case PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action)
    case PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action)
    case PURCHASE_BURGER_FAILED:
      return purchaseBurgerFailed(state, action)
    case FETCH_ORDERS_START:
      return fetchOrdersStart(state, action)
    case FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action)
    case FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action)
    default:
      return state
  }
}

export default ordersReducer
