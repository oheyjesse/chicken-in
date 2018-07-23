import React from 'react'
import './ReportHeader.scss'

const ReportHeader = (props) => {
  return (
    <div className="shiftcard cardheader">
      <div onClick={props.sortBy} value="date">Date</div>
      <div onClick={props.sortBy} value="fullName">Name</div>
      <div onClick={props.sortBy} value="location">Location</div>
      <div onClick={props.sortBy} value="startTime">Time On</div>
      <div onClick={props.sortBy} value="endTime">Time Off</div>
      <div onClick={props.sortBy} value="standardMinutes">ST</div>
      <div onClick={props.sortBy} value="overtimeMinutes">OT</div>
      <div onClick={props.sortBy} value="doubleTimeMinutes">DT</div>
      <div onClick={props.sortBy} value="totalPay">$</div>
      <div onClick={props.sortBy} value="totalPay">Status</div>
    </div>
  )
}

export { ReportHeader }
