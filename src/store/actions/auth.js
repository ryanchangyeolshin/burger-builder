import { AUTH_START, AUTH_SUCCESS, AUTH_FAILED } from './actionTypes'
import { apiKey } from '../../keys'
import axios from 'axios'

export const authStart = () => {
  return {
    type: AUTH_START
  }
}

export const authSuccess = authData => {
  return {
    type: AUTH_SUCCESS,
    authData: authData
  }
}

export const authFailed = error => {
  return {
    type: AUTH_FAILED,
    error: error
  }
}

export const auth = (email, password) => dispatch => {
  dispatch(authStart())
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true
  }
  axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`, authData)
    .then(response => {
      console.log(response.data)
      dispatch(authSuccess(response.data))
    })
    .catch(error => {
      console.log(error)
      dispatch(authFailed(error))
    })
}
