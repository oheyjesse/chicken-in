import React from 'react'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'

// TODO: replace number with 'business.overtimeMultiplier'
// TODO: replace number with 'business.doubletimeMultiplier'
const EmployeeCard = (props) => {
  return (
    <div>
      <h3>Employee Card</h3>
      {props.employees.map(employee => {
        return (
          <div key={employee.id}>
            <p>Name: {employee.firstName} {employee.lastName} </p>
            <p>Email: {employee.email}</p>
            <p>Location: {employee.locations.filter(location => location).join()}</p>
            <p>Rate/st: {employee.standardRate}</p>
            <p>Rate/ot: {employee.standardRate * 1.5}</p>
            <p>Rate/dt: {employee.standardRate * 2}</p>
            <EditEmployeeModal employee={props.employees}/>
            <button>&times;</button>
          </div>
        )
      })}
    </div>
  )
}

export default EmployeeCard
