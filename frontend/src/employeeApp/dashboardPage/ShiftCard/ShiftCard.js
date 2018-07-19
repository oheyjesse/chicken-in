import React from 'react'

const ShiftCard = (props) => {
  
  const archiveRejectedShift = () => {
    const shiftId = props.shift.id
    props.archiveRejectedShift(shiftId)
  }

  const deletePendingShift = () => {
    const shiftId = props.shift.id
    props.deletePendingShift(shiftId)
  }

  return (
    <div>
      <h3>Shift Card</h3>
      <p>id: {props.shift.id}</p>
      <p>date: {props.shift.date}</p>
      <p>location: {props.shift.location}</p>
      <p>startTime: {props.shift.startTime}</p>
      <p>endTime: {props.shift.endTime}</p>
      <p>standardMinutes: {props.shift.standardMinutes}</p>
      <p>overtimeMinutes: {props.shift.overtimeMinutes}</p>
      <p>doubleTimeMinutes: {props.shift.doubleTimeMinutes}</p>
      <p>totalPay: {props.shift.totalPay}</p>
      <p>state: {props.shift.status === 'archived' ? 'rejected' : props.shift.status}</p>
      {props.archiveRejectedShift && <button onClick={archiveRejectedShift}>Acknowledge</button>}
      {props.deletePendingShift && <button onClick={deletePendingShift}>Delete</button>}
    </div>
  )
}

export { ShiftCard }
