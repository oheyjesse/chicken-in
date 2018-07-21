import React from 'react'
import AllEmployees from '../AllEmployees/AllEmployees'
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'
import './ManageEmployeesPage.scss'

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

  // Functions
  selectEmployee = (e) => {
    return this.state.employees.filter(employee => employee.id === e)
  }
  
  checkLocation = (location) => {
    if (location.checked) {
      return location.value
    } else {
      return null
    }
  }

  // Handlers
  sortBy = e => {
    e.preventDefault()
    const key = e.target.getAttribute('value')
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
    const selectedEmployee = this.selectEmployee(e)

    // Show previous information on inputs
    this.setState((prevState) => ({
      employeeEdit: {
        id: selectedEmployee[0].id,
        firstName: selectedEmployee[0].firstName,
        lastName: selectedEmployee[0].lastName,
        email: selectedEmployee[0].email,
        locations: selectedEmployee[0].locations,
        standardRate: selectedEmployee[0].standardRate,
        password: selectedEmployee[0].password
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

    // Create new object
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
      locations: [this.checkLocation(e.target[3]), this.checkLocation(e.target[4]), this.checkLocation(e.target[5])],
      standardRate: e.target[6].name === 'standardRate'
        ? e.target[6].value
        : null,
      business: null
    }

    // Add above in employees array
    this.setState((prevState) => ({
      employees: [newEmployee, ...prevState.employees],
      addEmployeeForm: undefined
    }))
  }

  handleEdit = e => {
    e.preventDefault()

    // Create new object
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
      locations: [this.checkLocation(e.target[3]), this.checkLocation(e.target[4]), this.checkLocation(e.target[5])],
      standardRate:
        e.target[6].value !== this.state.employeeEdit.standardRate
          ? e.target[6].value
          : this.state.employeeEdit.standardRate
    }

    // Create new array
    const uppdatedEmployees = this.state.employees
    const oldEmployeeIndex = this.state.employees.findIndex(employee => employee.id === changedEmployee.id)
    uppdatedEmployees[oldEmployeeIndex] = changedEmployee

    // Change employees array
    this.setState(() => ({
      employees: uppdatedEmployees,
      editEmployeeForm: undefined
    }))
  }

  handleDelete = e => {
    // Create new array
    const afterDeletedEmployee = [...this.state.employees]
    const selectedEmployee = this.selectEmployee(e)
    const deletedEmployeeIndex = this.state.employees.findIndex(employee => employee.id === selectedEmployee[0].id)
    afterDeletedEmployee.splice(deletedEmployeeIndex, 1)

    // Change state
    this.setState({employees: afterDeletedEmployee})
  }

  render () {
    return (
      <div className="admincontainer">
        <button className="add-button" onClick={this.openAddEmployeeModal}>Add New</button>
        <AllEmployees
          employees={this.state.employees}
          openEditEmployeeModal={this.openEditEmployeeModal}
          handleDelete={this.handleDelete}
          sortBy={this.sortBy}
        />
        <AddEmployeeModal
          addEmployeeForm={this.state.addEmployeeForm}
          closeAddEmployeeModal={this.closeAddEmployeeModal}
          handleCreate={this.handleCreate}
          appElement={'body'}
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
