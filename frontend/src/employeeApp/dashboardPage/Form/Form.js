import React from 'react';
import moment from 'moment'
import TimePicker from 'rc-time-picker';
import { SingleDatePicker } from 'react-dates';

class Form extends React.Component {
  
  state = {
    shiftDate: moment(),
    dateFocused: false,
  }

  // References
  locationRef = React.createRef()
  startTimeRef = React.createRef()
  endTimeRef = React.createRef()

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

    // These constants are needed for both the shiftObject and to do the calculations
    const startTime = this.startTimeRef.current.picker.value
    const endTime = this.endTimeRef.current.picker.value

    // CALCULATE STANDARD MINUTES
    // TODO: Do full calculation
    // 1. Convert startTime to minites after midnight
    const startHours = parseInt(startTime.split(":")[0])
    const startMinutes = parseInt(startTime.split(":")[1])
    const startMinutesAfterMidnight = startHours * 60 + startMinutes
    // 2. Convert endTime to minites after midnight
    const endHours = parseInt(endTime.split(":")[0])
    const endMinutes = parseInt(endTime.split(":")[1])
    const endMinutesAfterMidnight = endHours * 60 + endMinutes
    // 3. Calculate total time
    const standardMinutes = endMinutesAfterMidnight - startMinutesAfterMidnight

    // CALCULATE OVERTIME MINUTES
    // TODO:

    // CALCULATE DOUBLTIME MINUTES
    // TODO:

    // CALCULATE TOTALPAY
    // TODO:
    
    const newShiftObject = {
      id: 66, // Won't need this in final version
      employee: { // This will need to change in final version
        type: this.props.employee.id, 
        ref: 'Employee'
      },
      date: this.state.shiftDate.valueOf(),
      location: this.locationRef.current.value,
      startTime: startTime,
      endTime: endTime,
      standardMinutes: standardMinutes, // Will need to change
      overtimeMinutes: 0,
      doubleTimeMinutes: 0,
      totalPay: 90000,
      status: "pending"
    }
    
    // Add shift
    this.props.addShift(newShiftObject)
  }
  
  render() {
    return (
      <div>
        <h2>Add New Shift</h2>
          <SingleDatePicker ref={this.dateRef}
            date={this.state.shiftDate} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.dateFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="ybrthbrthbsrtaer" // PropTypes.string.isRequired,
            numberOfMonths={1}
            displayFormat="DD MMM YYYY"
            isOutsideRange={(day) => day > moment()}
          />
          Start Time
          <TimePicker ref={this.startTimeRef}
            showSecond={false}
            defaultValue={moment().hour(8).minute(30).second(0)}
            className="xxx"
            onChange={this.onTimeChange}
            format={this.format}
            inputReadOnly
            showSecond={false}
          />
          End Time
          <TimePicker ref={this.endTimeRef}
            showSecond={false}
            defaultValue={moment().hour(17).minute(30).second(0)}
            className="xxx"
            onChange={this.onTimeChange}
            format={this.format}
            inputReadOnly
            showSecond={false}
          />
          Store Location
          <select ref={this.locationRef}>
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