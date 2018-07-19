import React from 'react'
import AllEmployees from '../AllEmployees/AllEmployees'
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal';

import { dummyData } from '../../../dummyData'

class ManageEmployeesPage extends React.Component {
  state = {
    employees: dummyData,
    direction: 'asce',
    addEmployeeForm: undefined,
    editEmployeeForm: undefined,
    employeeEdit: {
      firstName: 'xxx',
      lastName: 'xxx',
      email: 'xxx',
      locations: ['Springvale', 'Hobart', 'Sunshine'],
      standardRate: 123
    }
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

  openAddEmployeeModal = () => {
    this.setState({addEmployeeForm: true})
  }

  openEditEmployeeModal = () => {
    this.setState({editEmployeeForm: true})
  }

  closeAddEmployeeModal = (e) => {
    e.preventDefault()
    this.setState(() => {
      return {
        addEmployeeForm: undefined
      }
    })
  }

  closeEditEmployeeModal = (e) => {
    e.preventDefault()
    this.setState(() => {
      return {
        editEmployeeForm: undefined
      }
    })
  }

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
      addEmployeeForm: undefined
    }))
  }

  handleEditEmployee = (e) => {
    const selectEmployee = this.state.employees.filter(employee => employee.id === e)
    console.log(selectEmployee[0])
    this.setState((prevState) => ({
      employeeEdit: {
        firstName: selectEmployee[0].firstName,
        lastName: selectEmployee[0].lastName,
        email: selectEmployee[0].email,
        locations: selectEmployee[0].locations,
        standardRate: selectEmployee[0].standardRate
      },
      editEmployeeForm: true
    })
    )
  }

  render () {
    return (
      <div>
        <h1>Manage Employees Page</h1>
        <button onClick={this.sortBy} value='lastName'>Sort by Name</button>
        <button onClick={this.sortBy} value='locations'>Sort by Location</button>
        <button onClick={this.sortBy} value='standardRate'>Sort by Rate/st</button>
        <button onClick={this.openAddEmployeeModal}>Add New Employee</button>
        <AddEmployeeModal
          addEmployeeForm={this.state.addEmployeeForm}
          closeAddEmployeeModal={this.closeAddEmployeeModal}
          handleCreate={this.handleCreate}
          appElement={'body'}/>
        <AllEmployees
          employees={this.state.employees}
          openEditEmployeeModal={this.openEditEmployeeModal}
          closeEditEmployeeModal={this.closeEditEmployeeModal}
          editEmployeeForm={this.state.editEmployeeForm}
          handleEditEmployee={this.handleEditEmployee}
        />
        <EditEmployeeModal
          editEmployeeForm={this.state.editEmployeeForm}
          employeeEdit={this.state.employeeEdit}
          closeEditEmployeeModal={this.closeEditEmployeeModal}
        />
      </div>
    )
  }
}

export { ManageEmployeesPage }
