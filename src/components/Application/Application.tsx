import {SyntheticEvent, useState} from 'react';
import {Helmet} from 'react-helmet';
import {Box, CssBaseline, GlobalStyles, Grid, Typography} from '@mui/material';
import generateDataSample from '../../samples/tree-data/generateDataSample';
import getAllNodes from '../../functions/getAllNodes';
import ApplicationBar from '../ApplicationBar';
import TreeEditor from '../TreeEditor';
import {styles} from './globalStyles';

const siteTitle = 'Генератор прайс-листов'

export default function Application() {
	const data = generateDataSample()
	const [expandedNodeIds, setExpandedNodeIds] = useState(getAllNodes(data).map(node => node.id))
	const onNodeToggle = (event: SyntheticEvent, nodeIds: string[]) => {
		setExpandedNodeIds(nodeIds)
	}
	return (
		<Box sx={{height: '100%', flexGrow: 1}}>
			<CssBaseline/>
			<GlobalStyles styles={styles}/>
			<Helmet defaultTitle={siteTitle}/>
			<Grid container direction='column' wrap='nowrap' sx={{height: '100%'}}>
				<Grid item>
					<ApplicationBar/>
				</Grid>
				<Grid item container sx={{flexGrow: 1, overflow: 'auto'}}>
					<Box sx={{flexGrow: 1}}>
						<TreeEditor
							data={data}
							expanded={expandedNodeIds}
							onNodeToggle={onNodeToggle}
						/>
					</Box>
				</Grid>
				<Grid item sx={{backgroundColor: 'gray'}}>
					<Typography sx={{textAlign: 'center', padding: 1, color: 'white'}}>
						Павловский Посад, 2022 год
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}