import React from 'react'
import './Totals.scss'

const Totals = (props) => {
  return (
    <div className='Totals'>
      <div className='Totals__headers_container'>
        <span className='Totals__header_item total_hours_header'>Total Hours</span>
        <span className='Totals__header_item standard_hours_header'>Standard</span>
        <span className='Totals__header_item overtime_hours_header'>Overtime</span>
        <span className='Totals__header_item double_time_hours_header'>Double Time</span>
        <span className='Totals__header_item total_pay_header'>Total</span>
      </div>

      <div className='Totals__data_container'>
        <span className='Totals__data_item total_hours_data'>{((props.shifts.reduce((sum, shift) => shift.standardMinutes + shift.overtimeMinutes + shift.doubleTimeMinutes + sum, 0)) / 60).toFixed(1)}<span className='Totals__data_label'>/h</span></span>
        <span className='Totals__data_item standard_hours_data'>{((props.shifts.reduce((sum, shift) => shift.standardMinutes + sum, 0)) / 60).toFixed(1)}<span className='Totals__data_label'>/st</span></span>
        <span className='Totals__data_item overtime_hours_data'>{((props.shifts.reduce((sum, shift) => shift.overtimeMinutes + sum, 0)) / 60).toFixed(1)}<span className='Totals__data_label'>/ot</span></span>
        <span className='Totals__data_item double_time_hours_data'>{((props.shifts.reduce((sum, shift) => shift.doubleTimeMinutes + sum, 0)) / 60).toFixed(1)}<span className='Totals__data_label'>/dt</span></span>
        <span className='Totals__data_item total_pay_data'>${((props.shifts.reduce((sum, shift) => shift.totalPay + sum, 0)) / 100).toFixed(2)}</span>
      </div>
    </div>
  )
}

export { Totals }
