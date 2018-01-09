import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH
} from './actionTypes'
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
  localStorage.removeItem('token')
  localStorage.removeItem('expirationTime')
  localStorage.removeItem('userId')
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
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
      localStorage.setItem('token', response.data.idToken)
      localStorage.setItem('expirationDate', expirationDate)
      localStorage.setItem('userId', response.data.localId)
      dispatch(authSuccess(response.data.idToken, response.data.localId))
      dispatch(checkAuthTimeout(response.data.expiresIn))
    })
    .catch(error => {
      dispatch(authFailed(error.response.data.error))
    })
}

export const setAuthRedirectPath = path => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path: path
  }
}

export const authCheckState = () => dispatch => {
  const token = localStorage.getItem('token')
  if (!token) {
    dispatch(logout())
  }
  else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
    if (expirationDate > new Date()) {
      const userId = localStorage.getItem('userId')
      dispatch(authSuccess(token, userId))
      dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
    }
    else {
      dispatch(logout())
    }
  }
}
