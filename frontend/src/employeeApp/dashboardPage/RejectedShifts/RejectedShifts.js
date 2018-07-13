import React from 'react'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const RejectedShifts = ({ archiveRejectedShift, rejectedShifts }) => {
  
  const rejectedShiftsSorted = rejectedShifts.sort(function (a, b) {
    return b.date - a.date;
  })
  
  return (
    <div>
      <h2>Rejected Shifts</h2>
      {rejectedShiftsSorted.map((shift, index) => {
        return <ShiftCard key={index} shift={shift} archiveRejectedShift={archiveRejectedShift}/>
      })}
    </div>
  )
}

export { RejectedShifts }
