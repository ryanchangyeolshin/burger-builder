import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH
} from '../actions/actionTypes'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
}

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true
  }
}

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false
  }
}

const authFailed = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false
  }
}

const authLogout = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null
  }
}

const setAuthRedirectPath = (state, action) => {
  return {
    ...state,
    authRedirectPath: action.path
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action)
    case AUTH_SUCCESS:
      return authSuccess(state, action)
    case AUTH_FAILED:
      return authFailed(state, action)
    case AUTH_LOGOUT:
      return authLogout(state, action)
    case SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action)
    default:
      return state
  }
}

export default authReducer
