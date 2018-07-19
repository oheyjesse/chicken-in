import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'

const AllEmployees = (props) => {
  return (
    <div>
      {props.employees.map((employee) => {
        return (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            openEditEmployeeModal={props.openEditEmployeeModal}
            closeEditEmployeeModal={props.closeEditEmployeeModal}
            editEmployeeForm={props.editEmployeeForm}
            handleEditEmployee={props.handleEditEmployee}
          />
        )
      })}
    </div>
  )
}

export default AllEmployees
