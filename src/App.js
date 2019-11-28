import React from 'react';
import { Container } from '@material-ui/core';
import './App.scss';

import Projects from './components/Projects';
import UpcomingTasks from './components/UpcomingTasks';
import {MyProvider} from './Context'

const App = () => {
	return (
		<MyProvider>
			<div className="App">
				<header className="App-header">
					<Container>
						<UpcomingTasks />
						<h3>Projects</h3>
						<Projects />
					</Container>
				</header>
			</div>
		</MyProvider>
	);
}

export default App;
