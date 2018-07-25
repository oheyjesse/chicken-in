const moment = require('moment')

const calculateTime = (date, startTimeInMinutesAfterMidnight, endTimeInMinutesAfterMidnight, standardRate, overtimeMultiplier, doubleTimeMultiplier) => {
  // Set variables for return values
  let standardMinutes
  let overtimeMinutes
  let doubleTimeMinutes
  let totalPay

  // Calculate total minutes worked
  const totalMinutesWorked = endTimeInMinutesAfterMidnight - startTimeInMinutesAfterMidnight

  // 2. ---Rates and Total Pay for Sundays
  if (moment(date).day() === 0) {
    standardMinutes = 0
    overtimeMinutes = 0
    doubleTimeMinutes = totalMinutesWorked
    totalPay = totalMinutesWorked * (standardRate * doubleTimeMultiplier / 60)
  }

  // ---Rates for Saturdays
  else if (moment(date).day() === 6) {
    const firstFiveHoursRatePerMinute = standardRate * overtimeMultiplier / 60
    const remainingTimeRatePerMinute = standardRate * doubleTimeMultiplier / 60

    if (totalMinutesWorked <= (5 * 60)) {
      standardMinutes = 0
      overtimeMinutes = totalMinutesWorked
      doubleTimeMinutes = 0
      totalPay = overtimeMinutes * firstFiveHoursRatePerMinute
    } else {
      standardMinutes = 0
      overtimeMinutes = 5 * 60
      doubleTimeMinutes = totalMinutesWorked - overtimeMinutes
      totalPay = overtimeMinutes * firstFiveHoursRatePerMinute + doubleTimeMinutes * remainingTimeRatePerMinute
    }
  }

  // ---Rates for Mondays to Fridays
  else {
    const firstFiveHoursRatePerMinute = standardRate / 60
    const nextTwoHalfHoursRatePerMinute = standardRate * overtimeMultiplier / 60
    const remainingTimeRatePerMinute = standardRate * doubleTimeMultiplier / 60

    if (totalMinutesWorked <= (5 * 60)) {
      standardMinutes = totalMinutesWorked
      overtimeMinutes = 0
      doubleTimeMinutes = 0
      totalPay = standardMinutes * firstFiveHoursRatePerMinute
    } else if (totalMinutesWorked <= (7.5 * 60)) {
      standardMinutes = 5 * 60
      overtimeMinutes = totalMinutesWorked - standardMinutes
      doubleTimeMinutes = 0
      totalPay = standardMinutes * firstFiveHoursRatePerMinute + overtimeMinutes * nextTwoHalfHoursRatePerMinute
    } else {
      standardMinutes = 5 * 60
      overtimeMinutes = 2.5 * 60
      doubleTimeMinutes = totalMinutesWorked - overtimeMinutes - standardMinutes
      totalPay = standardMinutes * firstFiveHoursRatePerMinute + overtimeMinutes * nextTwoHalfHoursRatePerMinute + doubleTimeMinutes * remainingTimeRatePerMinute
    }
  }

  // Create the return object
  const timesAndPayObject = {
    standardMinutes: standardMinutes,
    overtimeMinutes: overtimeMinutes,
    doubleTimeMinutes: doubleTimeMinutes,
    totalPay: totalPay
  }

  // 6. Return the return object
  return timesAndPayObject
}

module.exports = { calculateTime }
