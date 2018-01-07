import axios from '../../axios-orders'
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } from './actionTypes'

export const addIngredient = name => {
  return {
    type: ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = name => {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: name
  }
}

export const setIngredients = ingredients => {
  return {
    type: SET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => dispatch => {
  axios.get('/ingredients.json')
    .then(response => {
      dispatch(setIngredients(response.data))
    })
    .catch(err => {
      dispatch(fetchIngredientsFailed())
    })
}
