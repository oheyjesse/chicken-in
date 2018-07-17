import React from 'react';
import moment from 'moment'
import './DashboardPage.scss'

// Components
import { RejectedShifts } from '../RejectedShifts/RejectedShifts'
import { PendingShifts } from '../PendingShifts/PendingShifts'
import { AllShifts } from '../AllShifts/AllShifts'
import { Form } from '../Form/Form'

// Dummy Data
import { dummyShifts } from '../../../dummyData'
import { dummyEmployee } from '../../../dummyData'

class DashboardPage extends React.Component {
  
  state = {
    allShifts: dummyShifts,
    employee: dummyEmployee,
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days'),
  }

  archiveRejectedShift = (shiftId) => {
    // 1. Store all the shifts in a new array
    const allShifts = this.state.allShifts

    // 2. Find shift in allShifts array
    const shiftToUpdate = allShifts.find((shift) => {
      return shift.id === shiftId
    })

    // 3. Update shift status 
    shiftToUpdate.status = "archived"

    // 4. Set new allShift state
    this.setState(() => {
      return {
        allShifts: allShifts
      }
    })
  }

  addShift = (newShiftObject) => {
    // 1. Store all the shifts in a new array
    const allShifts = this.state.allShifts
    
    // 2. Push new shift into array 
    allShifts.push(newShiftObject)

    // 3. Set new allShift state
    this.setState(() => {
      return {
        allShifts: allShifts
      }
    })
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


  render() {
    return (
      <div>

        <Form addShift={this.addShift} employee={this.state.employee}/>

        <RejectedShifts 
          rejectedShifts={this.state.allShifts.filter((shift) => {
            return shift.status === "rejected"
          })} 
          archiveRejectedShift={this.archiveRejectedShift}
        />

        <PendingShifts 
          pendingShifts={this.state.allShifts.filter((shift) => {
            return shift.status === "pending"
          })}
        />
        
        {this.state.paginationWeekStart.format('MMMM Do')}
        <button onClick={this.goBackOneWeek}>Previous Week</button>
        <button onClick={this.goForwardOneWeek}>Next Week</button>
        {this.state.paginationWeekEnd.format('MMMM Do')}

        <AllShifts allShifts={this.state.allShifts.filter((shift) => {
            return (shift.date >= this.state.paginationWeekStart && shift.date < this.state.paginationWeekEnd)
          })}/>

      </div>
    )
  } 
}

export { DashboardPage }