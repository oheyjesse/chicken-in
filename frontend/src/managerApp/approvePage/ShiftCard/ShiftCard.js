import React from 'react'
import './ShiftCard.scss'

const ShiftCard = (props) => {
  return ([
    <div className="ag_item ag_date">{props.shift.date}</div>,
    <div className="ag_item ag_name">Test Namerson</div>,
    <div className="ag_item ag_location">{props.shift.location}</div>,
    <div className="ag_item ag_startTime">{props.shift.startTime}</div>,
    <div className="ag_item ag_endTime">{props.shift.endTime}</div>,
    <div className="ag_item ag_stmin">{props.shift.standardMinutes}</div>,
    <div className="ag_item ag_otmin">{props.shift.overtimeMinutes}</div>,
    <div className="ag_item ag_dtmin">{props.shift.doubleTimeMinutes}</div>,
    <div className="ag_item ag_totalpay">{props.shift.totalPay}</div>,
    <div className="ag_item ag_status">buttons</div>
  ])
}

export { ShiftCard }
