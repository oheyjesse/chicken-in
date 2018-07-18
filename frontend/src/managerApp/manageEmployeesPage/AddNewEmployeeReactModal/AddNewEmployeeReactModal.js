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

class AddNewEmployeeReactModal extends React.Component {
  componentWillMount () {
    Modal.setAppElement('body')
  }

  render () {
    return (
    <Modal
      isOpen={this.props.addNewEmployeeForm}
      contentLabel="AddNewEmployeeForm"
      style={customStyles}
    >
      <form onSubmit={this.props.handleCreate}>
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
            id="location1"
            name="location"
            value="Springvale"
            label="Springvale"
          />Springvale
          <input
            type="checkbox"
            id="location2"
            name="location"
            value="Hobart"
            label="Hobart"
          />Hobart
          <input
            type="checkbox"
            id="location3"
            name="location"
            value="Sunshine"
            label="Sunshine"
          />Hobart
        </div>
        <input
          type="number"
          step="10"
          name="standardRate"
          id="standardRate"
          min="1890"
          placeholder="Standard Rate..."
          required
        />
        <input
          type="submit"
          value="CreateNew"
        />
      </form>
      <button onClick={this.props.closeNewEmployeeFormModal}>Cancel</button>
    </Modal>
  )}
}

export default AddNewEmployeeReactModal
