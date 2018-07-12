import React from 'react';
import { ShiftCard } from '../ShiftCard/ShiftCard'

const PendingShifts = ({ pendingShifts }) => {
  return (
    <div>
      <h2>Pending Shifts</h2>
        {pendingShifts.map((shift, index) => {
          return <ShiftCard key={index} shift={shift}/>
        })}
    </div>
  )
}

export { PendingShifts }