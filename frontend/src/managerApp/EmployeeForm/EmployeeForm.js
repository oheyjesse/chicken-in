import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class EmployeeForm extends React.Component {
  state = {
    firstName: this.props.employee ? this.props.employee.firstName : null,
    lastName: this.props.employee ? this.props.employee.lastName : null,
    email: this.props.employee ? this.props.employee.email : null,
    storeLocation: this.props.employee ? this.props.employee.storeLocation : null,
    standardRate: this.props.employee ? this.props.employee.standardRate : null,
    modal: this.props.modal
  }

  toggle = () => {
    this.setState({
      modal: !this.props.modal
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    // // Close Modal
    this.toggle()

    console.log(this.state)
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
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
          <Input
            onChange={this.handleChange}
            type="select"
            name="storeLocation"
            id="storeLocation"
            required> //TODO: select multiple option
            <option value="">Store Location...</option>
            <option value="Springvale">Springvale</option>
            <option value="Hobart">Hobart</option>
            <option value="Sunshine">Sunshine</option>
          </Input>
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
        <Button >Create New</Button>
      </Form>
    )
  }
}

export default EmployeeForm
