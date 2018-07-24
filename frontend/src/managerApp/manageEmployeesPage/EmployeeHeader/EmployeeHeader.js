import React from 'react'
import '../ManageEmployeesPage/ManageEmployeesPage.scss'

const EmployeeHeader = (props) => {
  return (
    <div className="employeecard employee-cardheader">
      <div onClick={props.sortBy} value="lastName">Name</div>
      <div onClick={props.sortBy} value="email">Email</div>
      <div onClick={props.sortBy} value="locations">Location</div>
      <div onClick={props.sortBy} value="standardRate">ST</div>
      <div onClick={props.sortBy} value="standardRate">OT</div>
      <div onClick={props.sortBy} value="standardRate">DT</div>
      <div></div>
    </div>
  )
}

export default EmployeeHeader
