import React from 'react'
import moment from 'moment'
import axios from 'axios'
import './ApprovePage.scss'

// Components
import { Button } from '../../router/Button/Button' // Shared Components
import { AdminContainer } from '../AdminContainer/AdminContainer'
import { Paginator } from '../Paginator/Paginator'

// Dummy Data
import { dummyShifts } from '../../../dummyData'

const URI = 'http://localhost:3000'

class ApprovePage extends React.Component {
  state = {
    pendingShifts: null,
    pagination: {
      weekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
      weekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days')
    }
  }

  componentDidMount () {
    this.getShifts(URI + '/api/shifts/pending')
  }

  getShifts (uri) {
    axios.get(uri)
      .then(({ data }) => {
        this.setState(prevState => {
          return {
            pendingShifts: data
          }
        })
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  filterShifts (shifts, filter) {
    this.setState(prevState => {
      return {
        pendingShifts: shifts.filter(shift => {
          return (shift.status === filter)
        })
      }
    })

    shifts.filter(shift => {
      return (shift.status === filter)
    })
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

  render () {
    return (
      <div>
        <h1>Approve Timesheets Page</h1>
        <br/>

        <Paginator pagination={this.state.pagination} handleClick={this.paginate}/>
        <br/>

        <Button onClick={this.approveAllShifts}>Approve All</Button>

        { this.state.pendingShifts === null
          ? 'Loading Shifts'
          : <AdminContainer
            shifts={this.state.pendingShifts.filter((shift) => {
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
