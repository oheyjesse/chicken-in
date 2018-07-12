import React from 'react';
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';
import { dummyShifts } from '../../../dummyData'
import { RejectedShifts } from '../RejectedShifts/RejectedShifts'
import { PendingShifts } from '../PendingShifts/PendingShifts'
import { AllShifts } from '../AllShifts/AllShifts'

class DashboardPage extends React.Component {
  state = {
    shiftDate: moment(),
    dateFocused: false,
    allShifts: dummyShifts.sort(function (a, b) {
      return b.date - a.date;
    })
  }

  pendingShifts = this.state.allShifts.filter((shift) => {
    return shift.status === "pending"
  })

  rejectedShifts = this.state.allShifts.filter((shift) => {
    return shift.status === "rejected"
  })

  onDateChange = (shiftDate) => {
    this.setState(() => {
      return {
        shiftDate: shiftDate
      }
    })
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        dateFocused: focused
      }
    })
  }

  render() {
    return (
      <div>
        
          <div>
            <h2>Add New Shift</h2>
            <form action="/shifts/new" method="post">
              <SingleDatePicker 
                date={this.state.shiftDate} // momentPropTypes.momentObj or null
                onDateChange={this.onDateChange} // PropTypes.func.isRequired
                focused={this.state.dateFocused} // PropTypes.bool
                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                id="ybrthbrthbsrtaer" // PropTypes.string.isRequired,
                numberOfMonths={1}
                displayFormat="DD MMM YYYY"
              />
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="submit"/>
            </form>
          </div>

          <RejectedShifts rejectedShifts={this.rejectedShifts}/>

          <PendingShifts pendingShifts={this.pendingShifts}/>

          <AllShifts allShifts={this.state.allShifts}/>

      </div>
    )
  } 
}

export { DashboardPage }