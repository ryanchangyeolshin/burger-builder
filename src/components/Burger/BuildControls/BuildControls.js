import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const BuildControls = ({ ingredientAdded, ingredientRemoved, disabledInfo }) => (
  <div className={classes.BuildControls}>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => ingredientAdded(control.type)}
        removed={() => ingredientRemoved(control.type)}
        disabled={disabledInfo[control.type]}
      />
    ))}
  </div>
)

export default BuildControls
