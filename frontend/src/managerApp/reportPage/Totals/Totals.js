import React from 'react'

const Totals = (props) => {
  return (
    <div>
      <h2>Totals</h2>
      <p>Total hours: {props.shifts.reduce((sum, shift) => shift.standardMinutes + shift.overtimeMinutes + shift.doubleTimeMinutes + sum, 0)}</p>
      <p>Standard hours: {props.shifts.reduce((sum, shift) => shift.standardMinutes + sum, 0)}</p>
      <p>Over time hours: {props.shifts.reduce((sum, shift) => shift.overtimeMinutes + sum, 0)}</p>
      <p>Double time hours: {props.shifts.reduce((sum, shift) => shift.doubleTimeMinutes + sum, 0)}</p>
      <p>Total pay: {props.shifts.reduce((sum, shift) => shift.totalPay + sum, 0)}</p>
    </div>
  )
}

export { Totals }
