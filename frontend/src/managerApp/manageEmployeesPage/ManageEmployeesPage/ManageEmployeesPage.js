import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import Sortbar from '../SortBar/SortBar'
import { dummyData } from '../../../dummyData'

console.log(dummyData)

class ManageEmployeesPage extends React.Component {
  state = {
    employees: dummyData
  }

  render() {
    return (
      <div>
        <h1>Manage Employees Page</h1>
        <Sortbar />
        <EmployeeCard employees={this.state.employees}/>
      </div>
    )
  }
}

export { ManageEmployeesPage }