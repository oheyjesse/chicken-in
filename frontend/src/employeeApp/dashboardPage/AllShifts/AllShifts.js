import React from 'react'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AllShifts = ({ allShifts }) => {
  return (
    <div>
      <h2>All Shifts</h2>
      {allShifts.map((shift, index) => {
        return <ShiftCard key={index} shift={shift}/>
      })}
    </div>
  )
}

export { AllShifts }