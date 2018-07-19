import React from 'react'
import { ShiftCard } from '../ShiftCard/ShiftCard'
import './AllShifts.scss'

const AllShifts = ({ allShifts }) => {
  const allShiftsSorted = allShifts.sort(function (a, b) {
    return a.date - b.date
  })

  return (
    <div className='AllShifts'>
      <h2>All Shifts</h2>
      {allShiftsSorted.map((shift, index) => {
        return <ShiftCard key={index} shift={shift}/>
      })}
    </div>
  )
}

export { AllShifts }
