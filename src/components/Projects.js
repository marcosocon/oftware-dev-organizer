import React from "react";
import moment from 'moment';
import { Button, Card, Grid, Icon } from "semantic-ui-react";

const styles = {
	projectSectionWrapper: {
		margin: '30px 0',
	},
	cardWrapper: {
		margin: '20px 0',
	}
}

const Projects = props => {
	return (
		<Grid columns="four" style={styles.projectSectionWrapper}>
			<Grid.Row>
			{ props.projects.map(proj => (
				<Grid.Column>
					<Card style={styles.cardWrapper}>
						<Card.Content>
							<Card.Header>{proj.name}</Card.Header>
							<Card.Meta>Active since: {moment(proj.activeSince).format('D MMM, YYYY')}</Card.Meta>
							<Card.Description>{proj.description}</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Button icon>
								<Icon name='eye' />
							</Button>
							<Button icon>
								<Icon name='edit' />
							</Button>
							<Button icon>
								<Icon name='trash' />
							</Button>
						</Card.Content>
					</Card>
				</Grid.Column>)
				)
			}
			</Grid.Row>
		</Grid>
	);
};

export default Projects;
