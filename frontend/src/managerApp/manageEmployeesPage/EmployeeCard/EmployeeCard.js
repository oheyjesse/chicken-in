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
      {/* <EditEmployeeModal
        key={props.employee.id}
        employee={props.employee}
        editEmployeeForm={props.editEmployeeForm}
        openEditEmployeeModal={props.openEditEmployeeModal}
        closeEditEmployeeModal={props.closeEditEmployeeModal}
        handleEdit={props.handleEdit}
      /> */}
      <button
        onClick={(e) => props.handleEditEmployee(props.employee.id, e)}>Edit
      </button>
      <button>&times;</button>
    </div>
  )
}

export default EmployeeCard
