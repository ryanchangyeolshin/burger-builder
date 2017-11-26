import React from 'react'
import classes from './BuildControl.css'

const BuildControl = ({ label }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
)

export default BuildControl
