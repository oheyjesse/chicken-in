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
              step="0.5"
              name="standardRate"
              id="standardRate"
              min={1900 / 100} // cent to doller
              defaultValue={this.props.employeeEdit.standardRate / 100} // cent to doller
              required
            />
            <div className="location">
              <div className="location-button" type="button" onClick={this.props.toggleLocationCheckbox}>{this.props.displayLocationCheckbox ? 'Close' : 'Location'} &#x25BC; </div>
              <div className={this.props.displayLocationCheckbox ? 'location_checkbox_active' : 'location_checkbox_hidden'}>
                { this.props.businessLocations.map((location, index) => {
                  return (
                    <label key={index} className="checkbox" htmlFor={location}>
                      <input
                        type="checkbox"
                        name="location"
                        value={location}
                        defaultChecked={this.props.employeeEdit.locations.includes(location)}
                      />{location}
                    </label>
                  )
                })}
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
