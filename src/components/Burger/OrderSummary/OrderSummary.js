import React from 'react'
import Aux from '../../../HOC/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = ({ ingredients, purchaseCanceled, purchaseContinued }) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(key => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>: {ingredients[key]}
      </li>
    ))
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default OrderSummary
