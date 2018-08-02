import React from 'react'
import moment from 'moment'
import { hostURL } from '../../../hostUrl'
import { dummyShifts } from '../../../dummyData'
import { Totals } from '../Totals/Totals'
import { Filters } from '../Filters/Filters'
import { Paginator } from '../Paginator/Paginator'
import { StackedBarChart } from '../StackedBarChart/StackedBarChart'
import './DataVisPage.scss'
const axios = require('axios')

const URI = 'http://localhost:3000'

class DataVisPage extends React.Component {
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
    mounted: false,
    pageWidth: 0
  }

  async componentDidMount () {
    await this.getShifts()
  }

  // ---------------------------------------------------------- GET BACKEND DATA
  getShifts = () => {
    axios.get(`http://${hostURL || window.location.host}/api/shifts/all`)
      .then(({ data }) => {
        this.setState(() => {
          return {
            allShifts: data,
            // filters: {
            //   employees: [...new Set(data.map(shift => shift.employee.lastName))],
            //   locations: [...new Set(data.map(shift => shift.location))],
            //   status: [...new Set(data.map(shift => shift.status))]
            // },
            mounted: true
          }
        })
      })
      .then(() => {
        this.sortOnce('date')
      })
      .catch(err => {
        console.log(err)
      })
  }

  // Similar to SortBy but callable from initial componentDidMount
  sortOnce = (key) => {
    this.setState((prevState) => {
      return {
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
        direction: this.state.direction === 'asce' ? 'desc' : 'asce'
      }
    })
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
        <div className='ReportPage' >
          {/* Area to show totals, using the same filters as the AllShifts component below */}
          <Totals shifts={this.state.allShifts.filter((shift) => {
            const dateFilter = moment(shift.date) >= this.state.paginationWeekStart && moment(shift.date) < this.state.paginationWeekEnd
            const employeeFilter = (this.state.filters.employees.length === 0 ? true : this.state.filters.employees.includes(shift.employee.lastName))
            const locationFilter = (this.state.filters.locations.length === 0 ? true : this.state.filters.locations.includes(shift.location))
            const statusFilter = (this.state.filters.status.length === 0 ? true : this.state.filters.status.includes(shift.status))
            return dateFilter && employeeFilter && locationFilter && statusFilter
          })}/>

          {/* Render filter options */}
          <Filters
            allShifts={this.state.allShifts}
            toggleNameFilter={this.toggleNameFilter}
            toggleLocationFilter={this.toggleLocationFilter}
            toggleStatusFilter={this.toggleStatusFilter}
          />

          {/* Pagination buttons */}
          <Paginator
            paginationWeekStart={this.state.paginationWeekStart}
            paginationWeekEnd={this.state.paginationWeekEnd}
            handleForward={this.goForwardOneWeek}
            handleBack={this.goBackOneWeek}
          />

          <StackedBarChart shifts={this.state.allShifts.filter((shift) => {
            const dateFilter = moment(shift.date) >= this.state.paginationWeekStart && moment(shift.date) < this.state.paginationWeekEnd
            const employeeFilter = (this.state.filters.employees.length === 0 ? true : this.state.filters.employees.includes(shift.employee.lastName))
            const locationFilter = (this.state.filters.locations.length === 0 ? true : this.state.filters.locations.includes(shift.location))
            const statusFilter = (this.state.filters.status.length === 0 ? true : this.state.filters.status.includes(shift.status))
            return dateFilter && employeeFilter && locationFilter && statusFilter
          })}/>

          {/* Pagination buttons */}
          <Paginator
            paginationWeekStart={this.state.paginationWeekStart}
            paginationWeekEnd={this.state.paginationWeekEnd}
            handleForward={this.goForwardOneWeek}
            handleBack={this.goBackOneWeek}
          />
        </div>
      )
    } else {
      return (
        <div className="loader"></div>
      )
    }
  }
}

export { DataVisPage }
