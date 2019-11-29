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

	constructor(props) {
		super(props);
		this.state = {
			taskName: '',
			taskProjectId: '',
			dueDate: moment()
		}
	}
	handleClose = () => {
		this.props.onClose();
	};

	render() {
		return (
			<MyContext.Consumer>
				{(context) => {
					const { projects } = context.state;
					return (
						<Dialog
							onClose={this.handleClose}
							open={this.props.open}>
							<DialogTitle>Add / Edit Task</DialogTitle>
							<TextField
								label="Task Name"
								onChange={(e) => this.setState({taskName: e.target.value})}
								value={this.state.taskName}/>
							<Select
								value={this.state.taskProjectId}
								onChange={(e) => this.setState({taskProjectId: e.target.value})}>
								{projects.map((proj) => <MenuItem value={proj.id}>{proj.name}</MenuItem>)}
							</Select>
							<MuiPickersUtilsProvider utils={MomentUtils}>
								<KeyboardDatePicker
									format="DD/MM/YYYY"
									value={this.state.dueDate}
									onChange={(date => this.setState({dueDate: moment(date)}))}	
									label="Dues on"/>
							</MuiPickersUtilsProvider>
							<DialogActions>
								<Button color="default">
									Cancel
								</Button>
								<Button
									onClick={()=>console.log(this.state)}
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






