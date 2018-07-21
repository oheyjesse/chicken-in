import React from 'react'

const ShiftCard = ({ shift }) => {
  return (
    <div>
      <h2>Shift Card</h2>
      <p>{shift._id}</p>
      <p>{shift.employee.lastName}, {shift.employee.firstName[0]}</p>
      <p>{shift.date}</p>
      <p>{shift.location}</p>
      <p>{shift.startTime}</p>
      <p>{shift.endTime}</p>
      <p>{shift.standardMinutes}</p>
      <p>{shift.overtimeMinutes}</p>
      <p>{shift.doubleTimeMinutes}</p>
      <p>{shift.totalPay}</p>
      <p>{shift.status}</p>
    </div>
  )
}

export { ShiftCard }
