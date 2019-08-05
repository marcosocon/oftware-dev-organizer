import React from 'react';
import moment from 'moment';
import { Table, Button, Modal, Input, Radio } from 'semantic-ui-react';

import {MyContext} from './../Context';
import { throwStatement } from '@babel/types';

class UpcomingTasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addTaskModalShown: false,
			taskTitle: '',
			taskDescription: '',
			taskPriority: 'minor',

		}

		this.openAddTaskModal = this.openAddTaskModal.bind(this);
		this.closeAddTaskModal = this.closeAddTaskModal.bind(this);
		this.saveTask = this.saveTask.bind(this);
		this.onRadioChange = this.onRadioChange.bind(this);

	}

	openAddTaskModal() {
		return this.setState({ addTaskModalShown: true });
	}

	closeAddTaskModal() {
		return this.setState({ addTaskModalShown: false });
	}

	onRadioChange(e, radio) {
		return this.setState({taskPriority: radio.value});
	}
	
	saveTask() {
		this.context.state.addTask({
			name: this.state.taskTitle,
			priority: this.state.taskPriority
		})
		this.closeAddTaskModal();
		return this.setState({taskTitle: ''});
	}

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					this.context = context;
					const { tasks } = context.state;
					return (
						<div>
							<Table celled>
								<Table.Header>
									<Table.Row>
										{Object.keys(tasks[0]).map(key => <Table.HeaderCell>{key.toUpperCase()}</Table.HeaderCell>)}
									</Table.Row>
								</Table.Header>

								<Table.Body>
									{tasks.map(task => {
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
									<Input placeholder='Task Title' onChange={(e) => this.setState({taskTitle: e.target.value})} value={this.state.taskTitle} />
									<Input placeholder='Task Description' onChange={(e) => this.setState({taskDescription: e.target.value})} value={this.state.taskDescription}/>
									<Radio
										label='Major'
										value='major'
										onChange={this.onRadioChange}
										checked={this.state.taskPriority === 'major'}
									/>
									<Radio
										label='Normal'
										value='normal'
										onChange={this.onRadioChange}
										checked={this.state.taskPriority === 'normal'}
									/>
									<Radio
										label='Minor'
										value='minor'
										onChange={this.onRadioChange}
										checked={this.state.taskPriority === 'minor'}
									/>

								</Modal.Content>
								<Modal.Actions>
									<Button
										negative
										onClick={this.closeAddTaskModal}>
											Close
									</Button>
									<Button
										positive
										icon="checkmark"
										labelPosition='left'
										content='Save'
										onClick={this.saveTask}/>
								</Modal.Actions>
							</Modal>
						</div>
					)
				}}
			</MyContext.Consumer>

		)
	}
}

export default UpcomingTasks;
