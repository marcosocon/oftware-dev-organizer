import React from 'react';
import MomentUtils from '@date-io/moment';
import {
	Dialog,
	DialogTitle,
	DialogActions,
	Button,
	TextField,
	Select,
	MenuItem
} from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
  } from '@material-ui/pickers';

import {MyContext} from './../Context';
import moment from 'moment';

class AddEditTaskModal extends React.Component {

	state = {
		task: {
			name: '',
			projectId: '',
			priority: 0,
			assigneeId: 1,
			dueDate: true,
			dueOn: moment()
		}
	}

	handleClose = () => this.props.onClose();

	handleSave = () => {
		this.context.tasksFn.addTask(this.state.task);
		this.handleClose();
	}

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					this.context = context;
					const { projects } = context.state;
					return (
						<Dialog
							onClose={this.handleClose}
							open={this.props.open}>
							<DialogTitle>Add / Edit Task</DialogTitle>
							<TextField
								label="Task Name"
								onChange={e => this.setState({task: {...this.state.task, name: e.target.value}})}
								value={this.state.taskName}/>
							<Select
								value={this.state.taskProjectId}
								onChange={e => this.setState({task: {...this.state.task, projectId: e.target.value}})}>
								{projects.map((proj) => <MenuItem value={proj.id}>{proj.name}</MenuItem>)}
							</Select>
							<MuiPickersUtilsProvider utils={MomentUtils}>
								<KeyboardDatePicker
									format="DD/MM/YYYY"
									value={this.state.dueDate}
									onChange={date => this.setState({task: {...this.state.task, dueOn: date}})}
									label="Dues on"/>
							</MuiPickersUtilsProvider>
							<DialogActions>
								<Button color="default">
									Cancel
								</Button>
								<Button
									onClick={this.handleSave}
									autoFocus>
									Save
								</Button>
							</DialogActions>
						</Dialog>
					)
				}}
			</MyContext.Consumer>
		)
	}
}

export default AddEditTaskModal;






