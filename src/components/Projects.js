import React from "react";
import moment from 'moment';
import { Button, Card, Grid, Icon, CardContent, CardActions } from '@material-ui/core';

import { MyContext } from './../Context';

const styles = {
	projectSectionWrapper: {
		margin: '30px 0',
	},
	cardWrapper: {
		margin: '20px 0',
	}
}

const Projects = () => {
	return (
		<MyContext.Consumer>
			{(context) => {
				const {projectsFn} = context;
				const {projects} = context.state;
				return (
					<Grid container style={styles.projectSectionWrapper}>
						{projects.map(proj => (
								<Card key={proj.name} style={styles.cardWrapper}>
									<CardContent>
										<h4>{proj.name}</h4>
										<p>{proj.description}</p>
										<p>{proj.assignee}</p>
										<p>Active since: {moment(proj.activeSince).format('MMMM - YY')}</p>
									</CardContent>
									<CardActions>
										<Button size="small"><Icon>edit</Icon></Button>
										<Button size="small" onClick={() => projectsFn.removeProject(proj)}><Icon>delete</Icon></Button>
									</CardActions>
								</Card>)
							)}
					</Grid>
				)
			}}
		</MyContext.Consumer>
	);
};

export default Projects;
