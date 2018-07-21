import React from 'react'
import '../ManageEmployeesPage/ManageEmployeesPage.scss'

const EmployeeHeader = (props) => {
  return (
    <div className="employeecard">
      <div className="cardheader">
        <a href="#sort-name" onClick={props.sortBy} value="lastName">Name</a>
      </div>
      <div className="cardheader">Email</div>
      <div className="cardheader">
        <a href="#sort-name" onClick={props.sortBy} value="locations">Location</a>
      </div>
      <div className="cardheader">
        <a href="#sort-name" onClick={props.sortBy} value="standardRate">ST</a>
      </div>
      <div className="cardheader">OT</div>
      <div className="cardheader">DT</div>
      <div className="cardheader"></div>
      <div className="cardheader"></div>
    </div>
  )
}

export default EmployeeHeader
