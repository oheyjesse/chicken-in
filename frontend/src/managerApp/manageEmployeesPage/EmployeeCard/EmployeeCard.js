import React from 'react'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'

// TODO: replace number with 'business.overtimeMultiplier'
// TODO: replace number with 'business.doubletimeMultiplier'
const EmployeeCard = (props) => {
  return (
    <div>
      <p>Name: {props.employee.firstName} {props.employee.lastName} </p>
      <p>Email: {props.employee.email}</p>
      <p>Location: {props.employee.locations.filter(location => location).join()}</p>
      <p>Rate/st: {props.employee.standardRate}</p>
      <p>Rate/ot: {props.employee.standardRate * 1.5}</p>
      <p>Rate/dt: {props.employee.standardRate * 2}</p>
      <button
        onClick={(e) => props.openEditEmployeeModal(props.employee.id, e)}
      >Edit</button>
      <button>&times;</button>
    </div>
  )
}

export default EmployeeCard
