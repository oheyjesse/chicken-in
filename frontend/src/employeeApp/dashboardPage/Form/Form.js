import React from 'react';
import { SingleDatePicker } from 'react-dates';

const Form = () => {
  return (
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
  )
}

export { Form }