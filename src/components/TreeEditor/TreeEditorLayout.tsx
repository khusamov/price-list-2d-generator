import {ReactNode} from 'react';
import {Box, Grid, Toolbar} from '@mui/material';

interface ITreeEditorLayoutProps {
	children: {
		toolbar: ReactNode,
		view: ReactNode,
		form?: ReactNode
	}
}

/**
 * Макет редактора древовидных данных.
 * @param toolbar
 * @param view
 * @param form
 * @constructor
 */
export default function TreeEditorLayout({children: {toolbar, view, form}}: ITreeEditorLayoutProps) {
	return (
		<Grid container direction='column' wrap='nowrap' sx={{height: '100%'}}>
			<Grid item>
				<Toolbar>
					{toolbar}
				</Toolbar>
			</Grid>
			<Grid item container direction='row' wrap='nowrap' sx={{flexGrow: 1}}>
				<Grid item sx={{flexGrow: 1}}>
					{view}
				</Grid>
				{form && (
					<Grid item>
						{form}
					</Grid>
				)}
			</Grid>
		</Grid>
	)
}