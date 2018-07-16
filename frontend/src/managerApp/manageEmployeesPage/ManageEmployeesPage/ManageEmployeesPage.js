import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import Sortbar from '../SortBar/SortBar'
import { dummyData } from '../../../dummyData'

console.log(dummyData)

class ManageEmployeesPage extends React.Component {
  state = {
    employees: dummyData,
    direction: 'AtoZ'
  }

  sortByName = () => {
    this.setState((prevState) => {
      return ({
        employees: prevState.employees.sort((a, b) => {
          if(this.state.direction.lastName === 'AtoZ') {
            if(a.lastName < b.lastName) return -1;
            if(a.lastName > b.lastName) return 1;
            return 0; 
          } else {
            if(b.lastName < a.lastName) return -1;
            if(b.lastName > a.lastName) return 1;
            return 0; 
          }
        }),
        direction: {
          lastName: this.state.direction.lastName === 'AtoZ'
            ? 'ZtoA'
            : 'AtoZ'
          } 
        })
    })
  }

  sortByLocation = () => {
    this.setState((prevState) => {
      return ({
        employees: prevState.employees.sort((a, b) => {
          if(this.state.direction.lastName === 'AtoZ') {
            if(a.lastName < b.lastName) return -1;
            if(a.lastName > b.lastName) return 1;
            return 0; 
          } else {
            if(b.lastName < a.lastName) return -1;
            if(b.lastName > a.lastName) return 1;
            return 0; 
          }
        }),
        direction: {
          lastName: this.state.direction.lastName === 'AtoZ'
            ? 'ZtoA'
            : 'AtoZ'
          } 
        })
    })
  }

  render() {
    return (
      <div>
        <h1>Manage Employees Page</h1>
        <Sortbar />
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByLocation}>Sort by Location</button>
        <EmployeeCard 
          employees={this.state.employees}
        />
      </div>
    )
  }
}

export { ManageEmployeesPage }