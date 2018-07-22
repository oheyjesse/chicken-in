import React from 'react'
import { Link } from 'react-router-dom'
import './AdminContainer.scss'

// Components
import { ApproveHeader } from '../ApproveHeader/ApproveHeader'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AdminContainer = ({shifts, updateShift, sortBy}) => {
  const filteredShifts = shifts

  return (
    <div className="admincontainer">
      <ApproveHeader sortBy={sortBy}/>

      { !filteredShifts
        ? <div className="message">
          <h2>No shifts currently Pending Review (<Link to="/approve">refresh?</Link>)</h2>
        </div>
        : filteredShifts.map(shift => {
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
