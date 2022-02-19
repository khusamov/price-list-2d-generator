import {Box, CssBaseline, GlobalStyles} from '@mui/material';
import ApplicationBar from '../ApplicationBar';
import TreeEditor from '../TreeEditor';
import {styles} from './globalStyles';
import {Helmet} from 'react-helmet';

const siteTitle = 'Генератор прайс-листов'

export default function Application() {
	return (
		<Box sx={{flexGrow: 1}}>
			<CssBaseline/>
			<GlobalStyles styles={styles}/>
			<Helmet defaultTitle={siteTitle}/>
			<ApplicationBar/>
			<Box sx={{padding: 2}}>
				<TreeEditor/>
			</Box>
		</Box>
	)
}