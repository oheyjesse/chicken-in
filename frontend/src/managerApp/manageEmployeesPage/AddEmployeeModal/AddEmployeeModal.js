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

class AddEmployeeModal extends React.Component {
  componentWillMount () {
    Modal.setAppElement('body')
  }

  render () {
    return (
      <Modal
        isOpen={this.props.addEmployeeForm}
        contentLabel="AddEmployeeForm"
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
              name="location"
              value="Springvale"
              label="Springvale"
            />Springvale
            <input
              type="checkbox"
              name="location"
              value="Hobart"
              label="Hobart"
            />Hobart
            <input
              type="checkbox"
              name="location"
              value="Sunshine"
              label="Sunshine"
            />Sunshine
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
        <button onClick={this.props.closeAddEmployeeModal}>Cancel</button>
      </Modal>
    )
  }
}

export default AddEmployeeModal
