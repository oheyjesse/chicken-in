import React from 'react'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AllShifts = ({ allShifts }) => {
  const allShiftsSorted = allShifts.sort(function (a, b) {
    return b.date - a.date;
  })

  return (
    <div>
      <h2>All Shifts</h2>
      {allShiftsSorted.map((shift, index) => {
        return <ShiftCard key={index} shift={shift}/>
      })}
    </div>
  )
}

export { AllShifts }
