import React from 'react'
import './ApproveHeader.scss'

const ApproveHeader = (props) => {
  return (
    <div className="shiftcard cardheader">
      <div>Date</div>
      <div>Name</div>
      <div>Location</div>
      <div>Time On</div>
      <div>Time Off</div>
      <div>ST</div>
      <div>OT</div>
      <div>DT</div>
      <div>$</div>
      <div>Status</div>
    </div>
  )
}

export { ApproveHeader }
