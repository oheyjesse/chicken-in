import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import EmployeeHeader from '../EmployeeHeader/EmployeeHeader'

const AllEmployees = (props) => {
  return (
    <div>
      <EmployeeHeader
        sortBy={props.sortBy}
      />
      {props.employees.map((employee) => {
        return (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            openEditEmployeeModal={props.openEditEmployeeModal}
            editEmployeeForm={props.editEmployeeForm}
            handleEditEmployee={props.handleEditEmployee}
            handleDelete={props.handleDelete}
          />
        )
      })}
    </div>
  )
}

export default AllEmployees
