import React from 'react'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AllShifts = (props) => {
  return (
    <div>
      <h1>All Shifts</h1>
      {props.shifts.map((shift, index) => {
        return <ShiftCard key={index} shift={shift} />
      })}
    </div>
  )
}

export { AllShifts }