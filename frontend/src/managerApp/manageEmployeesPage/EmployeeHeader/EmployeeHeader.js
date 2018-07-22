import React from 'react'
import '../ManageEmployeesPage/ManageEmployeesPage.scss'

const EmployeeHeader = (props) => {
  return (
    <div className="employeecard">
      <div className="employee-cardheader">
        <a href="#sort-name" onClick={props.sortBy} value="lastName">Name</a>
      </div>
      <div className="employee-cardheader">Email</div>
      <div className="employee-cardheader">
        <a href="#sort-name" onClick={props.sortBy} value="locations">Location</a>
      </div>
      <div className="employee-cardheader">
        <a href="#sort-name" onClick={props.sortBy} value="standardRate">ST</a>
      </div>
      <div className="employee-cardheader">OT</div>
      <div className="employee-cardheader">DT</div>
      <div className="employee-cardheader"></div>
      <div className="employee-cardheader"></div>
    </div>
  )
}

export default EmployeeHeader
