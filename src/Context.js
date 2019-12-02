import React from 'react';
import moment from 'moment';

const MyContext = React.createContext();

class MyProvider extends React.Component {
	state = {
		addTask: (task) => {
			this.setState({tasks: [...this.state.tasks, task]})
		},
		tasks: [{
			id: 1,
			name: 'Task',
			projectId: 1,
			assigneeId: 1,
			dueDate: true,
			priority: 0,
			dueOn: moment()
		}, {
			id: 2,
			name: 'Task 2',
			projectId: 3,
			assigneeId: 2,
			dueDate: true,
			priority: 2,
			dueOn: moment()
		}],
		users: [{
			id: 1,
			name: 'Marco Gutierrez',
		}, {
			id: 2,
			name: 'Erick Lopez',
		}],
		priorities: [{
			value: 0,
			label: 'Minor'
		}, {
			value: 1,
			label: 'Normal'
		}, {
			value: 2,
			label: 'Major'
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

	addProject = project => this.setState({projects: [...this.state.projects, project]});

	removeProject = project => {
		const index = this.state.projects.indexOf(project);
		if (index > -1) {
			this.state.projects.splice(index, 1);
			this.setState({projects: this.state.projects});
		}
	}

	addTask = task => this.setState({tasks: [...this.state.tasks, task]});

	removeTask = task => {
		const index = this.state.tasks.indexOf(task);
		if (index > -1) {
			this.state.tasks.splice(index, 1);
			this.setState({tasks: this.state.tasks});
		}
	}
	

	render() {
		const projectsFn = {
			addProject: this.addProject,
			removeProject: this.removeProject
		};

		const tasksFn = {
			addTask: this.addTask,
			removeTask: this.removeTask
		};

		return (
			<MyContext.Provider value={{state: this.state, projectsFn, tasksFn}}>
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

export {MyContext, MyProvider}
