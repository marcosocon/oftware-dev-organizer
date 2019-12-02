import React, { Component } from 'react';
import { Container, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import './App.scss';

import Projects from './components/Projects';
import UpcomingTasks from './components/UpcomingTasks';
import {MyProvider} from './Context'

export default class App extends Component {
	state = {
		speedDialOpen: false,
	}

	handleDialOpen = () => this.setState({speedDialOpen: true});
	handleDialClose = () => this.setState({speedDialOpen: false});

	render() {
		const actions = [
			{ icon: <FileCopyIcon />, name: 'Add Project' },
			{ icon: <SaveIcon />, name: 'Add Task' },
		];
		return (
			<MyProvider>
				<div className="App">
					<AppBar position="static">
						<Toolbar>
							<IconButton edge="start"color="inherit" aria-label="menu">
								<MenuIcon />
							</IconButton>
							<Typography variant="h6">Software Engineer Organizer</Typography>
						</Toolbar>
					</AppBar>
					<header className="App-header">
						<Container>
							<h3>Upcoming Tasks</h3>
							<UpcomingTasks />
							<h3>Projects</h3>
							<Projects />
							<SpeedDial
								ariaLabel="SpeedDial example"
								icon={<SpeedDialIcon />}
								onOpen={this.handleDialOpen}
								onClose={this.handleDialClose}
								open={this.state.speedDialOpen}
								direction='down'
								>
								{actions.map(action => (
									<SpeedDialAction
									key={action.name}
									icon={action.icon}
									tooltipTitle={action.name}
									/>
								))}
							</SpeedDial>
						</Container>
					</header>
				</div>
			</MyProvider>
		);
	}
};
