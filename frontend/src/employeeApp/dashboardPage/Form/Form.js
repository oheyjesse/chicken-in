import React from 'react';
import moment from 'moment'
import TimePicker from 'rc-time-picker';
import { SingleDatePicker } from 'react-dates';

class Form extends React.Component {
  
  state = {
    shiftDate: moment(),
    dateFocused: false,
  }

  // For date picker
  onDateChange = (shiftDate) => {
    this.setState(() => {
      return {
        shiftDate: shiftDate
      }
    })
  }

  // For date picker
  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        dateFocused: focused
      }
    })
  }

  //For time picker
  format = 'HH:mm'

  //For time picker
  onTimeChange = (value) => {
    console.log(value);
  }

  // Submission handler
  handleAddShift = (event) => {
    event.preventDefault()

    const newShiftObject = {
      id: 66, // Won't need this in final version
      employee: {
        type: this.props.employee.id,
        ref: 'Employee'
      },
      date: Math.floor(Math.random() * 1000000), // From input
      location: "Springvale", // From input
      startTime: 2000, // From input
      endTime: 2000, // From input
      standardMinutes: 120, // Calculated
      overtimeMinutes: 60, // Calculated
      doubleTimeMinutes: 60, // Calculated
      totalPay: 2000, // Calculated
      status: "pending"
    }

    // Add shift
    this.props.addShift(newShiftObject)
  }
  
  render() {
    return (
      <div>
        <h2>Add New Shift</h2>
          <SingleDatePicker 
            date={this.state.shiftDate} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.dateFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="ybrthbrthbsrtaer" // PropTypes.string.isRequired,
            numberOfMonths={1}
            displayFormat="DD MMM YYYY"
          />
          Start Time
          <TimePicker
            showSecond={false}
            defaultValue={moment().hour(8).minute(0)}
            className="xxx"
            onChange={this.onTimeChange}
            format={this.format}
            inputReadOnly
            defaultValue={moment()} 
            showSecond={false}
          />
          End Time
          <TimePicker
            showSecond={false}
            defaultValue={moment().hour(8).minute(0)}
            className="xxx"
            onChange={this.onTimeChange}
            format={this.format}
            inputReadOnly
          />
          Store Location
          <select>
            {this.props.employee.locations.map((location, index) => {
              return <option key={index} value={location}>{location}</option>
            })}
          </select>

          <button onClick={this.handleAddShift}>Add shift</button>
      </div>
    )
  }
  
}

export { Form }