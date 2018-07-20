import React from 'react'
import AllEmployees from '../AllEmployees/AllEmployees'
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'

import { dummyData } from '../../../dummyData'

class ManageEmployeesPage extends React.Component {
  state = {
    employees: dummyData,
    direction: 'asce',
    addEmployeeForm: undefined,
    editEmployeeForm: undefined,
    employeeEdit: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      locations: [],
      standardRate: null,
      password: null
    }
  }

  sortBy = e => {
    const key = e.target.value
    this.setState((prevState) => {
      return {
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
        direction: this.state.direction === 'asce' ? 'desc' : 'asce'
      }
    })
  }

  openAddEmployeeModal = () => {
    this.setState({ addEmployeeForm: true })
  }

  closeAddEmployeeModal = e => {
    e.preventDefault()
    this.setState(() => {
      return {
        addEmployeeForm: undefined
      }
    })
  }

  openEditEmployeeModal = e => {
    const selectEmployee = this.state.employees.filter(
      (employee) => employee.id === e
    )
    
    this.setState((prevState) => ({
      employeeEdit: {
        id: selectEmployee[0].id,
        firstName: selectEmployee[0].firstName,
        lastName: selectEmployee[0].lastName,
        email: selectEmployee[0].email,
        locations: selectEmployee[0].locations,
        standardRate: selectEmployee[0].standardRate,
        password: selectEmployee[0].password
      },
      editEmployeeForm: true
    }))
  }

  closeEditEmployeeModal = e => {
    e.preventDefault()
    this.setState(() => {
      return {
        editEmployeeForm: undefined
      }
    })
  }

  handleCreate = e => {
    e.preventDefault()

    const checkLocation = (location) => {
      if (location.checked) {
        return location.value
      } else {
        return null
      }
    }

    const newEmployee = {
      id: null,
      firstName: e.target[0].name === 'firstName'
        ? e.target[0].value
        : null,
      lastName: e.target[1].name === 'lastName'
        ? e.target[1].value
        : null,
      email: e.target[2].name === 'email'
        ? e.target[2].value
        : null,
      password: 'defaultpassword',
      locations: [checkLocation(e.target[3]), checkLocation(e.target[4]), checkLocation(e.target[5])],
      standardRate: e.target[6].name === 'standardRate'
        ? e.target[6].value
        : null,
      business: null
    }

    this.setState((prevState) => ({
      employees: [newEmployee, ...prevState.employees],
      addEmployeeForm: undefined
    }))
  }

  handleEdit = e => {
    e.preventDefault()

    const newLocation = (location) => {
      if (location.checked) {
        return location.value
      } else {
        return null
      }
    }

    const changedEmployee = {
      id: this.state.employeeEdit.id,
      firstName:
        e.target[0].value !== this.state.employeeEdit.firstName
          ? e.target[0].value
          : this.state.employeeEdit.firstName,
      lastName:
        e.target[1].value !== this.state.employeeEdit.lastName
          ? e.target[1].value
          : this.state.employeeEdit.lastName,
      email:
        e.target[2].value !== this.state.employeeEdit.email
          ? e.target[2].value
          : this.state.employeeEdit.email,
      password: this.state.employeeEdit.password,
      locations: [newLocation(e.target[3]), newLocation(e.target[4]), newLocation(e.target[5])],
      standardRate:
        e.target[6].value !== this.state.employeeEdit.standardRate
          ? e.target[6].value
          : this.state.employeeEdit.standardRate
    }

    const uppdatedEmployees = this.state.employees
    const oldEmployeeIndex = this.state.employees.findIndex(employee => employee.id === changedEmployee.id)
    uppdatedEmployees[oldEmployeeIndex] = changedEmployee

    this.setState(() => ({
      employees: uppdatedEmployees,
      editEmployeeForm: undefined
    }))
  }

  render () {
    return (
      <div>
        <h1>Manage Employees Page</h1>
        <button onClick={this.sortBy} value="lastName">
          Sort by Name
        </button>
        <button onClick={this.sortBy} value="locations">
          Sort by Location
        </button>
        <button onClick={this.sortBy} value="standardRate">
          Sort by Rate/st
        </button>
        <button onClick={this.openAddEmployeeModal}>Add New Employee</button>
        <AddEmployeeModal
          addEmployeeForm={this.state.addEmployeeForm}
          closeAddEmployeeModal={this.closeAddEmployeeModal}
          handleCreate={this.handleCreate}
          appElement={'body'}
        />
        <AllEmployees
          employees={this.state.employees}
          openEditEmployeeModal={this.openEditEmployeeModal}
        />
        <EditEmployeeModal
          editEmployeeForm={this.state.editEmployeeForm}
          employeeEdit={this.state.employeeEdit}
          handleEdit={this.handleEdit}
          closeEditEmployeeModal={this.closeEditEmployeeModal}
        />
      </div>
    )
  }
}

export { ManageEmployeesPage }
