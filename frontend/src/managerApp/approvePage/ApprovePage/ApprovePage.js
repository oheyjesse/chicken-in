import React from 'react'
import moment from 'moment'
import axios from 'axios'
import './ApprovePage.scss'

// Components
import { Button } from '../../router/Button/Button' // Shared Components
import { AdminContainer } from '../AdminContainer/AdminContainer'
import { Paginator } from '../Paginator/Paginator'

// Dummy Data
import { dummyBusiness, dummyEmployee } from '../../../dummyData'

const URI = 'http://localhost:3000'

class ApprovePage extends React.Component {
  state = {
    businessData: [dummyBusiness[0]],
    employeeData: dummyEmployee,
    employeeList: null,
    pendingShifts: null,
    filteredShifts: null,
    pagination: {
      weekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
      weekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days')
    },
    filters: {
      locations: null,
      employees: null
    }
  }

  componentDidMount = () => {
    this.getShifts()
    this.getBusinessData()
    this.getEmployeeData()
    // this.getBusinessData(URI + '/api/settings/business') //TODO: Waiting on settings/business integration
  }

  componentDidUpdate (prevState) {
    // only update chart if the data has changed
    // if (prevState.filters !== this.state.filters) {
    //   console.log('New State Filter Locations:' + this.state.filters.locations)
    // }

    // if (prevState.filteredShifts !== this.state.filteredShifts) {
    //   console.log('FilterShifts StateChange: ' + this.state.filteredShifts)
    // }
  }

  getShifts = () => {
    axios.get(URI + '/api/shifts/pending')
      .then(({ data }) => {
        this.setState(() => {
          return {
            pendingShifts: data
          }
        })
      })
      .then(() => {
        this.filterShifts(this.state.pendingShifts, this.state.filters)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getBusinessData = () => {
    axios.get(URI + '/api/settings/business')
      .then(({ data }) => {
        this.setState(() => {
          return {
            businessData: data[0]
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getEmployeeData = (uri) => {
    axios.get(URI + '/api/employees')
      .then(({ data }) => {
        this.setState(() => {
          return {
            employeeData: data
          }
        })
        console.log('getEmployeeData: ' + data)
      })
      .then(() => {
        this.createEmployeeList()
      })
      .catch(err => {
        console.log(err)
      })
  }

  createEmployeeList = () => {
    const employeeList = this.state.employeeData.map(employee => {
      return (`${employee.firstName} ${employee.lastName}`)
    })

    this.setState(() => {
      return {
        employeeList: employeeList
      }
    })
    console.log('Employee List: ' + employeeList)
  }

  updateShift = (event) => {
    const shiftID = event.target.getAttribute('shiftid')
    const status = event.target.getAttribute('status')

    if (status === 'approved') {
      this.approveShift(shiftID)
    } else if (status === 'rejected') {
      this.rejectShift(shiftID)
    } else {
      console.log(`Error: ${status}`)
    }
  }

  approveShift = (shiftID) => {
    axios.put(URI + '/api/shifts/approve/' + shiftID)
      .then(() => {
        this.setState(prevState => {
          return {
            pendingShifts: prevState.pendingShifts.filter(shift => {
              return (shift._id !== shiftID)
            })
          }
        })
        console.log(`Shift: ${shiftID} Approved`)
      })
  }

  rejectShift = (shiftID) => {
    axios.put(URI + '/api/shifts/reject/' + shiftID)
      .then(() => {
        this.setState(prevState => {
          return {
            pendingShifts: prevState.pendingShifts.filter(shift => {
              return (shift._id !== shiftID)
            })
          }
        })
        console.log(`Shift: ${shiftID} Rejected`)
      })
  }

  approveAllShifts = () => {
    axios.put(URI + '/api/shifts/approveAll/')
      .then(() => {
        this.setState(prevState => {
          return {
            pendingShifts: []
          }
        })
        console.log('All Shifts Approved')
      })
  }

  paginate = (event) => {
    const direction = event.target.value

    if (direction === 'forward') {
      this.setState((prevState) => {
        return {
          pagination: {
            weekStart: prevState.pagination.weekStart.add(7, 'days'),
            weekEnd: prevState.pagination.weekEnd.add(7, 'days')
          }
        }
      })
    } else if (direction === 'backward') {
      this.setState((prevState) => {
        return {
          pagination: {
            weekStart: prevState.pagination.weekStart.subtract(7, 'days'),
            weekEnd: prevState.pagination.weekEnd.subtract(7, 'days')
          }
        }
      })
    }
  }

  filterShifts = (shifts, filters) => {
    // console.log('Filters: ' + filters.locations)

    let newFilteredShifts = shifts.filter(shift => {
      return (
        (!filters.locations ? true : filters.locations.includes(shift.location)) &&
        (!filters.employees ? true : filters.employees.includes(`${shift.employee.firstName} ${shift.employee.lastName}`))
      )
    })

    this.setState(prevState => {
      return {
        filteredShifts: newFilteredShifts
      }
    })
  }

  filterLocationUpdate = (event) => {
    let location = event.target.value
    console.log('filterLocationUpdate running for:' + location)

    let filters = {
      locations: this.state.filters.locations,
      employees: this.state.filters.employees
    }

    if (location === 'All Locations') {
      filters.locations = this.state.businessData.locations
    } else {
      filters.locations = [ location ]
    }

    this.setState(() => {
      return {
        filters: filters
      }
    })

    this.filterShifts(this.state.pendingShifts, filters)
  }

  filterEmployeeUpdate = (event) => {
    let employee = event.target.value
    console.log('filterEmployeeUpdate running for:' + employee)

    let filters = {
      locations: this.state.filters.locations,
      employees: this.state.filters.employees
    }

    if (employee === 'All Employees') {
      filters.employees = this.state.employeeData.employees
    } else {
      filters.employees = [ employee ]
    }

    this.setState(() => {
      return {
        filters: filters
      }
    })

    this.filterShifts(this.state.pendingShifts, filters)
  }

  render () {
    return (
      <div>
        <h1>Approve Timesheets Page</h1>
        <br/>

        <select onChange={this.filterLocationUpdate}>
          <option defaultValue="All Locations">All Locations</option>
          { !this.state.businessData.locations
            ? <option value="" key="">Loading</option>
            : this.state.businessData.locations.map((location, index) => {
              return (<option value={location} key={index}>{location}</option>)
            })
          }
        </select>

        <select onChange={this.filterEmployeeUpdate}>
          <option defaultValue="All Employees">All Employees</option>
          { !this.state.employeeList
            ? <option value="" key="">Loading</option>
            : this.state.employeeList.map((employee, index) => {
              return (<option value={employee} key={index}>{employee}</option>)
            })
          }
        </select>

        <Paginator pagination={this.state.pagination} handleClick={this.paginate}/>
        <br/>

        <Button handleClick={this.approveAllShifts}>Approve All</Button>

        { this.state.filteredShifts === null
          ? 'Loading Shifts'
          : <AdminContainer
            shifts={this.state.filteredShifts.filter((shift) => {
              return (moment(shift.date) >= this.state.pagination.weekStart && moment(shift.date) < this.state.pagination.weekEnd)
            })}
            updateShift={this.updateShift}/>
        }
        <br/>

        <Paginator pagination={this.state.pagination} handleClick={this.paginate}/>
      </div>
    )
  }
}

export { ApprovePage }
