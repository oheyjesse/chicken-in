import React from 'react'
import moment from 'moment'

import './ShiftCard.scss'

const ShiftCard = ({shift, updateShift}) => {
  return (
    <div className="shiftcard">
      <div className="date">{moment(shift.date).format('ddd, DD/MM/YYYY')}</div>
      <div className="name">{`${shift.employee.fullName}`}</div>
      <div className="location">{shift.location}</div>
      <div className="timeon">{shift.startTime}</div>
      <div className="time-bar-container">
        <div className="time-bar"></div>
      </div>
      <div className="timeoff">{shift.endTime}</div>
      <div className="st">{shift.standardMinutes}</div>
      <div className="ot">{shift.overtimeMinutes}</div>
      <div className="dt">{shift.doubleTimeMinutes}</div>
      <div className="pay">{(shift.totalPay / 100).toLocaleString('en-AU', {style: 'currency', currency: 'AUD'})}</div>
      <div className="status">
        <button className="button green mobile" onClick={updateShift} shiftid={shift._id} status="approved">Approve</button>
        <button className="button red mobile" onClick={updateShift} shiftid={shift._id} status="rejected">Reject</button>

        <button className="button green small desktop" onClick={updateShift} shiftid={shift._id} status="approved">✔</button>
        <button className="button red small desktop" onClick={updateShift} shiftid={shift._id} status="rejected">x</button>
      </div>
    </div>
  )
}

export { ShiftCard }
