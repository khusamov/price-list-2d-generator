import {Box, CssBaseline, GlobalStyles} from '@mui/material';
import ApplicationBar from '../ApplicationBar';
import TreeEditor from '../TreeEditor';
import {styles} from './globalStyles';

export default function Application() {
	return (
		<Box sx={{flexGrow: 1}}>
			<CssBaseline/>
			<GlobalStyles styles={styles}/>
			<ApplicationBar/>
			<Box sx={{padding: 2}}>
				<TreeEditor/>
			</Box>
		</Box>
	)
}