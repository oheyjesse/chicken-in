import React from 'react';
import { ShiftCard } from '../ShiftCard/ShiftCard'

const RejectedShifts = ({ rejectedShifts }) => {
  return (
    <div>
      <h2>Rejected Shifts</h2>
        {rejectedShifts.map((shift, index) => {
          return <ShiftCard key={index} shift={shift}/>
        })}
    </div>
  )
}

export { RejectedShifts }