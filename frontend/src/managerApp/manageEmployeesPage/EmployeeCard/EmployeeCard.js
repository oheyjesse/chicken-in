import React from 'react'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'
import EditButton from '../../../img/edit-button.svg'

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
      {/* <a href="#edit-button" onClick={props.openEditEmployeeModal}></a> */}
      <button
        className='edit button small'
        onClick={(e) => props.openEditEmployeeModal(props.employee.id, e)}
      ></button>
      <button
        className='delete button small'
        onClick={(e) => props.handleDelete(props.employee.id, e)}
      >&times;</button>
    </div>
  )
}

export default EmployeeCard
