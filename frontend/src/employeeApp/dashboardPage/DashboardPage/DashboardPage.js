import React from 'react';
import { dummyShifts } from '../../../dummyData'
import { dummyEmployee } from '../../../dummyData'
import { RejectedShifts } from '../RejectedShifts/RejectedShifts'
import { PendingShifts } from '../PendingShifts/PendingShifts'
import { AllShifts } from '../AllShifts/AllShifts'
import { Form } from '../Form/Form'

class DashboardPage extends React.Component {
  
  state = {
    allShifts: dummyShifts,
    employee: dummyEmployee
  }

  archiveRejectedShift = (shiftId) => {
    // 1. Store all the shifts in a new array
    const allShifts = this.state.allShifts

    // 2. Find shift in allShifts array
    const shiftToUpdate = allShifts.find((shift) => {
      return shift.id === shiftId
    })

    // 3. Update shift status 
    shiftToUpdate.status = "archived"

    // 4. Set new allShift state
    this.setState(() => {
      return {
        allShifts: allShifts
      }
    })
  }

  addShift = (newShiftObject) => {
    // 1. Store all the shifts in a new array
    const allShifts = this.state.allShifts
    
    // 2. Push new shift into array 
    allShifts.push(newShiftObject)

    // 3. Set new allShift state
    this.setState(() => {
      return {
        allShifts: allShifts
      }
    })
  }

  render() {
    return (
      <div>

        <Form addShift={this.addShift} employee={this.state.employee}/>

        <RejectedShifts 
          rejectedShifts={this.state.allShifts.filter((shift) => {
            return shift.status === "rejected"
          })} 
          archiveRejectedShift={this.archiveRejectedShift}
        />

        <PendingShifts 
          pendingShifts={this.state.allShifts.filter((shift) => {
            return shift.status === "pending"
          })}
        />

        <AllShifts allShifts={this.state.allShifts}/>

      </div>
    )
  } 
}

export { DashboardPage }