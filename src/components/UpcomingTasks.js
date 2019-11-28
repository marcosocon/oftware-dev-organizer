import React from 'react';
import moment from 'moment';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper } from '@material-ui/core';
import AddEditTaskModal from './AddEditTaskModal';

import {MyContext} from './../Context';

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
							<Paper>
								<Table>
									<TableHead>
										<TableRow>
											{Object.keys(tasks[0]).map(key => <TableCell>{key.toUpperCase()}</TableCell>)}
										</TableRow>
									</TableHead>

									<TableBody>
										{tasks.map(task => {
											const values = Object.values(task);
											return (
												<TableRow>
													{values.map(val => {
														let v = moment.isMoment(val) ? moment(val).format('D MMM, YYYY') : val;
														return <TableCell>{v}</TableCell>
													})}
												</TableRow>
											)
										})}
									</TableBody>
								</Table>
								<Button onClick={this.openAddTaskModal}>+ Add Task</Button>
							</Paper>
							{this.state.addTaskModalShown &&
								<AddEditTaskModal open={this.state.addTaskModalShown} onClose={this.closeAddTaskModal} />
							}
						</div>
					)
				}}
			</MyContext.Consumer>
		)
	}
}

export default UpcomingTasks;
