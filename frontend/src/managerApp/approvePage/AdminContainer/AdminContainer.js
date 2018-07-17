import React from 'react'
import './AdminContainer.scss'

// Components
import { ApproveHeader } from '../ApproveHeader/ApproveHeader'
import { ShiftCard } from '../ShiftCard/ShiftCard'

const AdminContainer = (props) => {
  return (
    <div className="admincontainer">
      <ApproveHeader/>

      {props.shifts.map(shift => {
        return (<ShiftCard shift={shift}/>)
      })}
    </div>
  )
}

export { AdminContainer }
