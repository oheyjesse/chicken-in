import React from 'react'
import EditButton from '../../../img/edit-button.svg'

const EmployeeCard = (props) => {
  return (
    <div className='employeecard'>
      <p className='name'>{props.employee.firstName} {props.employee.lastName} </p>
      <p className='email'>{props.employee.email}</p>
      <p className='location'>{props.employee.locations.filter(location => location).join()}</p>
      <p className='currency st'>{(props.employee.standardRate) / 100}</p>
      <p className='currency ot'>{(props.employee.standardRate * props.businessData.overtimeMultiplier) / 100}</p>
      <p className='currency dt'>{(props.employee.standardRate * props.businessData.doubleTimeMultiplier) / 100}</p>
      <button
        className='edit button small'
        onClick={(e) => props.openEditEmployeeModal(props.employee._id, e)}
      ></button>
      <button
        className='delete button small'
        onClick={(e) => props.handleDelete(props.employee.id, e)}
      >&times;</button>
    </div>
  )
}

export default EmployeeCard
