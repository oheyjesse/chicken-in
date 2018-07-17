import React from 'react'
import moment from 'moment'
import './ApprovePage.scss'

// Components
import { AdminContainer } from '../AdminContainer/AdminContainer'

// Dummy Data
import { dummyShifts } from '../../../dummyData'

class ApprovePage extends React.Component {
  state = {
    allShifts: dummyShifts,
    pendingShifts: null,
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days')
  }

  componentDidMount () {
    
    this.filterShifts(this.state.allShifts, 'pending')
  }

  getShifts () {
    this.setState(prevState => {
      return {
        allShifts: dummyShifts
      }
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
