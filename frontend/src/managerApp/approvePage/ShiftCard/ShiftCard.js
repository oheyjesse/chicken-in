import React from 'react'
import './ShiftCard.scss'

const ShiftCard = (props) => {
  return (
    <div className="shiftcard">
      <div className="date">{props.shift.date}</div>
      <div className="name">Test Namerson</div>
      <div className="location">{props.shift.location}</div>
      <div className="timeon">{props.shift.startTime}</div>
      <div className="timeoff">{props.shift.endTime}</div>
      <div className="st">{props.shift.standardMinutes}</div>
      <div className="ot">{props.shift.overtimeMinutes}</div>
      <div className="dt">{props.shift.doubleTimeMinutes}</div>
      <div className="pay">{props.shift.totalPay}</div>
      <div className="status">buttons</div>
    </div>
  )
}

export { ShiftCard }
