import React from 'react'
import { Link } from 'react-router-dom'
import './AdminContainer.scss'

// Components
import { ReportHeader } from '../ReportHeader/ReportHeader'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AdminContainer = ({shifts, sortBy}) => {
  const filteredShifts = shifts

  return (
    <div className="admincontainer">
      <ReportHeader sortBy={sortBy}/>

      { !filteredShifts
        ? <div className="message">
          <h2>No shifts currently available (<Link to="/report">refresh?</Link>)</h2>
        </div>
        : filteredShifts.map(shift => {
          return (
            <ShiftCard
              shift={shift}
              key={shift._id}
            />)
        })}
    </div>
  )
}

export { AdminContainer }
