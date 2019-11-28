import React from 'react';
import moment from 'moment';

const MyContext = React.createContext();

class MyProvider extends React.Component {
	state = {
		addTask: (task) => {
			this.setState({tasks: [...this.state.tasks, task]})
		},
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
				name: 'Optt LLC',
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
	};

	render() {
		return (
			<MyContext.Provider value={{state: this.state}}>
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

export {MyContext, MyProvider}
