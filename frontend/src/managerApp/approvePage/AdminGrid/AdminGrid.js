import React from 'react'
import './AdminGrid.scss'

// Components
import { ApproveHeader } from '../ApproveHeader/ApproveHeader'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AdminGrid = (props) => {
  return (
    <div className="admingrid">
      <ApproveHeader/>

      {props.shifts.map(shift => {
        return (<ShiftCard shift={shift}/>)
      })}
    </div>
  )
}

export { AdminGrid }
