import React from 'react';
import Projects from './components/Projects';
import UpcomingTasks from './components/UpcomingTasks';

import './App.scss';
import { Container } from 'semantic-ui-react';
import moment from 'moment';

const sampleData = {
	tasks: [{
		name: 'Fix Header',
		projectId: 1,
		priority: 0,
		dueDate: true,
		dueOn: moment().add('days', 1)
	}, {
		name: 'Create new login process',
		projectId: 1,
		priority: 1,
		dueDate: false,
		dueOn: null
	}, {
		name: 'Refactor Everything',
		projectId: 3,
		priority: 0,
		dueDate: true,
		dueOn: moment().add('days', 3)
	}],
	projects: [{
			id: 1,
			name: 'Sample Company',
			activeSince: '06/29/2016',
			description: 'Some sample description',
			assignee: 'Brad Pitt'
		}, {
			id: 2,
			name: 'Mockr LLC',
			activeSince: '06/29/2016',
			description: 'Some sample description',
			assignee: 'Morgan Freeman'
		}, {
			id: 3,
			name: 'Conex',
			activeSince: '06/29/2016',
			description: 'Some sample description',
			assignee: 'William Somerset'
		}, {
			id: 4,
			name: 'Charles Dickens',
			activeSince: '06/29/2016',
			description: 'Some sample description',
			assignee: 'Detective Mills'
		}, {
			id: 5,
			name: 'Milan Kundera Corp',
			activeSince: '06/29/2016',
			description: 'Some sample description',
			assignee: 'John Doe'
		}
	]
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<UpcomingTasks tasks={sampleData.tasks} />
					<Projects projects={sampleData.projects} />
				</Container>
			</header>
		</div>
	);
}

export default App;
