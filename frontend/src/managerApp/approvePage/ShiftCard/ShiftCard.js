import React from 'react'
import moment from 'moment'

import './ShiftCard.scss'
import approveIcon from '../../../img/approve-button.svg'
import rejectIcon from '../../../img/delete-button.svg'

const convertMinsToHours = (mins) => {
  let h = Math.floor(mins / 60)
  let m = mins % 60
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  return `${h}:${m}`
}

const ShiftCard = ({shift, updateShift}) => {
  return (
    <div className="shiftcard">
      <div className="date">{moment(shift.date).format('ddd, DD/MM/YYYY')}</div>
      <div className="name">{`${shift.employee.fullName}`}</div>
      <div className="loc">{shift.location}</div>
      <div className="timeon">{convertMinsToHours(shift.startTime)}</div>
      <div className="time-bar-container">
        <div className="time-bar"></div>
      </div>
      <div className="timeoff">{convertMinsToHours(shift.endTime)}</div>
      <div className="st">{shift.standardMinutes / 60.0}</div>
      <div className="ot">{shift.overtimeMinutes / 60.0}</div>
      <div className="dt">{shift.doubleTimeMinutes / 60.0}</div>
      <div className="pay">{(shift.totalPay / 100).toLocaleString('en-AU', {style: 'currency', currency: 'AUD'})}</div>
      <div className="status">
        {/* these buttons hidden when in desktop via CSS */}
        <button className="button green mobile" onClick={updateShift} shiftid={shift._id} status="approved">Approve</button>
        <button className="button red mobile" onClick={updateShift} shiftid={shift._id} status="rejected">Reject</button>

        {/* these buttons hidden when in mobile via CSS */}
        <button className="button icon-approve small desktop" onClick={updateShift} shiftid={shift._id} status="approved"><img status="approved" shiftid={shift._id} src={approveIcon}/></button>
        <button className="button icon-delete small desktop" onClick={updateShift} shiftid={shift._id} status="rejected"><img status="rejected" shiftid={shift._id} src={rejectIcon}/></button>
      </div>
    </div>
  )
}

export { ShiftCard }
