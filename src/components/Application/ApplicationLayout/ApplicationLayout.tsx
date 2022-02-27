import {ReactNode} from 'react';
import {Box, CssBaseline, GlobalStyles, Grid} from '@mui/material';
import {styles} from '../globalStyles';
import {Helmet} from 'react-helmet';

const siteTitle = 'Генератор прайс-листов'

interface IApplicationLayoutProps {
	children: {
		header?: ReactNode
		content?: ReactNode
		footer?: ReactNode
	}
}

export default (
	function ApplicationLayout({children: {header, content, footer}}: IApplicationLayoutProps) {
		return (
			<Box sx={{height: '100%', flexGrow: 1}}>
				<CssBaseline/>
				<GlobalStyles styles={styles}/>
				<Helmet defaultTitle={siteTitle}/>
				<Grid container direction='column' wrap='nowrap' sx={{height: '100%'}}>
					<Grid item>
						{header}
					</Grid>
					<Grid item container sx={{flexGrow: 1, overflow: 'auto'}}>
						<Box sx={{flexGrow: 1}}>
							{content}
						</Box>
					</Grid>
					<Grid item sx={{backgroundColor: 'gray'}}>
						{footer}
					</Grid>
				</Grid>
			</Box>
		)
	}
)