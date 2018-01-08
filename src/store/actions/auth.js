import { AUTH_START, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT } from './actionTypes'
import { apiKey } from '../../keys'
import axios from 'axios'

export const authStart = () => {
  return {
    type: AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
    userId: userId
  }
}

export const authFailed = error => {
  return {
    type: AUTH_FAILED,
    error: error
  }
}

export const logout = () => {
  return {
    type: AUTH_LOGOUT
  }
}

export const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => {
    dispatch(logout())
  }, expirationTime * 1000)
}

export const auth = (email, password, isSignup) => dispatch => {
  dispatch(authStart())
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true
  }
  let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`
  if (isSignup) {
    url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`
  }
  axios.post(url, authData)
    .then(response => {
      dispatch(authSuccess(response.data.idToken, response.data.localId))
      dispatch(checkAuthTimeout(response.data.expiresIn))
    })
    .catch(error => {
      dispatch(authFailed(error.response.data.error))
    })
}
