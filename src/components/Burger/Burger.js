import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.css'

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(ingredient => [...Array(ingredients[ingredient])].map((_, i) => {
      return <BurgerIngredients key={ingredient + i} type={ingredient} />
    }))
    .reduce((acc, value) => {
      return acc.concat(value)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default Burger
