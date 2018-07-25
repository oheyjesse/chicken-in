import React from 'react'
import { ShiftCard } from '../ShiftCard/ShiftCard'
import './RejectedShifts.scss'

const RejectedShifts = ({ archiveRejectedShift, rejectedShifts }) => {
  
  const rejectedShiftsSorted = rejectedShifts.sort(function (a, b) {
    return  a.date - b.date
  })

  return (
    <div className='RejectedShifts'>
      <h2><p>Rejected Shifts</p><span className='rejected_hide_in_mobile_view'>
        <span className='date_column'>Date</span>
        <span className='location_column'>Location</span>
        <span className='start_column'>Start</span>
        <span className='end_column'>End</span>
        <span className='standard_hours_column'>SH</span>
        <span className='overtime_column'>OT</span>
        <span className='double_time_column'>DT</span>
        <span className='total_pay_column'>Pay</span>
      </span></h2>
      {rejectedShiftsSorted.map((shift, index) => {
        return <ShiftCard key={index} shift={shift} archiveRejectedShift={archiveRejectedShift}/>
      })}
    </div>
  )
}

export { RejectedShifts }
