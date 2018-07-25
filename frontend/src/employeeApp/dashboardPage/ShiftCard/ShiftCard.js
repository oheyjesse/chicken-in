import React from 'react'
import './ShiftCard.scss'
import moment from 'moment'

const ShiftCard = (props) => {
  
  const archiveRejectedShift = () => {
    const shiftId = props.shift._id
    props.archiveRejectedShift(shiftId)
  }

  const deletePendingShift = () => {
    const shiftId = props.shift._id
    props.deletePendingShift(shiftId)
  }

  return (
    <div className='ShiftCardEmployee'>

      <div className='date_and_location_container'>
        <p className='date_label'>{moment(props.shift.date).format('DD MMM YY')}</p>
        <p className='location_label'>{props.shift.location}</p>
      </div>

      <div className='start_and_end_time_container'>
        <p className='start_time_label'>{Math.floor(props.shift.startTime / 60) < 10 ? 0 : ''}{Math.floor(props.shift.startTime / 60)}:{(props.shift.startTime % 60) < 10 ? 0 : ''}{props.shift.startTime % 60}</p>
        <div className='time_bar_container'><div className='time_bar'></div></div>
        <p className='end_time_label'>{Math.floor(props.shift.endTime / 60) < 10 ? 0 : ''}{Math.floor(props.shift.endTime / 60)}:{(props.shift.endTime % 60) < 10 ? 0 : ''}{props.shift.endTime % 60}</p>
      </div>

      <div className='time_and_pay_container'>
        <p className='standard_minutes_label'>{(props.shift.standardMinutes / 60).toFixed(1)}<span className='time_type_label'>/h</span></p>
        <p className='overtime_minutes_label'>{(props.shift.overtimeMinutes / 60).toFixed(1)}<span className='time_type_label'>/ot</span></p>
        <p className='doubletime_minutes_label'>{(props.shift.doubleTimeMinutes / 60).toFixed(1)}<span className='time_type_label'>/dt</span></p>
        <p className='total_pay_label'>${(props.shift.totalPay / 100).toFixed(2)}</p>
      </div>

      <div className='status_and_button_container'>
        {props.archiveRejectedShift && <div className='button_container'><button onClick={archiveRejectedShift}>Clear</button></div>}
        {props.deletePendingShift && <div className='button_container'><button onClick={deletePendingShift}>Delete</button></div>}
        {(!props.deletePendingShift && !props.archiveRejectedShift) && <div className='button_container'></div>}
        <div className='status_indicator_contianer'><div className={props.shift.status + ' status_indicator'}>{props.shift.status === 'archived' ? 'rejected' : props.shift.status}</div></div>
      </div>

    </div>
  )
}

export { ShiftCard }
