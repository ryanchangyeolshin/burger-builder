import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAILED, PURCHASE_BURGER_START } from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    id: id,
    orderData: orderData
  }
}

export const purchaseBurgerFail = error => {
  return {
    type: PURCHASE_BURGER_FAILED,
    error: error
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START
  }
}

export const purchaseBurger = orderData => dispatch => {
  dispatch(purchaseBurgerStart())
  axios.post('/orders.json', orderData)
    .then(response => {
      console.log(response.data)
      dispatch(purchaseBurgerSuccess(response.data.name, orderData))
    })
    .catch(err => {
      dispatch(purchaseBurgerFail(err))
    })
}
