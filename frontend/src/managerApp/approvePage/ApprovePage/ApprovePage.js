import React from 'react'
import moment from 'moment'
import axios from 'axios'
import './ApprovePage.scss'

// Components
import { AdminContainer } from '../AdminContainer/AdminContainer'

// Dummy Data
import { dummyShifts } from '../../../dummyData'

const URI = 'http://localhost:3000'

class ApprovePage extends React.Component {
  state = {
    pendingShifts: null,
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days')
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
        // this.setState(prevState => {
        //   return {
        //     pendingShifts: prevState.pendingShifts.filter(shift => {
        //       return (shift._id !== shiftID)
        //     })
        //   }
        // })
        console.log(`Shift: ${shiftID} Rejected`)
      })
  }

  render () {
    return (
      <div>
        <h1>Approve Timesheets Page</h1>
        <br/>
        { this.state.pendingShifts === null
          ? 'Loading'
          : <AdminContainer shifts={this.state.pendingShifts} updateShift={this.updateShift}/>
        }
      </div>
    )
  }
}

export { ApprovePage }
