import { AUTH_START, AUTH_SUCCESS, AUTH_FAILED } from '../actions/actionTypes'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
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

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action)
    case AUTH_SUCCESS:
      return authSuccess(state, action)
    case AUTH_FAILED:
      return authFailed(state, action)
    default:
      return state
  }
}

export default authReducer