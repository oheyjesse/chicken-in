import React from 'react'
import './AdminContainer.scss'

// Components
import { ApproveHeader } from '../ApproveHeader/ApproveHeader'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AdminContainer = ({shifts, updateShift, sortBy}) => {
  return (
    <div className="admincontainer">
      <ApproveHeader sortBy={sortBy}/>

      {shifts.map(shift => {
        return (
          <ShiftCard
            shift={shift}
            key={shift._id}
            updateShift={updateShift}
          />)
      })}
    </div>
  )
}

export { AdminContainer }
