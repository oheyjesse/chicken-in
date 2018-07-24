import React from 'react'
import EditButton from '../../../img/edit-button.svg'

const EmployeeCard = (props) => {
  return (
    <div className='employeecard'>
      <div className='name'>{props.employee.firstName} {props.employee.lastName} </div>
      <div className='email'>{props.employee.email}</div>
      <div className='location'>{props.employee.locations.filter(location => location).join(', ')}</div>
      <div className='currency st'>{(props.employee.standardRate) / 100}</div>
      <div className='currency ot'>{(props.employee.standardRate * props.businessData.overtimeMultiplier) / 100}</div>
      <div className='currency dt'>{(props.employee.standardRate * props.businessData.doubleTimeMultiplier) / 100}</div>
      
      {/* these buttons hidden when in desktop via CSS */}
      <div className="btns">
        <button
          className='button blue mobile'
          onClick={(e) => props.openEditEmployeeModal(props.employee._id, e)}
        >Edit</button>
        <button
          className='button red mobile'
          onClick={(e) => props.handleDelete(props.employee._id, e)}
        >Delete</button>
      </div>

      {/* these buttons hidden when in mobile via CSS */}
      <div className="btns">
        <button
          className='edit button small desktop'
          onClick={(e) => props.openEditEmployeeModal(props.employee._id, e)}
        ></button>
        <button
          className='delete button small desktop'
          onClick={(e) => props.handleDelete(props.employee._id, e)}
        >&times;</button>
      </div>
    </div>
  )
}

export default EmployeeCard
