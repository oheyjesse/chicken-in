import React from 'react'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'

// TODO: replace number with 'business.overtimeMultiplier'
// TODO: replace number with 'business.doubletimeMultiplier'
const EmployeeCard = (props) => {
  return (
    <div className='employeecard'>
      <p className='name'>{props.employee.firstName} {props.employee.lastName} </p>
      <p className='email'>{props.employee.email}</p>
      <p className='location'>{props.employee.locations.filter(location => location).join()}</p>
      <p className='currency st'>{(props.employee.standardRate) / 100}</p>
      <p className='currency ot'>{(props.employee.standardRate * 1.5) / 100}</p>
      <p className='currency dt'>{(props.employee.standardRate * 2) / 100}</p>
      <button
        className='edit'
        onClick={(e) => props.openEditEmployeeModal(props.employee.id, e)}
      >Edit</button>
      <button
        className='delete'
        onClick={(e) => props.handleDelete(props.employee.id, e)}
      >&times;</button>
    </div>
  )
}

export default EmployeeCard
