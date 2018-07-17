import React from 'react'
import './AdminContainer.scss'

// Components
import { ApproveHeader } from '../ApproveHeader/ApproveHeader'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AdminContainer = ({shifts, updateShift}) => {
  return (
    <div className="admincontainer">
      <ApproveHeader/>

      {shifts.map(shift => {
        return (<ShiftCard shift={shift} updateShift={updateShift}/>)
      })}
    </div>
  )
}

export { AdminContainer }
