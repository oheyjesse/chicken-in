import React from 'react'
import './ApproveHeader.scss'

const ApproveHeader = (props) => {
  return ([
    <div className="ag_item ag_header">Date</div>,
    <div className="ag_item ag_header">Name</div>,
    <div className="ag_item ag_header">Location</div>,
    <div className="ag_item ag_header">Time On</div>,
    <div className="ag_item ag_header">Time Off</div>,
    <div className="ag_item ag_header">ST</div>,
    <div className="ag_item ag_header">OT</div>,
    <div className="ag_item ag_header">DT</div>,
    <div className="ag_item ag_header">$</div>,
    <div className="ag_item ag_header">Status</div>
  ])
}

export { ApproveHeader }
