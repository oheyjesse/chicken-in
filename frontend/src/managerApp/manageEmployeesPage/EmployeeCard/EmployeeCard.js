import React from 'react'

const EmployeeCard = (props) => {
  return (
    <div>
      <h3>Employee Card</h3>
      {props.employees.map(employee => {
        return (
          <div key={employee.id}>
            <p>Name: `{employee.firstName} {employee.lastName}` </p>
            <p>Email: {employee.email}</p>
            <p>Location: {employee.location}</p>
            <p>Rate/st: {employee.standardRate}</p>
            <p>Rate/ot: {employee.standardRate * 1.5}</p> // TODO: replace number with 'business.overtimeMultiplier'
            <p>Rate/dt: {employee.standardRate * 2}</p>  // TODO: replace number with 'business.doubletimeMultiplier'
            <button>Edit</button>
            <button>Remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default EmployeeCard
