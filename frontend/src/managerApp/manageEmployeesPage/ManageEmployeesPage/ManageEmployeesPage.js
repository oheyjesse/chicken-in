import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import AddNewEmployeeModal from '../AddNewEmployeeModal/AddNewEmployeeModal'
import AddNewEmployeeReactModal from '../AddNewEmployeeReactModal/AddNewEmployeeReactModal';

import { dummyData } from '../../../dummyData'

class ManageEmployeesPage extends React.Component {
  state = {
    employees: dummyData,
    direction: 'asce',
    addNewEmployeeForm: undefined
  }

  sortBy = e => {
    const key = e.target.value
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

  openNewEmployeeFormModal = () => {
    this.setState({addNewEmployeeForm: true})
  }

  // TODO: In locations array, null need to be nothing not to show comma
  handleCreate = (e) => {
    e.preventDefault()
    const newEmployee = {
      id: null,
      firstName: e.target[0].name === 'firstName' ? e.target[0].value : null,
      lastName: e.target[1].name === 'lastName' ? e.target[1].value : null,
      email: e.target[2].name === 'email' ? e.target[2].value : null,
      password: null,
      locations: [
        e.target[3].checked ? e.target[3].value : null,
        e.target[4].checked ? e.target[4].value : null,
        e.target[5].checked ? e.target[5].value : null
      ],
      standardRate: e.target[6].name === 'standardRate' ? e.target[6].value : null,
      business: null
    }

    this.setState((prevState) => ({
      employees: [newEmployee, ...prevState.employees],
      addNewEmployeeForm: undefined
    }))
  }

  closeNewEmployeeFormModal = (e) => {
    e.preventDefault()
    this.setState(() => {
      return {
        addNewEmployeeForm: undefined
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Manage Employees Page</h1>
        <button onClick={this.sortBy} value='lastName'>Sort by Name</button>
        <button onClick={this.sortBy} value='locations'>Sort by Location</button>
        <button onClick={this.sortBy} value='standardRate'>Sort by Rate/st</button>
        <button onClick={this.openNewEmployeeFormModal}>Add New Employee</button>
        <AddNewEmployeeReactModal
          addNewEmployeeForm={this.state.addNewEmployeeForm}
          closeNewEmployeeFormModal={this.closeNewEmployeeFormModal}
          handleCreate={this.handleCreate}
          appElement={'body'}/>
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
