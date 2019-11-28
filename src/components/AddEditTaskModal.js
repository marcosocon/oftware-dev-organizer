import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

class AddEditTaskModal extends React.Component {
	handleClose = () => {
		this.props.onClose();
	};

	render() {
		return (
			<Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
				<DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
			</Dialog>
		)
	}
}

export default AddEditTaskModal;






