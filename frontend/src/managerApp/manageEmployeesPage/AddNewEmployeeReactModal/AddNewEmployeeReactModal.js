import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

const customStyles = {
  content: {
    tops: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginTop: '10%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const AddNewEmployeeReactModal = (props) => {
  return (
    <Modal
      isOpen={props.addNewEmployeeForm}
      contentLabel="AddNewEmployeeForm"
      style={customStyles}
    >
      <form onSubmit={props.closeNewEmployeeFormModal}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name..."
          required
        /> <br/>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name..."
          required
        /> <br/>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Employee Email..."
          required
        /> <br/>
        <div>
          <input
            type="checkbox"
            id="storeLocations1"
            name="storeLocations"
            value="Springvale"
            label="Springvale"
            inline
          />Springvale
          <input
            type="checkbox"
            id="storeLocations2"
            name="storeLocations"
            value="Hobart"
            label="Hobart"
            inline
          />Hobart
          <input
            type="checkbox"
            id="storeLocations3"
            name="storeLocations"
            value="Sunshine"
            label="Sunshine"
            inline
          />Hobart
        </div>
        <input type="submit" value="CreateNew" />
      </form>
      <button onClick={props.closeNewEmployeeFormModal}>Cancel</button>
    </Modal>
  )
}

export default AddNewEmployeeReactModal
