import React from 'react';
import { ShiftCard } from '../ShiftCard/ShiftCard'
import './PendingShifts.scss'

const PendingShifts = ({ pendingShifts, deletePendingShift }) => {

  const pendingShiftsSorted = pendingShifts.sort(function (a, b) {
    return a.date - b.date;
  })

  return (
    <div className='PendingShifts'>
      <h2><p>Pending Shifts</p><span className='rejected_hide_in_mobile_view'>
        <span className='date_column'>Date</span>
        <span className='location_column'>Location</span>
        <span className='start_column'>Start</span>
        <span className='end_column'>End</span>
        <span className='standard_hours_column'>SH</span>
        <span className='overtime_column'>OT</span>
        <span className='double_time_column'>DT</span>
        <span className='total_pay_column'>Pay</span>
      </span></h2>
      {pendingShiftsSorted.map((shift, index) => {
        return <ShiftCard key={index} shift={shift} deletePendingShift={deletePendingShift}/>
      })}
    </div>
  )
}

export { PendingShifts }