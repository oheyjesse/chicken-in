import React from 'react'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import { SingleDatePicker } from 'react-dates'
// import { SingleDatePicker } from 'react-dates/lib/components/SingleDatePicker' // deep importing like this saves about 50kB
import { calculateTime } from '../../functions/calculateTime'
import './DatePicker.scss'
import './TimePicker.scss'
import './Form.scss'

class Form extends React.Component {
  state = {
    shiftDate: moment(),
    dateFocused: false
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

  // For time picker
  format = 'HH:mm'

  // For time picker
  onTimeChange = (value) => {
  }

  // Submission handler
  handleAddShift = (event) => {
    event.preventDefault()

    // These constants are needed for both the shiftObject and to do the calculations
    const startTime = this.startTimeRef.current.picker.value
    const endTime = this.endTimeRef.current.picker.value

    // CALCULATE STANDARD MINUTES
    // 1. Convert startTime to minites after midnight
    const startHours = parseInt(startTime.split(':')[0])
    const startMinutes = parseInt(startTime.split(':')[1])
    const startTimeInMinutesAfterMidnight = startHours * 60 + startMinutes
    // 2. Convert endTime to minites after midnight
    const endHours = parseInt(endTime.split(':')[0])
    const endMinutes = parseInt(endTime.split(':')[1])
    const endTimeInMinutesAfterMidnight = endHours * 60 + endMinutes
    
    // 3. Use calculateTime function to return value
    const { standardMinutes, overtimeMinutes, doubleTimeMinutes, totalPay } = calculateTime(this.state.shiftDate, startTimeInMinutesAfterMidnight, endTimeInMinutesAfterMidnight, this.props.employee.standardRate, this.props.business.overtimeMultiplier, this.props.business.doubleTimeMultiplier)

    const newShiftObject = {
      _id: Math.floor(Math.random() * 1000000000000000),
      date: this.state.shiftDate,
      location: this.locationRef.current.value,
      startTime: startTimeInMinutesAfterMidnight,
      endTime: endTimeInMinutesAfterMidnight,
      standardMinutes: standardMinutes,
      overtimeMinutes: overtimeMinutes,
      doubleTimeMinutes: doubleTimeMinutes,
      totalPay: totalPay,
      status: 'pending'
    }

    // Add shift
    this.props.addShift(newShiftObject)
  }

  render () {
    return (
      <div className="AddNewShiftForm">

        <h2><p>Add New Shift</p><span className='form_hide_in_mobile_view'>
          <span>Date</span>
          <span>Start Time</span>
          <span>End Time</span>
          <span>Location</span>
        </span></h2>

        <SingleDatePicker ref={this.dateRef}
          date={this.state.shiftDate} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.dateFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          id='SingleDatePicker' // PropTypes.string.isRequired,
          numberOfMonths={1}
          displayFormat='DD MMM YYYY'
          isOutsideRange={(day) => day > moment()}
        />

        <div className="outer_time_container">
          <div className="time_container start_time_container">
            <label>Start Time</label>
            <TimePicker ref={this.startTimeRef}
              showSecond={false}
              defaultValue={moment().hour(8).minute(30).second(0)}
              className='xxx'
              onChange={this.onTimeChange}
              format={this.format}
              inputReadOnly
              showSecond={false}
            />
          </div>

          <div className="time_container end_time_container">
            <label>End Time</label>
            <TimePicker ref={this.endTimeRef}
              showSecond={false}
              defaultValue={moment().hour(17).minute(30).second(0)}
              className='xxx'
              onChange={this.onTimeChange}
              format={this.format}
              inputReadOnly
              showSecond={false}
            />
          </div>
        </div>

        <div className='location_container'>
          <label>Store Location</label>
          <select ref={this.locationRef}>
            {this.props.employee.locations.map((location, index) => {
              return <option key={index} value={location}>{location}</option>
            })}
          </select>
        </div>
        <button className='button_add_new_shift' onClick={this.handleAddShift}>Add shift</button>

      </div>
    )
  }
}

export { Form }
