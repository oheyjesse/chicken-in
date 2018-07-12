import React from 'react';

const ShiftCard = ({ shift }) => {
  return (
    <div>
      <h3>Shift Card</h3>
      <p>date: {shift.date}</p>
      <p>location: {shift.location}</p>
      <p>startTime: {shift.startTime}</p>
      <p>endTime: {shift.endTime}</p>
      <p>standardMinutes: {shift.standardMinutes}</p>
      <p>overtimeMinutes: {shift.overtimeMinutes}</p>
      <p>doubleTimeMinutes: {shift.doubleTimeMinutes}</p>
      <p>totalPay: {shift.totalPay}</p>
      <p>state: {shift.status}</p>

    </div>
  )
}

export { ShiftCard }

const lol = {
  id: 19,
  employee: {
    type: 1,
    ref: 'Employee'
  },
  date: Math.floor(Math.random() * 1000000),
  location: "Springvale",
  startTime: 2000,
  endTime: 2000,
  standardMinutes: 120,
  overtimeMinutes: 60,
  doubleTimeMinutes: 60,
  totalPay: 2000, 
  status: "approved"
}