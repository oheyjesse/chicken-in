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
        <form onSubmit={this.props.handleEdit}>
          <div className="modal-container">
            <input
              className="firstname"
              type="text"
              name="firstName"
              id="firstName"
              defaultValue={this.props.employeeEdit.firstName}
              required
            />
            <input
              className="lastname"
              type="text"
              name="lastName"
              id="lastName"
              defaultValue={this.props.employeeEdit.lastName}
              required
            />
            <input
              className="email"
              type="email"
              name="email"
              id="email"
              defaultValue={this.props.employeeEdit.email}
              required
            />
            <input
              className="st"
              type="number"
              step="10"
              name="standardRate"
              id="standardRate"
              min="1890"
              defaultValue={this.props.employeeEdit.standardRate}
              required
            />
            <div className="location">
              <div className="location-button" type="button" onClick={this.props.toggleLocationCheckbox}>{this.props.displayLocationCheckbox ? 'Close' : 'Location'} &#x25BC; </div>
              <div className={this.props.displayLocationCheckbox ? 'location_checkbox_active' : 'location_checkbox_hidden'}>
                <label htmlFor="Springvale" className="checkbox">
                  <input
                    type="checkbox"
                    name="location"
                    defaultValue="Springvale"
                    label="Springvale"
                    defaultChecked={this.props.employeeEdit.locations.includes('Springvale')}
                  />Springvale
                </label>
                <label htmlFor="Hobart" className="checkbox">
                  <input
                    type="checkbox"
                    name="location"
                    defaultValue="Hobart"
                    label="Hobart"
                    defaultChecked={this.props.employeeEdit.locations.includes('Hobart')}
                  />Hobart
                </label>
                <label htmlFor="Sunshine" className="checkbox">
                  <input
                    type="checkbox"
                    name="location"
                    defaultValue="Sunshine"
                    label="Sunshine"
                    defaultChecked={this.props.employeeEdit.locations.includes('Sunshine')}
                  />Sunshine
                </label>
              </div>
            </div>
            <input
              className="submit"
              type="submit"
              value="Edit"
            />
            <button className="cancel" onClick={this.props.closeEditEmployeeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    )
  }
}

export default EditEmployeeModal
