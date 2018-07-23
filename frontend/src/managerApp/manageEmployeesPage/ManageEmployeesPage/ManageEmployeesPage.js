import React from 'react'
import axios from 'axios'
import AllEmployees from '../AllEmployees/AllEmployees'
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'
import './ManageEmployeesPage.scss'

import { dummyData } from '../../../dummyData'

class ManageEmployeesPage extends React.Component {
  state = {
    employees: [],
    businessData: {
      locations: []
    },
    direction: 'asce',
    addEmployeeForm: undefined,
    editEmployeeForm: undefined,
    employeeEdit: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      locations: [],
      standardRate: null
    },
    displayLocationCheckbox: false
  }

  componentDidMount = () => {
    this.getAllEmployees()
    this.getBusinessData()
  }

  getAllEmployees = () => {
    axios.get('http://localhost:3000/api/employees')
      .then(({ data }) => {
        this.setState(() => {
          return {
            employees: data
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getBusinessData = () => {
    axios.get('http://localhost:3000/api/settings/business')
      .then(({ data }) => {
        this.setState(() => {
          return {
            businessData: data[0]
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  createEmployee = (employee) => {
    axios.post('http://localhost:3000/api/employees/create', employee)
      .then(({ data }) => {
        this.setState((prevState) => {
          return {
            employees: [data, ...prevState.employees]
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  editEmployee = (id, employees) => {
    axios.put(`http://localhost:3000/api/employees/${id}`, employees)
      .then(() => {
        this.setState(() => {
          return {
            employees: employees
          }
        })
      })
    // TODO: axios put /api/employees/:id
    // TODO: get employee from model
    // TODO: send back edited employee
    // TODO: update state edited employee
    // TODO: handle errors
  }

  deleteEmployee = (id) => {
    // TODO: axios delete /api/employees/:id
    // TODO: update state employees
    // TODO: handle errors
  }

  // Functions
  selectEmployee = (e) => {
    return this.state.employees.filter(employee => employee._id === e)
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
        id: selectedEmployee[0]._id,
        firstName: selectedEmployee[0].firstName,
        lastName: selectedEmployee[0].lastName,
        email: selectedEmployee[0].email,
        locations: selectedEmployee[0].locations,
        standardRate: selectedEmployee[0].standardRate
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

    const selectedlocations = []
    const locationForm = e.target.location
    for (let i = 0, iLen = this.state.businessData.locations.length; i < iLen; i++) {
      if (locationForm[i].checked) {
        selectedlocations.push(locationForm[i].value)
      }
    }

    // Create new object
    const newEmployee = {
      firstName: e.target[0].name === 'firstName'
        ? e.target[0].value
        : null,
      lastName: e.target[1].name === 'lastName'
        ? e.target[1].value
        : null,
      email: e.target[2].name === 'email'
        ? e.target[2].value
        : null,
      standardRate: e.target[3].name === 'standardRate'
        ? e.target[3].value
        : null,
      locations: selectedlocations
    }

    this.createEmployee(newEmployee)

    // Add above in employees array
    this.setState(() => ({
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
      // password: this.state.employeeEdit.password,
      standardRate:
        e.target[3].value !== this.state.employeeEdit.standardRate
          ? e.target[3].value
          : this.state.employeeEdit.standardRate,
      locations: [this.checkLocation(e.target[4]), this.checkLocation(e.target[5]), this.checkLocation(e.target[6])]
    }

    // Create new array
    const updatedEmployees = this.state.employees
    const oldEmployeeIndex = this.state.employees.findIndex(employee => employee.id === changedEmployee.id)
    updatedEmployees[oldEmployeeIndex] = changedEmployee

    this.editEmployee(changedEmployee.id, updatedEmployees)

    // Change employees array
    this.setState(() => ({
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

  toggleLocationCheckbox = () => {
    this.setState((prevState) => {
      return {
        displayLocationCheckbox: !prevState.displayLocationCheckbox
      }
    })
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
          handleCreate={this.handleCreate}
          toggleLocationCheckbox={this.toggleLocationCheckbox}
          displayLocationCheckbox={this.state.displayLocationCheckbox}
          closeAddEmployeeModal={this.closeAddEmployeeModal}
          businessLocations={this.state.businessData.locations}
        />
        <EditEmployeeModal
          editEmployeeForm={this.state.editEmployeeForm}
          employeeEdit={this.state.employeeEdit}
          handleEdit={this.handleEdit}
          toggleLocationCheckbox={this.toggleLocationCheckbox}
          displayLocationCheckbox={this.state.displayLocationCheckbox}
          closeEditEmployeeModal={this.closeEditEmployeeModal}
        />
      </div>
    )
  }
}

export { ManageEmployeesPage }
