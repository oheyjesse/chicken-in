import React from 'react'
import moment from 'moment'
import axios from 'axios'
import './ApprovePage.scss'

// Components
import { Button } from '../../router/Button/Button' // Shared Components
import { AdminContainer } from '../AdminContainer/AdminContainer'
import { Paginator } from '../Paginator/Paginator'
import { Filters } from '../Filters/Filters'

// Dummy Data
import { dummyBusiness, dummyEmployee } from '../../../dummyData'

const URI = 'http://localhost:3000'

class ApprovePage extends React.Component {
  state = {
    navShown: false,
    businessData: [dummyBusiness[0]],
    employeeData: dummyEmployee,
    employeeList: null,
    pendingShifts: null,
    pagination: {
      weekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
      weekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days')
    },
    sortOrder: 'ascending',
    filters: {
      locations: [],
      employees: []
    }
  }

  componentDidMount = () => {
    this.getShifts()
    this.getBusinessData()
    this.getEmployeeData()
  }

  // ---------------------------------------------------------- GET BACKEND DATA

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
        this.sortOnce('date')
      })
      .catch(err => {
        console.log(err)
        this.setState(() => {
          return {
            pendingShifts: []
          }
        })
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
      return (employee.fullName)
    })

    this.setState(() => {
      return {
        employeeList: employeeList
      }
    })
  }

  // ----------------------------------------------------------- UPDATING SHIFTS
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
      .catch(err => {
        console.log(err)
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
      .catch(err => {
        console.log(err)
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
      .catch(err => {
        console.log(err)
      })
  }

  // ---------------------------------------------------------------- PAGINATION
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

  // ------------------------------------------------------------------- SORTING
  sortBy = e => {
    e.preventDefault()
    const key = e.target.getAttribute('value')
    console.log(key)

    if (key === 'fullName') {
      this.setState((prevState) => {
        return {
          pendingShifts: prevState.pendingShifts.sort((a, b) => {
            if (this.state.sortOrder === 'ascending') {
              if (a.employee[key] < b.employee[key]) return -1
              if (a.employee[key] > b.employee[key]) return 1
              return 0
            } else {
              if (b.employee[key] < a.employee[key]) return -1
              if (b.employee[key] > a.employee[key]) return 1
              return 0
            }
          }),
          sortOrder: this.state.sortOrder === 'ascending' ? 'descending' : 'ascending'
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          pendingShifts: prevState.pendingShifts.sort((a, b) => {
            if (this.state.sortOrder === 'ascending') {
              if (a[key] < b[key]) return -1
              if (a[key] > b[key]) return 1
              return 0
            } else {
              if (b[key] < a[key]) return -1
              if (b[key] > a[key]) return 1
              return 0
            }
          }),
          sortOrder: this.state.sortOrder === 'ascending' ? 'descending' : 'ascending'
        }
      })
    }
  }

  sortOnce = (key) => {
    this.setState((prevState) => {
      return {
        pendingShifts: prevState.pendingShifts.sort((a, b) => {
          if (this.state.sortOrder === 'ascending') {
            if (a[key] < b[key]) return -1
            if (a[key] > b[key]) return 1
            return 0
          } else {
            if (b[key] < a[key]) return -1
            if (b[key] > a[key]) return 1
            return 0
          }
        }),
        sortOrder: this.state.sortOrder === 'ascending' ? 'descending' : 'ascending'
      }
    })
  }

  // ----------------------------------------------------------------- FILTERING
  // filterShifts = (shifts, filters) => {
  //   let newFilteredShifts = shifts.filter(shift => {
  //     return (
  //       true
  //     )
  //   })

  //   this.setState(prevState => {
  //     return {
  //       pendingShifts: newFilteredShifts
  //     }
  //   })
  // }

  // filterLocationUpdate = (event) => {
  //   let location = event.target.value

  //   let filters = {
  //     locations: this.state.filters.locations,
  //     employees: this.state.filters.employees
  //   }

  //   if (location === 'All Locations') {
  //     filters.locations = this.state.businessData.locations
  //   } else {
  //     filters.locations = [ location ]
  //   }

  //   this.setState(() => {
  //     return {
  //       filters: filters
  //     }
  //   })

  //   this.filterShifts(this.state.pendingShifts, filters)
  // }

  // filterEmployeeUpdate = (event) => {
  //   let employee = event.target.value

  //   let filters = {
  //     locations: this.state.filters.locations,
  //     employees: this.state.filters.employees
  //   }

  //   if (employee === 'All Employees') {
  //     filters.employees = this.state.employeeData.employees
  //   } else {
  //     filters.employees = [ employee ]
  //   }

  //   this.setState(() => {
  //     return {
  //       filters: filters
  //     }
  //   })

  //   this.filterShifts(this.state.pendingShifts, filters)
  // }

  // ------------------------------------------------ NEW FILTERS (thanks maxi!)
  toggleEmployeeFilter = (event) => {
    const filterToggle = event.target.getAttribute('value')

    if (this.state.filters.employees.includes(filterToggle)) {      
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            employees: prevState.filters.employees.filter((fullName) => {
              return fullName !== filterToggle
            })
          }
        }
      })
    } else {      
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            employees: prevState.filters.employees.concat(filterToggle)
          }
        }
      })
    }
  }

  toggleLocationFilter = (event) => {
    const filterToggle = event.target.getAttribute('value')

    if (this.state.filters.locations.includes(filterToggle)) {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            locations: prevState.filters.locations.filter((location) => {
              return location !== filterToggle
            })
          }
        }
      })
    } else {      
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            locations: prevState.filters.locations.concat(filterToggle)
          }
        }
      })
    }
  }

  // -- Just moving this out of the main render()
  runFilters = (shifts) => {
    return shifts.filter(shift => {
      return (
        (this.state.filters.locations.length === 0 ? true : this.state.filters.locations.includes(shift.location)) &&
        (this.state.filters.employees.length === 0 ? true : this.state.filters.employees.includes(shift.employee.fullName)) &&
        (moment(shift.date) >= this.state.pagination.weekStart && moment(shift.date) < this.state.pagination.weekEnd)
      )
    })
  }

  // -------------------------------------------------------------------- RENDER
  render () {
    if (this.state.pendingShifts) {
      return (
        <div>
          <div className="button-header-container">
            <div className="left-items">
              {/* <select onChange={this.filterLocationUpdate}>
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
              </select> */}

              <Filters
                toggleEmployeeFilter={this.toggleEmployeeFilter}
                toggleLocationFilter={this.toggleLocationFilter}
                employeeList={!this.state.employeeList ? [] : this.state.employeeList.sort()}
                locationList={!this.state.businessData.locations ? [] : this.state.businessData.locations.sort()}
              />

            </div>
            <div className="right-items">
              <Button customClass="green" handleClick={this.approveAllShifts}>Approve All</Button>
            </div>
          </div>

          <Paginator pagination={this.state.pagination} handleClick={this.paginate}/>
          <br/>
          
          {!this.state.pendingShifts
            ? 'Filtering...'
            : <AdminContainer
              shifts={this.runFilters(this.state.pendingShifts)}
              updateShift={this.updateShift}
              sortBy={this.sortBy}
            />}

          <br/>

          <Paginator pagination={this.state.pagination} handleClick={this.paginate}/>
        </div>
      )
    } else {
      return (
        <div className="loader"></div>
      )
    }
  }
}

export { ApprovePage }
