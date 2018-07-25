import React from 'react'
import axios from 'axios'
import AllEmployees from '../AllEmployees/AllEmployees'
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal'
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal'
import './ManageEmployeesPage.scss'
import { hostURL } from '../../../hostUrl'

class ManageEmployeesPage extends React.Component {
  state = {
    employees: [],
    businessData: {
      locations: [],
      overtimeMultiplier: null,
      doubleTimeMultiplier: null
    },
    employeeEdit: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      locations: [],
      standardRate: null
    },
    direction: 'asce',
    addEmployeeForm: undefined,
    editEmployeeForm: undefined,
    displayLocationCheckbox: false
  }

  componentDidMount = () => {
    this.getAllEmployees()
    this.getBusinessData()
  }

  // Axios
  getAllEmployees = () => {
    axios.get(`http://${hostURL || window.location.host}/api/employees`)
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
    axios.get(`http://${hostURL || window.location.host}/api/settings/business`)
      .then(({ data }) => {
        this.setState(() => {
          return {
            businessData: data
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  createEmployee = employee => {
    axios.post(`http://${hostURL || window.location.host}/api/employees/create`, employee)
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

  editEmployee = (id, employee) => {
    axios.put(`http://${hostURL || window.location.host}/api/employees/${id}`, employee)
      .then(({ data }) => {
        this.updateEmployeeState(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  deleteEmployee = id => {
    axios.delete(`http://${hostURL || window.location.host}/api/employees/${id}`)
      .then(({ data }) => {
        this.setState((prevState) => {
          return {
            employees: prevState.employees.filter((employee) => {
              return employee._id !== id
            })
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Functions
  selectEmployee = e => {
    return this.state.employees.filter(employee => employee._id === e)
  }

  updateEmployeeState = newEmployee => {
    // Create new array
    const updatedEmployees = this.state.employees
    const oldEmployeeIndex = updatedEmployees.findIndex(employee => employee._id === newEmployee._id)
    updatedEmployees[oldEmployeeIndex] = newEmployee

    this.setState(() => {
      return {
        employees: updatedEmployees
      }
    })
  }

  selectLocations = e => {
    const selectedLocations = []
    const locationForm = e.target.location
    for (let i = 0, iLen = this.state.businessData.locations.length; i < iLen; i++) {
      if (locationForm[i].checked) {
        selectedLocations.push(locationForm[i].value)
      }
    }

    return selectedLocations
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

    // Show previous information on input fields
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
        ? e.target[3].value * 100 // doller to cent
        : null,
      locations: this.selectLocations(e)
    }

    // Send to server
    this.createEmployee(newEmployee)

    // Close modal
    this.setState(() => ({
      addEmployeeForm: undefined
    }))
  }

  handleEdit = e => {
    e.preventDefault()

    // Create new object
    const changedEmployee = {
      _id: this.state.employeeEdit.id,
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
      standardRate:
        e.target[3].value !== this.state.employeeEdit.standardRate
          ? e.target[3].value * 100 // doller to cent
          : this.state.employeeEdit.standardRate,
      locations: this.selectLocations(e)
    }

    // Send to server
    this.editEmployee(changedEmployee._id, changedEmployee)

    // Close modal
    this.setState(() => ({
      editEmployeeForm: undefined
    }))
  }

  handleDelete = e => {
    this.deleteEmployee(e)
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
      <div>
        <div className="button-header-container">
          <div className="left-items"></div>
          <div className="right-items">
            <button className="add-button" onClick={this.openAddEmployeeModal}>Add New</button>
          </div>
        </div>
        <div className="admincontainer-emp">
          <AllEmployees
            employees={this.state.employees}
            businessData={this.state.businessData}
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
            businessLocations={this.state.businessData.locations}
          />
        </div>
      </div>
    )
  }
}

export { ManageEmployeesPage }
