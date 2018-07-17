import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class EmployeeForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="text" name="firstName" id="firstName" placeholder="First Name..." />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="lastName" id="lastName" placeholder="Last Name..." />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Employee Email..." />
        </FormGroup>
        <FormGroup>
          <Input type="select" name="storeLocation" id="storeLocation"> //TODO: select multiple option
            <option value="">Store Location...</option>
            <option value="Springvale">Springvale</option>
            <option value="Hobart">Hobart</option>
            <option value="Sunshine">Sunshine</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input type="number" step="0.1" name="standardRate" id="standardRate" min="18.90" placeholder="Standard Rate..." />
        </FormGroup>
        <Button>Create New</Button>
      </Form>
    )
  }
}

export default EmployeeForm
