import React from 'react'
import moment from 'moment'
import './ApprovePage.scss'

// Components
import { AdminGrid } from '../AdminGrid/AdminGrid'

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
    pendingShifts: dummyShifts.filter(shift => {
      return (shift.status === 'pending')
    }),
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days')
  }

  render () {
    return (
      <div>
        <h1>Approve Timesheets Page</h1>
        <br/>
        <AdminGrid shifts={this.state.pendingShifts}/>
      </div>
    )
  }
}

export { ApprovePage }
