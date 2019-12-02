import React from 'react';
import moment from 'moment';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Icon } from '@material-ui/core';
import AddEditTaskModal from './AddEditTaskModal';

import {MyContext} from './../Context';

class UpcomingTasks extends React.Component {
	state = {
		addTaskModalShown: false,
		taskTitle: '',
		taskDescription: '',
		taskPriority: 'minor'
	}

	openAddTaskModal = () => this.setState({ addTaskModalShown: true });
	closeAddTaskModal = () => this.setState({ addTaskModalShown: false });
	deleteTask = task => this.context.tasksFn.removeTask(task);
	saveTask = () => {
		this.context.tasksFn.addTask({
			name: this.state.taskTitle,
			priority: this.state.taskPriority
		})
		this.closeAddTaskModal();
	}

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					this.context = context;
					const { tasks, priorities, projects, users } = context.state;
					return (
						<div>
							<Paper>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Name</TableCell>
											<TableCell>Project</TableCell>
											<TableCell>Priority</TableCell>
											<TableCell>Assignee</TableCell>
											<TableCell>Due On</TableCell>
											<TableCell>Actions</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{tasks.map(task => {
											return (
												<TableRow>
													<TableCell>{task.name}</TableCell>
													<TableCell>{projects.find(proj => proj.id === task.projectId).name}</TableCell>
													<TableCell>{priorities.find(priority => priority.value === task.priority).label}</TableCell>
													<TableCell>{users.find(u => u.id === task.assigneeId).name}</TableCell>
													<TableCell>{moment(task.dueOn).format('DD MMM - YY')}</TableCell>
													<TableCell>
														<Button><Icon>edit</Icon></Button>
														<Button onClick={() => this.deleteTask(task)}><Icon>delete</Icon></Button>
													</TableCell>
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
