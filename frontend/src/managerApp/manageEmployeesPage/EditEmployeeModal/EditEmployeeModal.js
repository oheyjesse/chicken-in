import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input } from 'reactstrap'
import EmployeeForm from '../../EmployeeForm/EmployeeForm'
// import 'bootstrap/dist/css/bootstrap.min.css'

class EditEmployeeModal extends React.Component {
  state = {
    firstName: this.props.employee.firstName,
    lastName: this.props.employee.lastName,
    email: this.props.employee.email,
    storeLocation: this.props.employee.storeLocation,
    standardRate: this.props.employee.standardRate,
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <div>
        <Button
          color="blue"
          onClick={this.toggle}
        >Edit</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            toggle={this.toggle}
          >Edit Employee Profile</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name..."
                  required />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name..."
                  required />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Employee Email..."
                  required />
              </FormGroup>
              <FormGroup>
                <Label for="storeLocation">Store Location</Label> <br/>
                <Input
                  onChange={this.handleChange}
                  type="checkbox"
                  name="storeLocation"
                  id="storeLocation"
                  value="Springvale" />
                Springvale
                <Input
                  onChange={this.handleChange}
                  type="checkbox"
                  name="storeLocation"
                  id="storeLocation"
                  value="Hobart" />
                Hobart
                <Input
                  onChange={this.handleChange}
                  type="checkbox"
                  name="storeLocation"
                  id="storeLocation"
                  value="Sunshine" />
                Sunshine
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  step="0.1"
                  name="standardRate"
                  id="standardRate"
                  min="18.90"
                  placeholder="Standard Rate..."
                  required />
              </FormGroup>
              <Button>Change</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="red" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default EditEmployeeModal
