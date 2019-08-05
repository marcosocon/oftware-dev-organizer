import React from 'react';

import { Modal, Input, Button, Radio} from 'semantic-ui-react'

class AddEditTaskModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNew: props.isNew,
			open: props.open
		}
	}

	render() {
		return (
			<Modal
				open={this.state.open}
				size="small">
				<Modal.Header>Add a Task</Modal.Header>
				<Modal.Content>
					<Input placeholder='Task Title' />
					<Input placeholder='Task Description' />
					<Radio
						label='Major'
						value='major'
						checked={this.state.value === 'major'}
					/>

				</Modal.Content>
				<Modal.Actions>
					<Button negative onClick={this.closeAddTaskModal}>Close</Button>
					<Button positive icon="checkmark" labelPosition='left' content='Save' />
				</Modal.Actions>
			</Modal>
		)
	}
}

export default AddEditTaskModal;
