import React from 'react'
import moment from 'moment'
import { hostURL } from '../../../hostUrl'
import { dummyShifts } from '../../../dummyData'
import { Totals } from '../Totals/Totals'
import { Filters } from '../Filters/Filters'
import { AllShifts } from '../AllShifts/AllShifts'
import './ReportPage.scss'
const axios = require('axios')

class ReportPage extends React.Component {
  state = {
    allShifts: [],
    direction: 'asce',
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days'),
    filters: {
      employees: [],
      locations: [],
      status: []
    },
    mounted: false
  }

  async componentDidMount () {
    try {
      // 1. Get data from server
      const response = await axios.get(`http://${hostURL || window.location.host}/api/shifts/all`)
      const allShifts = response.data

      // 2. Set state of component
      this.setState(() => {
        return {
          allShifts: allShifts,
          filters: {
            employees: [...new Set(allShifts.map(shift => shift.employee.lastName))],
            locations: [...new Set(allShifts.map(shift => shift.location))],
            status: [...new Set(allShifts.map(shift => shift.status))]
          },
          mounted: true
        }
      })
    } catch (error) {
      this.setState(() => {
        return {
          allShifts: dummyShifts,
          filters: {
            employees: [...new Set(dummyShifts.map(shift => shift.employee.lastName))],
            locations: [...new Set(dummyShifts.map(shift => shift.location))],
            status: [...new Set(dummyShifts.map(shift => shift.status))]
          },
          mounted: true
        }
      })
    }
  }

  // Function to sort the shifts by the selected sortBy
  sortBy = (event) => {
    let key = event.target.value
    if (key !== 'lastName') {
      this.setState((prevState) => {
        return ({
          allShifts: prevState.allShifts.sort((a, b) => {
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
    } else {
      this.setState((prevState) => {
        return ({
          allShifts: prevState.allShifts.sort((a, b) => {
            if (this.state.direction === 'asce') {
              if (a.employee.lastName < b.employee.lastName) return -1
              if (a.employee.lastName > b.employee.lastName) return 1
              return 0
            } else {
              if (b.employee.lastName < a.employee.lastName) return -1
              if (b.employee.lastName > a.employee.lastName) return 1
              return 0
            }
          }),
          direction: this.state.direction === 'asce'
            ? 'desc'
            : 'asce'
        })
      })
    }
  }

  // Function to move the pagination range backwards by one week
  goBackOneWeek = () => {
    this.setState((prevState) => {
      return {
        paginationWeekStart: prevState.paginationWeekStart.subtract(7, 'days'),
        paginationWeekEnd: prevState.paginationWeekEnd.subtract(7, 'days')
      }
    }) 
  }

  // Function to move the pagination range forwards by one week
  goForwardOneWeek = () => {
    this.setState((prevState) => {
      return {
        paginationWeekStart: prevState.paginationWeekStart.add(7, 'days'),
        paginationWeekEnd: prevState.paginationWeekEnd.add(7, 'days')
      }
    }) 
  }

  // Function for adding and removing names from state.filters.employees
  toggleNameFilter = (event) => {
    const toggleName = event.target.name
    if (this.state.filters.employees.includes(toggleName)) {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            employees: prevState.filters.employees.filter((name) => {
              return name !== toggleName
            })
          }
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            employees: prevState.filters.employees.concat(toggleName)
          }
        }
      })
    }
  }

  // Function for adding and removing locations from state.filters.locations
  toggleLocationFilter = (event) => {
    const toggleName = event.target.name
    if (this.state.filters.locations.includes(toggleName)) {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            locations: prevState.filters.locations.filter((name) => {
              return name !== toggleName
            })
          }
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            locations: prevState.filters.locations.concat(toggleName)
          }
        }
      })
    }
  }

  // Function for adding and removing statuses from state.filters.status
  toggleStatusFilter = (event) => {
    const toggleName = event.target.name
    if (this.state.filters.status.includes(toggleName)) {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            status: prevState.filters.status.filter((name) => {
              return name !== toggleName
            })
          }
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          filters: {
            ...prevState.filters,
            status: prevState.filters.status.concat(toggleName)
          }
        }
      })
    }
  }

  render () {
    if (this.state.mounted) {
      return (
        <div className='ReportPage'>
          {/* Area to show totals, using the same filters as the AllShifts component below */}
          <Totals shifts={this.state.allShifts.filter((shift) => {
            const dateFilter = moment(shift.date) >= this.state.paginationWeekStart && moment(shift.date) < this.state.paginationWeekEnd
            const employeeFilter = this.state.filters.employees.includes(shift.employee.lastName)
            const locationFilter = this.state.filters.locations.includes(shift.location)
            const statusFilter = this.state.filters.status.includes(shift.status)
            return dateFilter && employeeFilter && locationFilter && statusFilter
          })}/>

          {/* Render filter options */}
          <Filters allShifts={this.state.allShifts} toggleNameFilter={this.toggleNameFilter} toggleLocationFilter={this.toggleLocationFilter} toggleStatusFilter={this.toggleStatusFilter}/>

          <div className='sort_container'>
            {/* Sorting buttons */}
            <button value="date" onClick={this.sortBy}>Date</button>
            <button value="lastName" onClick={this.sortBy}>Name</button>
            <button value="location" onClick={this.sortBy}>Location</button>
            <button value="totalPay" onClick={this.sortBy}>Total Pay</button>
          </div>

          {/* Area to show all the shifts, using the same filters as the Totals component above */}
          <AllShifts shifts={this.state.allShifts.filter((shift) => {
            const dateFilter = moment(shift.date) >= this.state.paginationWeekStart && moment(shift.date) < this.state.paginationWeekEnd
            const employeeFilter = this.state.filters.employees.includes(shift.employee.lastName)
            const locationFilter = this.state.filters.locations.includes(shift.location)
            const statusFilter = this.state.filters.status.includes(shift.status)
            return dateFilter && employeeFilter && locationFilter && statusFilter
          })}/>

          {/* Pagination buttons */}
          {this.state.paginationWeekStart.format('MMMM Do')}
          <button onClick={this.goBackOneWeek}>Previous Week</button>
          <button onClick={this.goForwardOneWeek}>Next Week</button>
          {this.state.paginationWeekStart.format('MMMM Do')}

        </div>
      )
    } else {
      return (
        <div className="loader"></div>
      )
    }

  }
}

export { ReportPage }
