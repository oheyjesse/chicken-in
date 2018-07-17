import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input } from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

class AddNewEmployeeModal extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    storeLocation: null,
    standardRate: null,
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    
  handleSubmit = e => {
    e.preventDefault()

    console.log(this.state)

    // Close modal
    this.toggle()
  }

  render () {
    return (
      <div>
        <Button
          color="blue"
          onClick={this.toggle}
        >Add New</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            toggle={this.toggle}
          >New Employee Profile</ModalHeader>
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
              <Button>Create New</Button>
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

export default AddNewEmployeeModal
