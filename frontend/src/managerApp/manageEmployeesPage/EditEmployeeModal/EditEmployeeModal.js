import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import '../ManageEmployeesPage/ManageEmployeeModal.scss'

class EditEmployeeModal extends React.Component {
  componentWillMount () {
    Modal.setAppElement('body')
  }

  render () {
    return (
      <Modal
        isOpen={this.props.editEmployeeForm}
        contentLabel="EditEmployeeForm"
        className="modal"
      >
        <form
          onSubmit={this.props.handleEdit}
        >
          <input
            type="text"
            name="firstName"
            id="firstName"
            defaultValue={this.props.employeeEdit.firstName}
            required
          /> <br/>
          <input
            type="text"
            name="lastName"
            id="lastName"
            defaultValue={this.props.employeeEdit.lastName}
            required
          /> <br/>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={this.props.employeeEdit.email}
            required
          /> <br/>
          <input
            type="number"
            step="10"
            name="standardRate"
            id="standardRate"
            min="1890"
            defaultValue={this.props.employeeEdit.standardRate}
            required
          />
          <div>
            <input
              type="checkbox"
              name="location"
              defaultValue="Springvale"
              label="Springvale"
              defaultChecked={this.props.employeeEdit.locations.includes('Springvale')}
            />Springvale
            <input
              type="checkbox"
              name="location"
              defaultValue="Hobart"
              label="Hobart"
              defaultChecked={this.props.employeeEdit.locations.includes('Hobart')}
            />Hobart
            <input
              type="checkbox"
              name="location"
              defaultValue="Sunshine"
              label="Sunshine"
              defaultChecked={this.props.employeeEdit.locations.includes('Sunshine')}
            />Sunshine
          </div>
          
          <input
            type="submit"
            value="Edit"
          />
        </form>
        <button onClick={this.props.closeEditEmployeeModal}>Cancel</button>
      </Modal>
    )
  }
}

export default EditEmployeeModal
