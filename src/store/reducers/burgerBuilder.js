import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } from '../actions/actionTypes'

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const addIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    },
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
}

const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    },
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
  }
}

const setIngredients = (state, action) => {
  return {
    ...state,
    ingredients: action.ingredients,
    totalPrice: 4,
    error: false
  }
}

const fetchIngredientsFailed = (state, action) => {
  return {
    ...state,
    error: true
  }
}

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(state, action)
    case REMOVE_INGREDIENT:
      return removeIngredient(state, action)
    case SET_INGREDIENTS:
      return setIngredients(state, action)
    case FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action)
    default:
      return state
  }
}

export default burgerBuilderReducer
