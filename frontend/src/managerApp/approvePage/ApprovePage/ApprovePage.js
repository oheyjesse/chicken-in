import React from 'react'
import moment from 'moment'
import './ApprovePage.scss'

// Components
import { AdminContainer } from '../AdminContainer/AdminContainer'

// Dummy Data
import { dummyShifts } from '../../../dummyData'

// employee: {
//   type: 1,
//   ref: 'Employee'
// },
// date: moment().add(1, 'days').valueOf(),
// location: 'Springvale',
// startTime: 2000,
// endTime: 2000,
// standardMinutes: 120,
// overtimeMinutes: 60,
// doubleTimeMinutes: 60,
// totalPay: 2000,
// status: 'rejected'

class ApprovePage extends React.Component {
  state = {
    allShifts: dummyShifts,
    test: 'test',
    pendingShifts: null,
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days')
  }

  componentDidMount () {
    this.filterShifts(this.state.allShifts, 'pending')
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

  render () {
    return (
      <div>
        <h1>Approve Timesheets Page</h1>
        <br/>
        { this.state.pendingShifts === null
          ? 'Loading'
          : <AdminContainer shifts={this.state.pendingShifts}/>
        }
      </div>
    )
  }
}

export { ApprovePage }
