import React from 'react';
import { ShiftCard } from '../ShiftCard/ShiftCard'
import './PendingShifts.scss'

const PendingShifts = ({ pendingShifts, deletePendingShift }) => {

  const pendingShiftsSorted = pendingShifts.sort(function (a, b) {
    return a.date - b.date;
  })

  return (
    <div className='PendingShifts'>
      <h2>Pending Shifts</h2>
      {pendingShiftsSorted.map((shift, index) => {
        return <ShiftCard key={index} shift={shift} deletePendingShift={deletePendingShift}/>
      })}
    </div>
  )
}

export { PendingShifts }