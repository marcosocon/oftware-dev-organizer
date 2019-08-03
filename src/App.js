import React from 'react';
import { Container } from 'semantic-ui-react';
import './App.scss';

import Projects from './components/Projects';
import UpcomingTasks from './components/UpcomingTasks';
import {MyProvider} from './Context'

function App() {
	return (
		<MyProvider>
			<div className="App">
				<header className="App-header">
					<Container>
						<UpcomingTasks />
						<Projects />
					</Container>
				</header>
			</div>
		</MyProvider>
	);
}

export default App;
