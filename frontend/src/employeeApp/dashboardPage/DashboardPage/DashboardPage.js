import React from 'react';
import { ShiftCard } from '../ShiftCard/ShiftCard'
import { SingleDatePicker } from 'react-dates';
import moment from 'moment'

// const DashboardPage = () => {
//   return (
//     <div>
//       Hello
//     </div>
//   )
// }

class DashboardPage extends React.Component {
  state = {
    shiftDate: moment(),
    dateFocused: false
  }

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

        <div>
          <h2>Rejected Shifts</h2>
          <ShiftCard />
        </div>

        <div>
          <h2>Pending Shifts</h2>
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
        </div>

        <div>
          <h2>All Shifts</h2>
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
        </div>

      </div>
    )
  } 
}

export { DashboardPage }