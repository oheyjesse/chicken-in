import React from 'react'
import './ApproveHeader.scss'

const ApproveHeader = (props) => {
  return (
    <div className="shiftcard">
      <div className="approveheader">Date</div>
      <div className="approveheader">Name</div>
      <div className="approveheader">Location</div>
      <div className="approveheader">Time On</div>
      <div className="approveheader">Time Off</div>
      <div className="approveheader">ST</div>
      <div className="approveheader">OT</div>
      <div className="approveheader">DT</div>
      <div className="approveheader">$</div>
      <div className="approveheader">Status</div>
    </div>
  )
}

export { ApproveHeader }
