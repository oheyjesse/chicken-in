import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import AddNewEmployeeModal from '../AddNewEmployeeModal/AddNewEmployeeModal'

import { dummyData } from '../../../dummyData'

class ManageEmployeesPage extends React.Component {
  state = {
    employees: dummyData,
    direction: 'asce'
  }

  sortBy = (event) => {
    const key = event.target.value
    this.setState((prevState) => {
      return ({
        employees: prevState.employees.sort((a, b) => {
          if (this.state.direction === 'asce') {
            if (a[key] < b[key]) return -1
            if (a[key] > b[key]) return 1
            return 0
          } else {
            if (b[key] < a[key]) return -1
            if (b[key] > a[key]) return 1
            return 0 
          }
        }),
        direction: this.state.direction === 'asce'
            ? 'desc'
            : 'asce' 
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Manage Employees Page</h1>
        <button onClick={this.sortBy} value='lastName'>Sort by Name</button>
        <button onClick={this.sortBy} value='locations'>Sort by Location</button>
        <button onClick={this.sortBy} value='standardRate'>Sort by Rate/st</button>
          <AddNewEmployeeModal
          />
          <EmployeeCard
            employees={this.state.employees}
          />
      </div>
    )
  }
}

export { ManageEmployeesPage }