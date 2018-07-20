import React from 'react'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'

// TODO: replace number with 'business.overtimeMultiplier'
// TODO: replace number with 'business.doubletimeMultiplier'
const EmployeeCard = (props) => {
  return (
    <div className='employeecard'>
      <p className='name'>Name: {props.employee.firstName} {props.employee.lastName} </p>
      <p className='email'>Email: {props.employee.email}</p>
      <p className='location'>Location: {props.employee.locations.filter(location => location).join()}</p>
      <p className='st'>Rate/st: {props.employee.standardRate}</p>
      <p className='ot'>Rate/ot: {props.employee.standardRate * 1.5}</p>
      <p className='dt'>Rate/dt: {props.employee.standardRate * 2}</p>
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
