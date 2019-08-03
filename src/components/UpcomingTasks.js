import React from 'react';
import { Table, Button, Modal, Header } from 'semantic-ui-react';
import moment from 'moment';

class UpcomingTasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addTaskModalShown: false
		}

		this.openAddTaskModal = this.openAddTaskModal.bind(this);
	}

	openAddTaskModal() {
		return this.setState({addTaskModalShown: true});
	}

	render() {
		return (
			<div>
				<Table celled>
					<Table.Header>
						<Table.Row>
							{Object.keys(this.props.tasks[0]).map(key => <Table.HeaderCell>{key.toUpperCase()}</Table.HeaderCell>)}
						</Table.Row>
					</Table.Header>
		
					<Table.Body>
						{this.props.tasks.map(task => {
							const values = Object.values(task);
							return (
								<Table.Row>
									{values.map(val => {
										let v = moment.isMoment(val) ? moment(val).format('D MMM, YYYY') : val;
										return <Table.Cell>{v}</Table.Cell>
									})}
								</Table.Row>
							)
						})}
					</Table.Body>
				</Table>
				<Button onClick={this.openAddTaskModal}>+ Add Task</Button>
				<Modal
					open={this.state.addTaskModalShown}
					size="small">
					<Modal.Header>Add a Task</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<Header>Default Profile Image</Header>
							<p>We've found the following gravatar image associated with your e-mail address.</p>
							<p>Is it okay to use this photo?</p>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button negative>Close</Button>
						<Button positive icon="checkmark" labelPosition='left' content='Save'/>
					</Modal.Actions>
				</Modal>
			</div>
		)
	}
}

export default UpcomingTasks;
