import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import EmployeeForm from '../../EmployeeForm/EmployeeForm';

class AddNewEmployeeModal extends React.Component {
	state = {
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
				>Add New</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
				>
					<ModalHeader
						toggle={this.toggle}
					>New Employee Profile</ModalHeader>
					<ModalBody>
						<EmployeeForm />
					</ModalBody>
					<ModalFooter>
            <Button color="blue" onClick={this.toggle}>Save</Button>
            <Button color="red" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default AddNewEmployeeModal
