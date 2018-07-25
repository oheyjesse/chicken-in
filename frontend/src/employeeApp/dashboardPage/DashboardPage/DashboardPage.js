import React from 'react'
import moment from 'moment'
import './DashboardPage.scss'

// Components
import { RejectedShifts } from '../RejectedShifts/RejectedShifts'
import { PendingShifts } from '../PendingShifts/PendingShifts'
import { AllShifts } from '../AllShifts/AllShifts'
import { Form } from '../Form/Form'

// Dummy Data
import { dummyShifts, dummyEmployee, dummyBusiness } from '../../../dummyData'

import { hostURL } from '../../../hostUrl'
const axios = require('axios')

class DashboardPage extends React.Component {
  state = {
    allShifts: [],
    employee: {},
    business: {},
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days'),
    displayMessage: false,
    mounted: false
  }

  async componentDidMount () {
    try {
      // 1. Get data from server
      const response = await axios.get(`http://${hostURL || window.location.host}/api/shifts/employee`)
      const allShifts = response.data

      // 2. Set state of component
      this.setState(() => {
        return {
          allShifts: allShifts,
          employee: allShifts[0].employee,
          business: allShifts[0].business,
          mounted: true
        }
      })
    } catch (error) {
      this.setState(() => {
        return {
          allShifts: dummyShifts,
          employee: dummyEmployee,
          business: dummyBusiness[0],
          mounted: true
        }
      })
    }
  }

  archiveRejectedShift = async (shiftId) => {
    try {
      // 1. Send the delete request to the server
      const result = await axios.put(`http://${hostURL || window.location.host}/api/shifts/archive/${shiftId}`)
      const archivedShift = result.data

      // 2. Find shift in allShifts array
      const allShiftsToBeUpdated = this.state.allShifts.filter(() => {
        return true
      })

      const shiftToUpdate = allShiftsToBeUpdated.find((shift) => {
        return shift._id === archivedShift._id
      })

      // 3. Update shift status
      shiftToUpdate.status = 'archived'

      // 4. Set new allShift state
      this.setState(() => {
        return {
          allShifts: allShiftsToBeUpdated
        }
      })
    } catch (error) {
      console.log(shiftId)
      // 1. Find shift in allShifts array
      const allShiftsToBeUpdated = this.state.allShifts.filter(() => {
        return true
      })

      const shiftToUpdate = allShiftsToBeUpdated.find((shift) => {
        return shift._id === shiftId
      })

      // 2. Update shift status
      shiftToUpdate.status = 'archived'

      // 3. Set new allShift state
      this.setState(() => {
        return {
          allShifts: allShiftsToBeUpdated
        }
      })
    }
  }

  deletePendingShift = async (shiftId) => {
    try {
      // 1. Send the delete request to the server
      const result = await axios.delete(`http://${hostURL || window.location.host}/api/shifts/delete/${shiftId}`)
      const deletedShift = result.data

      // 2. Filter the shift from the array
      const updatedShifts = this.state.allShifts.filter((shift) => {
        return shift._id !== deletedShift._id
      })

      // 3. Set new allShift state
      this.setState(() => {
        return {
          allShifts: updatedShifts
        }
      })
    } catch (error) {
      console.log(shiftId)
      // 1. Filter the shift from the array
      const updatedShifts = this.state.allShifts.filter((shift) => {
        return shift._id !== shiftId
      })

      // 2. Set new allShift state
      this.setState(() => {
        return {
          allShifts: updatedShifts
        }
      })
    }
  }

  addShift = async (newShiftObject) => {
    try {
      // Send post request to create a new shift
      const result = await axios.post(`http://${hostURL || window.location.host}/api/shifts/create`, {
        date: newShiftObject.date,
        location: newShiftObject.location,
        startTime: newShiftObject.startTime,
        endTime: newShiftObject.endTime,
        standardMinutes: newShiftObject.standardMinutes,
        overtimeMinutes: newShiftObject.overtimeMinutes,
        doubleTimeMinutes: newShiftObject.doubleTimeMinutes,
        totalPay: newShiftObject.totalPay
      })

      const newShift = result.data

      // Set new allShift state and display message
      this.setState((prevState) => {
        return {
          allShifts: prevState.allShifts.concat(result.data),
          displayMessage: true
        }
      })

      setTimeout(() => {
        this.setState(() => {
          return {
            displayMessage: false
          }
        })
      }, 5000)
    } catch (error) {
      this.setState((prevState) => {
        return {
          allShifts: prevState.allShifts.concat(newShiftObject),
          displayMessage: true
        }
      })

      setTimeout(() => {
        this.setState(() => {
          return {
            displayMessage: false
          }
        })
      }, 5000)
    }
  }

  goBackOneWeek = () => {
    this.setState((prevState) => {
      return {
        paginationWeekStart: prevState.paginationWeekStart.subtract(7, 'days'),
        paginationWeekEnd: prevState.paginationWeekEnd.subtract(7, 'days')
      }
    })
  }

  goForwardOneWeek = () => {
    this.setState((prevState) => {
      return {
        paginationWeekStart: prevState.paginationWeekStart.add(7, 'days'),
        paginationWeekEnd: prevState.paginationWeekEnd.add(7, 'days')
      }
    })
  }

  render () {
    if (this.state.mounted) {
      return (
        <div className='DashBoardPage'>

          <div className={this.state.displayMessage ? 'shift_added_message_active' : 'shift_added_message_hidden'}>Shift added successfully</div>

          <Form addShift={this.addShift} employee={this.state.employee} business={this.state.business}/>

          <RejectedShifts
            rejectedShifts={this.state.allShifts.filter((shift) => {
              return shift.status === 'rejected'
            })}
            archiveRejectedShift={this.archiveRejectedShift}
          />

          <PendingShifts
            pendingShifts={this.state.allShifts.filter((shift) => {
              return shift.status === 'pending'
            })}
            deletePendingShift={this.deletePendingShift}
          />
          <div className='pagination_container'>
            <button className='pagination_button' onClick={this.goBackOneWeek}>{'<'}</button>
            <span className='pagination_date'>{this.state.paginationWeekStart.format('DD MMM YYYY')}</span>
            <span className='dates_spacing'>-</span>
            <span className='pagination_date'>{this.state.paginationWeekEnd.format('DD MMM YYYY')}</span>
            <button className='pagination_button' onClick={this.goForwardOneWeek}>{'>'}</button>
          </div>

          <AllShifts allShifts={this.state.allShifts.filter((shift) => {
            return (moment(shift.date) >= this.state.paginationWeekStart && moment(shift.date) < this.state.paginationWeekEnd)
          })}/>

        </div>
      )
    } else {
      return (
        <div className="loader"></div>
      )
    }
  }
}

export { DashboardPage }
